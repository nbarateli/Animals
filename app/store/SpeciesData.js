Ext.define('Animals.store.SpeciesData', {
  extend: 'Ext.data.Store',
  alias: 'store.personnel',
  autoload: true,
  model: 'Animals.model.SpeciesData',
  storeId: 'speciesdata',
  requires: ['Ext.data.field.Date', 'Ext.data.proxy.LocalStorage'],
  pageSize: 25
});
