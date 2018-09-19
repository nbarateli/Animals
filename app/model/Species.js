Ext.define('Animals.model.Species', {
  extend: 'Animals.model.Base',

  requires: ['Ext.data.field.Date', 'Ext.data.proxy.LocalStorage'],
  fields: [
    {name: 'id', type: 'int'},
    {name: 'name_KA', type: 'string'}, {name: 'name_EN', type: 'string'}

  ],
  validators: {
    name_KA: 'presence', name_EN: 'presence',

  },
  proxy: {
    type: 'memory',
    enablePaging: true,
    reader: {
      type: 'json',
      id: 'species',
    }
  }
})
;
