function processItem(item) {
  let mun = Ext.data.StoreManager.lookup('municipalities'),
    spec = Ext.data.StoreManager.lookup('species');
  item.municipality = item.get('municipality').id === undefined ?
    mun.getAt(mun.findBy((rec, id) => id === item.get('municipality')))
    : item.get('municipality');
  item.species = item.get('species').id === undefined ?
    spec.getAt(spec.findBy((rec, id) => id === item.get('species')))
    : item.get('species');

  return item;
}

/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Animals.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',
  processBilingualItem: function (parent, options, editEntry = false) {

    let panel = Ext.create('Animals.view.main.BilingualEntryForm', {
      renderTo: parent,
      title: editEntry !== null ? 'შეცვლა' : 'დამატება',
      model: options.model,
      viewModel: {

        data: {
          model: options.modelData
        }
      },

      handlers: {
        save: function (e) {
          const form = e.up('form').getForm();
          if (form.isValid()) {
            if (!editEntry)
              options.store.add(options.modelData);
            console.log(options.store)
            options.store.sync();
            options.store.load();
            panel.destroy();
          }
        }
      }
    });

    panel.setZIndex(50);
    options.additionalFields = options.additionalFields || [];
    options.additionalFields.map(itm => {
      let a = panel.add(itm);
      panel.setHeight(panel.getHeight() + a.getHeight() + 5);
    });

  },
  onNumberOfPagesChanged(e) {
    if (!e.isValid()) return;
    e.up('panel').store
      .setPageSize(Number(e.getValue()));
    this.onRefresh(e);
  },
  onRefresh(elem) {
    let panel = elem.up('panel');
    let loadingMask = new Ext.LoadMask({
      msg: 'Please wait...',
      target: panel
    });

    loadingMask.show();
    setTimeout(() => {
      let lastPage = Math.ceil(panel.store.getTotalCount() / panel.store.getPageSize());

      panel.store.currentPage =
        panel.store.currentPage > lastPage ? lastPage : panel.store.currentPage;
      panel.store.loadPage(panel.store.currentPage, {
        callback: () => {
          loadingMask.hide();
        }
      })
    }, 200)//only for testing
  },
  onEditItem: function (e) {
    let item = e.up('panel').selection;
    if (item !== null) this.onItemSelected({}, item)
  },
  onItemSelected: function (sender, record) {
    let species = Ext.data.StoreManager.lookup('speciesdata');

    let panel = Ext.create('Animals.view.main.SpeciesDataForm',
      {
        title: 'შეცვლა',
        viewModel: {
          type: 'datamodel',
          data: {
            species: record
          }
        },

        handlers: {
          save: function (e) {
            const form = e.up('form').getForm();
            if (form.isValid()) {
              species.sync();
              panel.destroy();
            }
          },

          addSpecies: () => this.processEntry(false, 'Animals.model.Species', 'species', panel, this.processBilingualItem),
          editSpecies: () => this.processEntry(panel.getForm().findField('species').getModelData(),
            'Animals.model.Species', 'species', panel, this.processBilingualItem),
          addMunicipality: () => this.processEntry(false, 'Animals.model.Municipality', 'municipalities', panel, this.processBilingualItem),
          editMunicipality: () => this.processEntry(panel.getForm().findField('municipality').getModelData(), 'Animals.model.Municipality', 'municipalities', panel, this.processBilingualItem),
          addSource: () => this.processSource(false, panel, this.processBilingualItem, this.processEntry),
          editSource: () =>
            this.processSource(panel.getForm().findField('source').getModelData(), panel, this.processBilingualItem, this.processEntry),
          viewSources: () => this.showSources(panel, record, true)

        }
      });

  },

  onConfirm: function (choice) {
    if (choice === 'yes') {
      //
    }
  },
  onClearFilters: function (e) {
    // The "filters" property is added to the grid by gridfilters
    let grid = e.findParentByType('grid');
    grid.filters.clearFilters();
    grid.getStore().clearFilter()
  },
  onAddItem: function () {
    let speciesData = Ext.data.StoreManager.lookup('speciesdata');
    let newItem = Ext.create('Animals.model.SpeciesData');
    newItem.data.sources = [];
    let panel =
      Ext.create('Animals.view.main.SpeciesDataForm', {
        title: 'დამატება',
        viewModel: {
          type: 'datamodel',
          data: {
            species: newItem
          }
        }, handlers: {
          save: function (e) {
            const form = e.up('form').getForm();
            if (form.isValid()) {
              speciesData.add(processItem(newItem));
              speciesData.sync();
              speciesData.reload();
              panel.destroy();
            }
          },
          addSpecies: () => this.processEntry(false, 'Animals.model.Species', 'species', panel, this.processBilingualItem),
          editSpecies: () => this.processEntry(panel.getForm().findField('species').getModelData(),
            'Animals.model.Species', 'species', panel, this.processBilingualItem),
          addMunicipality: () => this.processEntry(false, 'Animals.model.Municipality', 'municipalities', panel, this.processBilingualItem),
          editMunicipality: () => this.processEntry(panel.getForm().findField('municipality').getModelData(), 'Animals.model.Municipality', 'municipalities', panel, this.processBilingualItem),
          addSource: () => this.processSource(false, panel, this.processBilingualItem, this.processEntry),
          editSource: () =>
            this.processSource(panel.getForm().findField('source').getModelData(), panel, this.processBilingualItem, this.processEntry),
          viewSources: () => this.showSources(panel, newItem, true, true)

        }
      });
  },
  processEntry: (editEntry, className, storeName, panel, processFn) => {
    let entryId = editEntry !== false ? editEntry[Object.keys(editEntry)[0]] : undefined;
    if (entryId === null) return;
    let item = Ext.create(className, {name_KA: '', name_EN: ''});
    let store = Ext.data.StoreManager.lookup(storeName);
    editEntry = editEntry ? store.getAt(store.findBy((rec, id) => {

      return typeof editEntry === "number" ? id === editEntry : id === entryId;
    })) : null;

    processFn(
      panel.body,
      {
        model: className, modelData: editEntry || item,
        store: store
      }, editEntry)

  },
  processSource: (editEntry, panel, processFn, processEntry) => {
    processEntry(editEntry, 'Animals.model.Source', 'sources', panel,
      (parent, options, editEntry) => {
        processFn(
          panel.body, {
            modelData: options.modelData,
            store: Ext.data.StoreManager.lookup('sources'),
            additionalFields: [{
              xtype: 'filefield',
              fieldLabel: 'მიბმული დოკუმენტი',
              name: 'name',
              bind: '{model.attached_document}'
            }]
          }, editEntry)
      })
  },
  onRemoveItem:
    function (e) {

      let species = Ext.data.StoreManager.lookup('speciesdata');
      let item = e.up('panel').selection;
      if (item !== null) {
        Ext.Msg.confirm('ყურადღება', 'ნამდვილად გსურთ ამ მონაცემის წაშლა?', () => {
          species.remove(item);
          species.sync();
          Ext.Msg.alert('successfully removed');
        })
      } else {

      }

    },
  onShowSources(grid, r, c, button, e, item) {
    this.showSources(grid, item, false);
  },
  showSources(grid, item, isEditing, adding) {

    Ext.create('Animals.view.main.MultiSourceList', {
      renderTo: document.body,
      modal: true,
      isEditing: isEditing,

      addSource: (bt) => {

        let newItem = Ext.create('Animals.model.Source');
        let panel = Ext.create('Animals.view.main.BilingualEntryForm',
          {
            renderTo: bt.up('msrclist').body,
            title: 'დამატება',
            model: 'Animals.model.Source',
            draggable: true,
            viewModel: {
              data: {
                model: newItem
              }
            },
            handlers: {
              save: function (e) {
                let form = e.up('form').getForm();
                if (form.isValid()) {

                  item.addSource(newItem);
                  bt.up('msrclist').store.setData(item.get('sources'));

                  bt.up('msrclist').store.sync();//.load();
                  panel.destroy();
                }
              }
            }
          });
        let a = panel.add({
          xtype: 'filefield',
          fieldLabel: 'მიბმული დოკუმენტი',
          name: 'name',
          bind: '{model.attached_document}'
        });
        panel.setHeight(panel.getHeight() + a.getHeight() + 5);

      },
      store: Ext.create('Ext.data.Store', {
        autoload: true,
        model: 'Animals.model.Source',
        proxy: {
          type: 'memory',
          data: item.data ? item.data.sources : item.sources,
          reader: {
            type: 'json'
          }
        }
      }),
      dataItem: adding ? item : undefined,
      zIndex: 500
    }).store.load();
  },
  onEditSource(grid, r, c, button, e, item) {
    this.processEntry(item, 'Animals.model.Source', 'sources', grid,
      () => {
        this.processBilingualItem(
          grid.up('panel').body, {
            modelData: item,
            store: Ext.data.StoreManager.lookup('sources'),
            additionalFields: [{
              xtype: 'filefield',
              fieldLabel: 'მიბმული დოკუმენტი',
              name: 'name',
              bind: '{model.attached_document}'
            }]
          }, item)
      })
  },
  onRemoveSource(grid, r, c, button, e, item) {

    Ext.Msg.confirm('ყურადღება', 'ნამდვილად გსურთ ამ მონაცემის წაშლა?', () => {
      debugger
      let data = grid.up('msrclist').dataItem ||
        Ext.data.StoreManager
          .lookup('speciesdata')
          .query(id, item.species_data_id, false, false, true)
          .getAt(0);
      data.removeSource(item);
      grid.store.setData(data.get('sources'));
    });

  }
})
;
