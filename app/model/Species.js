Ext.define('Animals.model.Species', {
    extend: 'Animals.model.Base',

    requires: ['Ext.data.field.Date'],
    fields: [
        {name: 'id', type: 'int'},
        //array of multilang field
        {name: 'name', type: 'auto', sortType: val => val[Object.keys(val)[0]]},
        {name: 'date', type: 'auto'},
        {name: 'population', type: 'integer'},
        {
            name: 'source', type: 'auto', sortType: val => val.name[Object.keys(val.name)[0]]
        },
        {name: 'municipality', type: 'auto', sortType: val => val[Object.keys(val)[0]]}
    ]
});
