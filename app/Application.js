/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
let BLANK_FUNCTION = (e, i) => '';
let getFileName = s => {
  let result = /\\[^\\]*$/.exec(s)
  return result ? s.substring(result.index + 1) : s;
};

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
    let listeners = {
      add: (store, records) => {
        records.forEach(record => store.proxy.data.push({
          ...record.data,
          id: store.proxy.data[store.proxy.data.length - 1].id + 1
        }));
      },
      remove: (store, records, index, isMove) => {
        if (isMove) return;
        records.forEach(record => {
          let indx = store.proxy.data.indexOf(store.proxy.data.find(e => e.id === record.id))
          if (indx > -1) store.proxy.data.splice(index, 1)
        })
      }
    }
    let mun = Ext.create('Animals.store.Municipalities', {
      data: data.municipalities,
      listeners: listeners,
      storeId: 'municipalities'
    });

    let species = Ext.create('Animals.store.Species', {
      data: data.species,
      storeId: 'species',
      listeners: listeners,
    });
    let sources = Ext.create('Animals.store.Sources', {
      data: data.sources,
      storeId: 'sources',
      listeners: {
        ...listeners,
        add: (store, records) => {
          records.forEach(record => {
            record.data.attached_document = getFileName(record.data.attached_document);
            store.proxy.data.push({
              ...record.data, id: store.proxy.data[store.proxy.data.length - 1].id + 1
            })
          });
        },
        update: (store, record) => {
          record.data.attached_document = getFileName(record.data.attached_document);

        }
      },
    });
    speciesData = Ext.data.StoreManager.lookup('speciesdata');
    // console.log(speciesData)
    ((items, mun, spec) => {
      items.map(item => {
        item.municipality = mun.getAt(item.municipality - 1)
        item.species = spec.getAt(item.species - 1);
        item.source = sources.getAt(item.source - 1)
      });
      return items;
    })(data.items, mun, species);

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
