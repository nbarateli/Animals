/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
let BLANK_FUNCTION = (e, i) => '';
let getFileName = s => s.substring(/\\[^\\]*$/.exec(s).index + 1);

nameRenderer = (val, el, entry, store) => {
  oldval = val;
  store = Ext.data.StoreManager.lookup(store);

  if (typeof  val === "number") val = store.getAt(store.findBy((el, id) => id === val));
  if (val === null) {
    // console.log(oldval);

  }

  return `${val.data.name_KA}\t• ${val.data.name_EN}`
}

function processItems(items, mun, spec) {
  // console.log(items)
  items.map(item => {
    item.municipality = mun.getAt(item.municipality - 1)
    item.species = spec.getAt(item.species - 1);
  });
  return items;
}

Ext.define('Animals.Application', {
  extend: 'Ext.app.Application',

  name: 'Animals',

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true
    }
  },
  init: function () {
    let changeListener = store => {
      store.proxy.data = store.data.items;
    }
    let mun = Ext.create('Animals.store.Municipalities', {
      data: data.municipalities,
      listeners: {datachanged: changeListener},
      storeId: 'municipalities'
    });

    let species = Ext.create('Animals.store.Species', {
      data: data.species,
      storeId: 'species',
      listeners: {datachanged: changeListener},
    });
    let sources = Ext.create('Animals.store.Sources', {
      data: data.sources,
      storeId: 'sources',
      listeners: {datachanged: changeListener},
    })
    speciesData = Ext.data.StoreManager.lookup('speciesdata');
    // console.log(speciesData)
    ((items, mun, spec) => {
      items.map(item => {
        item.municipality = mun.getAt(item.municipality - 1)
        item.species = spec.getAt(item.species - 1);
        item.source = sources.getAt(item.source - 1)
      });
      return items;
    })(data.items, mun, species)
    // Ext.create('Animals.store.SpeciesData', {
    //   // storeId: 'speciesdata',
    //   data: ((items, mun, spec) => {
    //     items.map(item => {
    //       item.municipality = mun.getAt(item.municipality - 1)
    //       item.species = spec.getAt(item.species - 1);
    //       item.source = sources.getAt(item.source - 1)
    //     });
    //     return items;
    //   })(data.items, mun, species),
    // });
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider({
      expires: new Date(Ext.Date.now() + (1000 * 60 * 60 * 24 * 90)) // 90 days
    }));
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  }
});
