Ext.define('Animals.store.SpeciesData', {
  extend: 'Ext.data.Store',
  alias: 'store.personnel',
  autoload: true,
  model: 'Animals.model.SpeciesData',
  storeId: 'speciesdata',
  requires: ['Ext.data.field.Date', 'Ext.data.proxy.LocalStorage'],
  pageSize: 25,
  constructor: function (config) {
    config.autoLoad = true;
    config.remoteSort = true;
    config.remoteFilter = true;
    config.proxy = {
      type: 'memory',
      enablePaging: true,
      data: config.localData,
      reader: {
        type: 'json',
        rootProperty: 'items'
      },
      writer: config.writerConfig ? config.writerConfig : {type: 'json'}
    };
    // this.setRoot(config.localData)
    console.log(config.proxy)
    this.callParent(arguments)
  },
});
