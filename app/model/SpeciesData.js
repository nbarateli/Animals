Ext.define('Animals.model.SpeciesData', {
  extend: 'Animals.model.Base',

  requires: ['Ext.data.field.Date', 'Ext.data.proxy.LocalStorage'],
  fields: [
    {name: 'id', type: 'int'},
    {name: 'species', type: 'auto'},
    {name: 'date', type: 'date'},
    {name: 'population', type: 'integer'},
    {name: 'sources', type: 'auto'},
    {name: 'municipality', type: 'auto'}
  ],

  validators: {
    species: 'presence',
    municipality: 'presence',
    source: 'presence',
    population: pop => pop >= 0
  },
  addSource(source) {
    let sourceStore = Ext.data.StoreManager.lookup('sources');

    source.set('species_data_id', this.id);
    sourceStore.add(source);

    this.get('sources').push(source);
  },
  removeSource(source) {
    let id = source.data ? source.data.id : source.id ? source.id : source;
    let sources = this.get('sources');
    let indx = sources.indexOf(sources.find(e => e.id === id));

    if (indx > -1) {
      let sourceStore = Ext.data.StoreManager.lookup('sources');

      let q = sourceStore.query('id', id, false, false, true);
      sourceStore.remove(q);
      sources.splice(indx, 1);
    }
  }
})
;
