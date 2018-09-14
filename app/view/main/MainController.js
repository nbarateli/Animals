/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Animals.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        let species = Ext.data.StoreManager.lookup('speciesdata');
        let panel = Ext.create('Animals.view.main.SpeciesDataForm', {
            title: 'შეცვლა',
            viewModel: {
                type: 'species',
                data: {
                    species: record
                }
            },

            saveHandler: function (e) {
                var form = e.up('form').getForm();
                if (form.isValid()) {
                    species.sync();
                    panel.destroy();
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
        let species = Ext.data.StoreManager.lookup('speciesdata');
        let newItem = Ext.create('Animals.model.SpeciesData');
        let panel =
            Ext.create('Animals.view.main.SpeciesDataForm', {
                title: 'დამატება',
                viewModel: {
                    type: 'species',
                    data: {
                        species: newItem
                    }
                }, saveHandler: function (e) {

                    var form = e.up('form').getForm();
                    if (form.isValid()) {
                        species.add(newItem);
                        species.sync();
                        species.load();
                        panel.destroy();
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
