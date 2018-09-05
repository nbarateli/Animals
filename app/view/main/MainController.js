/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Animals.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        let panel = Ext.create('Ext.form.Panel', {
            renderTo: document.body,
            title: 'შეცვლა',
            height: 350,
            width: 300,
            bodyPadding: 10,
            floating: true,
            closable: true,
            modal: true,
            defaultType: 'textfield',
            viewModel: {
                data: {
                    species: record
                }
            },
            items: [
                {
                    fieldLabel: 'სახეობის სახელი',
                    name: 'name',
                    bind: '{species.name.KA}'
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
                    bind: '{species.date}'

                },
                {
                    fieldLabel: 'მუნიციპალიტეტი',
                    name: 'municipality',
                    bind: '{species.municipality.KA}'

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
                handler: function (e, el, o) {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {

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
    }
});
