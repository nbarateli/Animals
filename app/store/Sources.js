Ext.define('Animals.store.Sources', {
  extend: 'Ext.data.Store',

  alias: 'store.sources',
  autoload: true,
  model: 'Animals.model.Source',
  proxy: {
    type: 'memory',
    reader: {
      type: 'json'
    }
  }
});
