Ext.define('Animals.store.Municipalities', {
    extend: 'Ext.data.Store',

    alias: 'store.municipalities',
    autoload: true,
    model: 'Animals.model.Municipality',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    },
    // load: function (e) {
    //     console.log(e)
    // }
});
