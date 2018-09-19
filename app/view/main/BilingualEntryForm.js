Ext.define('Animals.view.main.BilingualEntryForm',
  {
    extend: 'Ext.form.Panel',
    renderTo: document.body,
    title: '',
    height: 200,
    width: 400,
    bodyPadding: 5,
    floating: true,
    closable: true,
    // modal: true,
    defaultType: 'textfield',
    modelValidation: true,
    handlers: {
      save: function (e) {
        var form = e.up('form').getForm();
        if (form.isValid()) {
          species.sync();
          panel.destroy();
        }
      }
    },

    defaults: {
      xtype: 'textfield',
      labelAlign: 'left',
      labelWidth: 100,
      defaults: {xtype: 'textfield', labelAlign: 'left', labelWidth: 100}
    },
    items: [{
      xtype: 'textfield',
      fieldLabel: 'სახელი (KA)',
      name: 'name_ka',
      bind: '{model.name_KA}'
    }, {
      xtype: 'textfield',
      fieldLabel: 'სახელი (EN)',
      name: 'name_en',
      bind: '{model.name_EN}'
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
      handler: (e, i) => (e.up('form').handlers.save || BLANK_FUNCTION)(e, i)
    }
    ],
  });

