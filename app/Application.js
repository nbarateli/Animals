/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
let BLANK_FUNCTION = (e, i) => '';
data = {
  municipalities: [
    {name_KA: 'თბილისი', name_EN: 'Tbilisi', id: 1},
    {name_KA: 'ქუთაისი', name_EN: 'Kutaisi', id: 2},
    {name_KA: 'ლანჩხუთი', name_EN: 'Lunchfive', id: 3},
    {name_KA: 'მანგლისი', name_EN: 'Manglease', id: 4},
    {name_KA: 'ზუგდიდი', name_EN: 'Zugdidi', id: 5},
    {name_KA: 'ვაკანდა', name_EN: 'Wakanda', id: 6},
    {name_KA: 'ჩოხატაური', name_EN: 'Chokhatauri', id: 7},
    {name_KA: 'ფაბრიკა', name_EN: 'Fabrika', id: 8},
  ],
  species: [
    {id: 1, name_KA: 'მგელი', name_EN: 'Wolf'},
    {id: 2, name_KA: 'ვეფხვი', name_EN: 'Tiger'},
    {
      id: 3,
      name_KA: 'ნიყვი',
      name_EN: 'Ceasar\'s shroomz'
    },
    {id: 4, name_KA: 'ციყვი', name_EN: 'Squirrel'},
    {id: 5, name_KA: 'ლომი', name_EN: 'Lion'}, {
      id: 6,
      name_KA: 'წავი',
      name_EN: 'el tsavo'
    },
    {id: 7, name_KA: 'ირემი', name_EN: 'Deer'},
    {id: 8, name_KA: 'ელარჯი', name_EN: 'Elarji'}, {
      id: 9,
      name_KA: 'ავაზა',
      name_EN: 'Panther'
    },
    {id: 10, name_KA: 'ჯიქი', name_EN: 'Snow Leopard'}, {
      id: 11,
      name_KA: 'ბრიყვი',
      name_EN: 'fool'
    }],
  items: [
    {
      name_KA: 'მგელი',
      name_EN: 'Wolf',
      species: 1,
      date: 'Fri Jun 12 2015 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 2456,
      municipality: 1,
      source_name_KA: 'წყაროების წყარო',
      source_name_EN: 'The source to end all sources',
      source_attached_document: 'source.jpg',
      id: 1
    }, {
      name_KA: 'ვეფხვი',
      name_EN: 'Tiger',
      species: 2,
      date: 'Sun Nov 22 2015 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 3456,
      municipality: 2,
      source_name_KA: 'ჩემი ძმაკანა ტოო',
      source_name_EN: 'My Dzmakana',
      source_attached_document: 'source.jpg',
      id: 2
    }, {
      name_KA: 'ნიყვი',
      name_EN: 'Ceasar\'s shroomz',
      species: 3,
      date: 'Fri Jun 12 2015 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 9856,
      municipality: 3,
      source_name_KA: 'თერიბლ',
      source_name_EN: 'Terrible',
      source_attached_document: 'source.jpg',
      id: 3
    }, {
      name_KA: 'ციყვი',
      name_EN: 'Squirrel',
      species: 4,
      date: 'Fri Apr 05 2013 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 23456,
      municipality: 4,
      source_name_KA: 'ჯიგარი სორსი',
      source_name_EN: 'Jigar sauce',
      source_attached_document: 'source.jpg',
      id: 4
    }, {
      name_KA: 'ლომი',
      name_EN: 'Lion',
      species: 5,
      date: 'Sat Mar 23 2002 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 10552,
      municipality: 3,
      source_name_KA: 'ლომპორტი',
      source_name_EN: 'Lion\'s Den',
      source_attached_document: 'source.jpg',
      id: 5
    }, {
      name_KA: 'წავი',
      name_EN: 'el tsavo',
      species: 6,
      date: 'Wed Apr 22 2015 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 1816,
      municipality: 2,
      source_name_KA: 'წავიდა გულავი',
      source_name_EN: 'Tsavi & gulavi',
      source_attached_document: 'source.jpg',
      id: 6
    }, {
      name_KA: 'ირემი',
      name_EN: 'Deer',
      species: 7,
      date: 'Sat Aug 12 1995 00:00:00 GMT+0500 (Georgia Summer Time)',
      population: 9856,
      municipality: 5,
      source_name_KA: 'სენაკი სითი ლაიფ',
      source_name_EN: 'West side',
      source_attached_document: 'source.jpg',
      id: 7
    }, {
      name_KA: 'ელარჯი',
      name_EN: 'Elarji',
      species: 8,
      date: 'Tue Feb 01 2005 00:00:00 GMT+0300 (Georgia Standard Time)',
      population: 9856,
      municipality: 5,
      source_name_KA: 'დადიანის მენიუ',
      source_name_EN: 'menu of the restaurant Dadiani',
      source_attached_document: 'source.jpg',
      id: 8
    }, {
      name_KA: 'ავაზა',
      name_EN: 'Panther',
      species: 9,
      date: 'Mon Feb 12 2018 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 9856,
      municipality: 6,
      source_name_KA: 'ჰან სოლო',
      source_name_EN: 'dies in force awakens',
      source_attached_document: 'source.jpg',
      id: 9
    }, {
      name_KA: 'ჯიქი',
      name_EN: 'Snow Leopard',
      species: 10,
      date: 'Sun Aug 19 2018 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 1046,
      municipality: 7,
      source_name_KA: 'ეჰ',
      source_name_EN: 'eh',
      source_attached_document: 'source.jpg',
      id: 10
    }, {
      name_KA: 'ჯიქი',
      name_EN: 'Snow Leopard',
      species: 10,
      date: 'Tue Sep 11 2018 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 9856,
      municipality: 8,
      source_name_KA: 'ასე ჯობია',
      source_name_EN: 'a lance through',
      source_attached_document: 'source.jpg',
      id: 11
    }, {
      name_KA: 'ბრიყვი',
      name_EN: 'fool',
      species: 12,
      date: 'Fri Jun 12 2015 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 9856,
      municipality: 1,
      source_name_KA: 'თაბლე',
      source_name_EN: 'Table',
      source_attached_document: 'source.jpg',
      id: 12
    },]
}


function processItems(items, mun, spec) {
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
    let mun = Ext.create('Animals.store.Municipalities', {
      data: data.municipalities,
      storeId: 'municipalities'
    });

    let species = Ext.create('Animals.store.Species', {data: data.species, storeId: 'species'});

    Ext.create('Animals.store.SpeciesData', {
      storeId: 'speciesdata',
      data: ((items, mun, spec) => {
        items.map(item => {
          item.municipality = mun.getAt(item.municipality - 1)
          item.species = spec.getAt(item.species - 1);
        });
        return items;
      })(data.items, mun, species),
    });
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
