Ext.define('Animals.model.species.Source', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        //array of multilang field
        {name: 'name', type: 'auto'},
        {name: 'attached_document', type: 'string'}
    ],
});