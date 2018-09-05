Ext.define('Animals.model.MultiLangField', {
    extend: 'Ext.data.Model',

    //
    fields: [
        {name: 'value', type: 'string'},
        {name: 'lang', type: 'string'}
    ]
});