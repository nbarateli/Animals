Ext.define('Animals.store.Species', {
    extend: 'Ext.data.Store',

    alias: 'store.species',
    autoload: true,
    model: 'Animals.model.Species',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    },

});
