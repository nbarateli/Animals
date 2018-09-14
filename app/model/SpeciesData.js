Ext.define('Animals.model.SpeciesData', {
    extend: 'Animals.model.Base',

    requires: ['Ext.data.field.Date', 'Ext.data.proxy.LocalStorage'],
    fields: [
        {name: 'id', type: 'int'},
        {name: 'species', type: 'auto'},
        {name: 'date', type: 'date'},
        {name: 'population', type: 'integer'},
        {name: 'source', type: 'auto'},
        {name: 'municipality', type: 'auto'},
        {name: 'source_name_KA', type: 'string'}, {name: 'source_name_EN', type: 'string'},
        {name: 'source_attached_document', type: 'string'}
    ],
    validators: {
        name_KA: 'presence', name_EN: 'presence',
        municipality_EN: 'presence', municipality_KA: 'presence',
        source_name_KA: 'presence', source_name_EN: 'presence',
        population: pop => pop >= 0
    },
    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'json',
            id:
                'speciesdata',
        }
    }
})
;
