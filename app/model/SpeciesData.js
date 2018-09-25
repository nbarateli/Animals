Ext.define('Animals.model.SpeciesData', {
  extend: 'Animals.model.Base',

  requires: ['Ext.data.field.Date', 'Ext.data.proxy.LocalStorage'],
  fields: [
    {name: 'id', type: 'int'},
    {name: 'species', type: 'auto'},
    {name: 'date', type: 'date'},
    {name: 'population', type: 'integer'},
    {name: 'source', type: 'auto'},
    {name: 'municipality', type: 'auto'}
  ],

  validators: {
    species: 'presence',
    municipality: 'presence',
    source: 'presence',
    population: pop => pop >= 0
  }
})
;
