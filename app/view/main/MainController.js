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
          var form = e.up('form').getForm();
          if (form.isValid()) {
            console.log(options)
            if (!editEntry)
              options.store.add(options.modelData)
            // options.store.sync();

            console.log(options)
            panel.destroy();
          }
        }
      }
    });

    panel.setZIndex(1000);
    options.additionalFields = options.additionalFields || [];
    options.additionalFields.map(itm => {
      let a = panel.add(itm);
      panel.setHeight(panel.getHeight() + a.getHeight());
    });

  },
  onItemSelected: function (sender, record) {
    let species = Ext.data.StoreManager.lookup('speciesdata');
    console.log(record)
    let panel = Ext.create('Animals.view.main.SpeciesDataForm',
      {
        title: 'შეცვლა',
        viewModel: {
          type: 'species',
          data: {
            species: record
          }
        },

        handlers: {
          save: function (e) {
            var form = e.up('form').getForm();
            if (form.isValid()) {
              species.sync();
              panel.destroy();
            }
          },
          addSpecies: () => {

            (this.processBilingualItem({model: source}))
          }
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
    e.findParentByType('grid').filters.clearFilters();
  },
  onAddItem: function (sender, record) {
    let speciesData = Ext.data.StoreManager.lookup('speciesdata');
    let newItem = Ext.create('Animals.model.SpeciesData');
    let panel =
      Ext.create('Animals.view.main.SpeciesDataForm', {
        title: 'დამატება',
        viewModel: {
          type: 'species',
          data: {
            species: newItem
          }
        }, handlers: {
          save: function (e) {
            var form = e.up('form').getForm();
            if (form.isValid()) {
              speciesData.add(newItem)
              speciesData.sync();
              panel.destroy();
            }
          },
          addSpecies: () => this.processEntry(false, 'Animals.model.Species', 'species', panel, this.processBilingualItem),
          editSpecies: () => this.processEntry(panel.getForm().findField('species').getModelData(),
            'Animals.model.Species', 'species', panel, this.processBilingualItem),
          addMunicipality: () => this.processEntry(false, 'Animals.model.Municipality', 'municipalities', panel, this.processBilingualItem),
          editMunicipality: () => this.processEntry(panel.getForm().findField('municipality').getModelData(), 'Animals.model.Municipality', 'municipalities', panel, this.processBilingualItem),
          addSource: () => this.processSource(false, panel, this.processBilingualItem),
          editSource: () => {
            console.log(panel);

            this.processSource(panel.getForm().findField('source').getModelData(), panel, this.processBilingualItem)
          }
        }
      });
    // console.log(panel)
  },
  processEntry: (editEntry, className, storeName, panel, processFn) => {
    let entryId = editEntry !== false ? editEntry[Object.keys(editEntry)[0]] : undefined;
    if (entryId === null) return;
    let item = Ext.create(className, {name_KA: '', name_EN: ''});
    let store = Ext.data.StoreManager.lookup(storeName);
    editEntry = editEntry ? store.getAt(store.findBy((rec, id) => {

      return id === entryId
    })) : null;

    processFn(
      panel.body,
      {
        model: className, modelData: editEntry || item,
        store: store
      }, editEntry)

  },
  processSource: (editEntry, panel, processFn) => {
    debugger;
    this.processEntry(editEntry, panel, 'Animals.model.Source', 'sources',
      (parent, options, editEntry) => {
        processFn(
          panel.body, {
            model: options.modelData,
            store: Ext.data.StoreManager.lookup('sources'),
            additionalFields: [{
              xtype: 'filefield',
              fieldLabel: 'მიბმული დოკუმენტი',
              name: 'name',
              bind: '{model.attached_document}',
              listeners: {change: () => false}
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
          species.sync({failure: () => console.log('oeee')});

          Ext.Msg.alert('successfully removed');
        })
      } else {

      }

    }
});
