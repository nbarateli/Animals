Ext.define('Animals.model.species.Municipality', {
    extend: 'Animals.model.Base',

    fields: [
        {name: 'id', type: 'int'},
        //array of multilang field
        {name: 'name', type: 'auto'},
    ]

});