Ext.define('Animals.model.Municipality', {
    extend: 'Animals.model.Base',

    fields: [
        {name: 'id', type: 'int'},
        //array of multilang field
        'name_KA', 'name_EN'
    ]

});