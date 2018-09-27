const getAjaxProxy = config => ({
  type: 'ajax',
  enablePaging: true,
  url: 'http://localhost/api/species_data/read_paging.php',
  reader: {
    type: 'json',
    rootProperty: 'records',
  },
  writer: config.writerConfig ? config.writerConfig : {type: 'json'}
})
const getMemoryProxy = config => ({
  type: 'memory',
  enablePaging: true,
  data: config.localData.items,
  reader: {
    type: 'json'
  },
  writer: config.writerConfig ? config.writerConfig : {type: 'json'}
});
Ext.define('Animals.store.SpeciesData', {
  extend: 'Ext.data.Store',
  alias: 'store.personnel',
  autoload: true,
  model: 'Animals.model.SpeciesData',
  storeId: 'speciesdata',
  requires: ['Ext.data.field.Date', 'Ext.data.proxy.LocalStorage'],
  pageSize: 5,
  constructor: function (config) {
    config.autoLoad = true;
    config.proxy = getMemoryProxy(config);
    this.callParent(arguments)
  }
});
