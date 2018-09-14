Ext.define('Animals.model.species.Source', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'name_KA', type: 'string'},
        {name: 'name_EN', type: 'string'},
        {name: 'attached_document', type: 'string'}
    ],
});