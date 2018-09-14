Ext.define('Animals.view.main.SpeciesDataForm',
  {
    extend: 'Ext.form.Panel',
    renderTo: document.body,
    title: '',

    height: 350,
    width: 400,
    bodyPadding: 5,
    floating: true,
    closable: true,
    modal: true,
    defaultType: 'textfield',
    model: 'Animals.model.SpeciesData',
    modelValidation: true,
    saveHandler: (e, i) => '',

    defaults: {
      xtype: 'textfield',
      labelAlign: 'left',
      labelWidth: 100,
      defaults: {xtype: 'textfield', labelAlign: 'left', labelWidth: 100}
    },
    items: [
      {
        xtype: 'container', layout: 'hbox',
        items: [{
          xtype: 'combobox',
          store: 'species',
          displayField: 'name_KA',
          valueField: 'id',
          fieldLabel: 'სახეობა',
          name: 'name',
          bind: '{species.name_KA}'
        }, {
          xtype: 'button',
          iconCls: 'x-fa fa-edit',
          tooltip: 'Edit current item',
          handler: 'onAddItem'
        }, {
          xtype: 'button',
          iconCls: 'x-fa fa-plus',
          tooltip: 'Add a new item to the store',
          handler: 'onAddItem'
        }]
      }, {
        xtype: 'container',
        layout: 'hbox',
        items: [{
          xtype: 'numberfield',
          fieldLabel: 'რაოდენობა',
          name: 'population',
          minValue: 0,
          step: 1000,
          bind: '{species.population}'
        }]
      }, {
        xtype: 'container',
        layout: 'hbox',
        items: [{
          xtype: 'datefield',
          fieldLabel: 'თარიღი',
          name: 'date',
          bind: '{species.date}',
          format: 'm/d/Y'
        }]
      }, {
        xtype: 'container',
        layout: 'hbox',
        items: [{
          xtype: 'combobox',
          store: 'municipalities',
          fieldLabel: 'მუნიციპალიტეტი',
          displayField: 'name_KA',
          valueField: 'id',
          name: 'municipality',
          bind: '{species.municipality}'
        }, {
          xtype: 'button',
          iconCls: 'x-fa fa-edit',
          tooltip: 'Edit current item',
          handler: 'onAddItem'
        }, {
          xtype: 'button',
          iconCls: 'x-fa fa-plus',
          tooltip: 'Add a new item to the store',
          handler: 'onAddItem'
        }]
      }, {
        xtype: 'container',
        layout: 'hbox',
        items: [{fieldLabel: 'წყარო', name: 'source_name', bind: '{species.source_name_KA}'}, {
          xtype: 'button',
          iconCls: 'x-fa fa-edit',
          tooltip: 'Edit current item',
          handler: 'onAddItem'
        }, {
          xtype: 'button',
          iconCls: 'x-fa fa-plus',
          tooltip: 'Add a new item to the storeZz',
          handler: 'onAddItem'
        }]
      }]
    ,
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

