Ext.define('Animals.model.Municipality', {
  extend: 'Animals.model.Base',

  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      id:
        'municipalities',
    }
  }
});