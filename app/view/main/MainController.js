/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Animals.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        let species = Ext.data.StoreManager.lookup('species');
        let panel = Ext.create('Ext.form.Panel', {
            renderTo: document.body,
            title: 'შეცვლა',
            height: 500,
            width: 300,
            bodyPadding: 10,
            floating: true,
            closable: true,
            modal: true,
            defaultType: 'textfield',
            modelValidation: true,
            viewModel: {
                type: 'species',
                data: {
                    species: record
                }
            },
            items: [
                {
                    fieldLabel: 'სახეობის სახელი',
                    name: 'name',
                    bind: '{species.name_KA}'
                },
                {
                    fieldLabel: 'სახეობის სახელი (EN)',
                    name: 'name_en',
                    bind: '{species.name_EN}'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'რაოდენობა',
                    name: 'population',
                    minValue: 0,
                    step: 1000,
                    bind: '{species.population}'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'თარიღი',
                    name: 'date',
                    bind: '{species.date}',
                    format: 'm/d/Y'
                },
                {
                    fieldLabel: 'მუნიციპალიტეტი',
                    name: 'municipality',
                    bind: '{species.municipality_KA}'
                }, {
                    fieldLabel: 'მუნიციპალიტეტი (EN)',
                    name: 'municipality_en',
                    bind: '{species.municipality_EN}'
                },
                {
                    fieldLabel: 'წყარო',
                    name: 'source_name',
                    bind: '{species.source_name_KA}'
                }, {
                    fieldLabel: 'წყარო (EN)',
                    name: 'source_name_en',
                    bind: '{species.source_name_EN}'
                }
            ],
            // Reset and Submit buttons
            buttons: [{
                text: 'გასუფთავება',
                handler: function () {
                    this.up('form').getForm().reset();
                }
            }, {
                text: 'შენახვა',
                formBind: true, //only enabled once the form is valid
                disabled: true,
                handler: function () {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        species.sync();
                        panel.destroy();
                    }
                }
            }
            ],
        });

        // Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
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
        let species = Ext.data.StoreManager.lookup('species');
        let newItem = Ext.create('Animals.model.Species');
        let panel = Ext.create('Ext.form.Panel', {
            renderTo: document.body,
            title: 'შეცვლა',
            height: 500,
            width: 300,
            bodyPadding: 10,
            floating: true,
            closable: true,
            modal: true,
            defaultType: 'textfield',
            model: 'Animals.model.Species',
            modelValidation: true,
            viewModel: {
                type: 'species',
                data: {
                    species: newItem
                }
            },
            items: [
                {
                    fieldLabel: 'სახეობის სახელი',
                    name: 'name',
                    bind: '{species.name_KA}'
                },
                {
                    fieldLabel: 'სახეობის სახელი (EN)',
                    name: 'name_en',
                    bind: '{species.name_EN}'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'რაოდენობა',
                    name: 'population',
                    minValue: 0,
                    step: 1000,
                    bind: '{species.population}'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'თარიღი',
                    name: 'date',
                    bind: '{species.date}',
                    format: 'm/d/Y'
                },
                {
                    fieldLabel: 'მუნიციპალიტეტი',
                    name: 'municipality',
                    bind: '{species.municipality_KA}'
                }, {
                    fieldLabel: 'მუნიციპალიტეტი (EN)',
                    name: 'municipality_en',
                    bind: '{species.municipality_EN}'
                },
                {
                    fieldLabel: 'წყარო',
                    name: 'source_name',
                    bind: '{species.source_name_KA}'
                }, {
                    fieldLabel: 'წყარო (EN)',
                    name: 'source_name_en',
                    bind: '{species.source_name_EN}'
                }
            ],
            // Reset and Submit buttons
            buttons: [{
                text: 'გასუფთავება',
                handler: function () {
                    this.up('form').getForm().reset();
                }
            }, {
                text: 'შენახვა',
                formBind: true, //only enabled once the form is valid
                disabled: true,
                handler: function () {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        species.add(newItem);
                        species.sync();
                        panel.destroy();
                    }
                }
            }
            ],
        });

        // Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    onRemoveItem: function (e) {
        let species = Ext.data.StoreManager.lookup('species');
        let item = e.up('panel').selection;
        if (item !== null) {
            Ext.Msg.confirm('ყურადღება', 'ნამდვილად გსურთ ამ მონაცემის წაშლა?', () => {
                species.remove(item);
                species.sync();

                Ext.Msg.alert('successfully removed');
            })
        } else {

        }

    }
});
