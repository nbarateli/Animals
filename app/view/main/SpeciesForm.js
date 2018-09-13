Ext.define('Animals.view.main.SpeciesForm',
    {
        extend: 'Ext.form.Panel',
        renderTo: document.body,
        title: '',
        height: 500,
        width: 380,
        bodyPadding: 5,
        floating: true,
        closable: true,
        modal: true,
        defaultType: 'textfield',
        model: 'Animals.model.Species',
        modelValidation: true,
        saveHandler: (e, i) => '',
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
                xtype: 'combobox',
                store: 'municipalities',
                fieldLabel: 'მუნიციპალიტეტი',
                displayField: 'name_KA',
                valueField: 'id',
                name: 'municipality',
                bind: '{species.municipality}',
                // listeners: {
                //     change: (c, newVal) => {
                //         console.log(c, newVal, Ext.data.StoreManager.lookup('municipalities').getAt(newVal - 1))
                //
                //     },
                // }
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
            handler: function (e) {
                e.up('form').getForm().reset();
            }
        }, {
            text: 'შენახვა',
            formBind: true, //only enabled once the form is valid
            disabled: true,
            handler: (e, i) => e.up('form').saveHandler(e, i)
        }
        ],
    });