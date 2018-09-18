/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Animals.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',
  addBilingualItem: function (parent, options) {

    let panel = Ext.create('Animals.view.main.BilingualEntryForm', {
      renderTo: parent,
      title: 'შეცვლა',
      model: options.model,
      viewModel: {
        // type: 'species',
        data: {
          model: options.modelData
        }
      },

      handlers: {
        save: function (e) {
          var form = e.up('form').getForm();
          if (form.isValid()) {
            debugger
            options.store.add(options.modelData)
            // options.store.sync();
            panel.destroy();
          }
        }
      }
    });
    panel.setZIndex(1000)
  },
  onItemSelected: function (sender, record) {
    let species = Ext.data.StoreManager.lookup('speciesdata');
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

            (this.addBilingualItem({model: source}))
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
          addSpecies: () => {
            let species = Ext.create('Animals.model.Species', {name_KA: '', name_EN: ''});
            this.addBilingualItem(
              panel.body, {
                model: 'Animals.model.Species', modelData: species,
                store: Ext.data.StoreManager.lookup('species')
              })
          }
        }
      });

  },
  onRemoveItem: function (e) {
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
