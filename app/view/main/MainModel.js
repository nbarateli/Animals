/**
 * This class is the view model for the Main view of the application.
 */
data = {
  municipalities: [{
    name_KA: 'თბილისი',
    name_EN: 'Tbilisi',
    id: 1
  },
    {
      name_KA: 'ქუთაისი',
      name_EN: 'Kutaisi',
      id: 2
    },
    {
      name_KA: 'ლანჩხუთი',
      name_EN: 'Lunchfive',
      id: 3
    },
    {
      name_KA: 'მანგლისი',
      name_EN: 'Manglease',
      id: 4
    },
    {
      name_KA: 'ზუგდიდი',
      name_EN: 'Zugdidi',
      id: 5
    },
    {
      name_KA: 'ვაკანდა',
      name_EN: 'Wakanda',
      id: 6
    },
    {
      name_KA: 'ჩოხატაური',
      name_EN: 'Chokhatauri',
      id: 7
    },
    {
      name_KA: 'ფაბრიკა',
      name_EN: 'Fabrika',
      id: 8
    },
  ],
  species: [{
    id: 1,
    name_KA: 'მგელი',
    name_EN: 'Wolf'
  },
    {
      id: 2,
      name_KA: 'ვეფხვი',
      name_EN: 'Tiger'
    },
    {
      id: 3,
      name_KA: 'ნიყვი',
      name_EN: 'Ceasar\'s shroomz'
    },
    {
      id: 4,
      name_KA: 'ციყვი',
      name_EN: 'Squirrel'
    },
    {
      id: 5,
      name_KA: 'ლომი',
      name_EN: 'Lion'
    }, {
      id: 6,
      name_KA: 'წავი',
      name_EN: 'el tsavo'
    },
    {
      id: 7,
      name_KA: 'ირემი',
      name_EN: 'Deer'
    },
    {
      id: 8,
      name_KA: 'ელარჯი',
      name_EN: 'Elarji'
    }, {
      id: 9,
      name_KA: 'ავაზა',
      name_EN: 'Panther'
    },
    {
      id: 10,
      name_KA: 'ჯიქი',
      name_EN: 'Snow Leopard'
    }, {
      id: 11,
      name_KA: 'ბრიყვი',
      name_EN: 'fool'
    }
  ],
  sources: [{
    id: 1,
    name_KA: 'წყაროების წყარო',
    name_EN: 'The source to end all sources',
    attached_document: 'source.jpg'
  },
    {
      id: 2,
      name_KA: 'ჩემი ძმაკანა ტოო',
      name_EN: 'My Dzmakana',
      attached_document: 'source.jpg'
    },
    {
      id: 3,
      name_KA: 'თერიბლ',
      name_EN: 'Terrible',
      attached_document: 'source.jpg'
    },
    {
      id: 4,
      name_KA: 'ჯიგარი სორსი',
      name_EN: 'Jigar sauce',
      attached_document: 'source.jpg'
    },
    {
      id: 5,
      name_KA: 'ლომპორტი',
      name_EN: 'Lion\'s Den',
      attached_document: 'source.jpg'
    },
    {
      id: 6,
      name_KA: 'წავიდა გულავი',
      name_EN: 'Tsavi & gulavi',
      attached_document: 'source.jpg'
    },
    {
      id: 7,
      name_KA: 'სენაკი სითი ლაიფ',
      name_EN: 'West side',
      attached_document: 'source.jpg'
    },
    {
      id: 8,
      name_KA: 'დადიანის მენიუ',
      name_EN: 'menu of the restaurant Dadiani',
      attached_document: 'source.jpg'
    },
    {
      id: 9,
      name_KA: 'ჰან სოლო',
      name_EN: 'dies in force awakens',
      attached_document: 'source.jpg'
    },
    {
      id: 10,
      name_KA: 'ეჰ',
      name_EN: 'eh',
      attached_document: 'source.jpg'
    },
    {
      id: 11,
      name_KA: 'ასე ჯობია',
      name_EN: 'a lance through',
      attached_document: 'source.jpg'
    },
    {
      id: 12,
      name_KA: 'თაბლე',
      name_EN: 'Table',
      attached_document: 'source.jpg'
    }
  ],
  items: [{
    name_KA: 'მგელი',
    name_EN: 'Wolf',
    species: 1,
    date: 'Fri Jun 12 2015 00:00:00 GMT+0400 (Georgia Standard Time)',
    population: 2456,
    municipality: 1,
    source_name_KA: 'წყაროების წყარო',
    source_name_EN: 'The source to end all sources',
    source_attached_document: 'source.jpg',
    id: 1,
    source: 1
  },
    {
      name_KA: 'ვეფხვი',
      name_EN: 'Tiger',
      species: 2,
      date: 'Sun Nov 22 2015 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 3456,
      municipality: 2,
      source_name_KA: 'ჩემი ძმაკანა ტოო',
      source_name_EN: 'My Dzmakana',
      source_attached_document: 'source.jpg',
      id: 2,
      source: 2
    },
    {
      name_KA: 'ნიყვი',
      name_EN: 'Ceasar\'s shroomz',
      species: 3,
      date: 'Fri Jun 12 2015 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 9856,
      municipality: 3,
      source_name_KA: 'თერიბლ',
      source_name_EN: 'Terrible',
      source_attached_document: 'source.jpg',
      id: 3,
      source: 3
    },
    {
      name_KA: 'ციყვი',
      name_EN: 'Squirrel',
      species: 4,
      date: 'Fri Apr 05 2013 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 23456,
      municipality: 4,
      source_name_KA: 'ჯიგარი სორსი',
      source_name_EN: 'Jigar sauce',
      source_attached_document: 'source.jpg',
      id: 4,
      source: 4
    },
    {
      name_KA: 'ლომი',
      name_EN: 'Lion',
      species: 5,
      date: 'Sat Mar 23 2002 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 10552,
      municipality: 3,
      source_name_KA: 'ლომპორტი',
      source_name_EN: 'Lion\'s Den',
      source_attached_document: 'source.jpg',
      id: 5,
      source: 5
    },
    {
      name_KA: 'წავი',
      name_EN: 'el tsavo',
      species: 6,
      date: 'Wed Apr 22 2015 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 1816,
      municipality: 2,
      source_name_KA: 'წავიდა გულავი',
      source_name_EN: 'Tsavi & gulavi',
      source_attached_document: 'source.jpg',
      id: 6,
      source: 6
    },
    {
      name_KA: 'ირემი',
      name_EN: 'Deer',
      species: 7,
      date: 'Sat Aug 12 1995 00:00:00 GMT+0500 (Georgia Summer Time)',
      population: 9856,
      municipality: 5,
      source_name_KA: 'სენაკი სითი ლაიფ',
      source_name_EN: 'West side',
      source_attached_document: 'source.jpg',
      id: 7,
      source: 7
    },
    {
      name_KA: 'ელარჯი',
      name_EN: 'Elarji',
      species: 8,
      date: 'Tue Feb 01 2005 00:00:00 GMT+0300 (Georgia Standard Time)',
      population: 9856,
      municipality: 5,
      source_name_KA: 'დადიანის მენიუ',
      source_name_EN: 'menu of the restaurant Dadiani',
      source_attached_document: 'source.jpg',
      id: 8,
      source: 8
    },
    {
      name_KA: 'ავაზა',
      name_EN: 'Panther',
      species: 9,
      date: 'Mon Feb 12 2018 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 9856,
      municipality: 6,
      source_name_KA: 'ჰან სოლო',
      source_name_EN: 'dies in force awakens',
      source_attached_document: 'source.jpg',
      id: 9,
      source: 9
    },
    {
      name_KA: 'ჯიქი',
      name_EN: 'Snow Leopard',
      species: 10,
      date: 'Sun Aug 19 2018 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 1046,
      municipality: 7,
      source_name_KA: 'ეჰ',
      source_name_EN: 'eh',
      source_attached_document: 'source.jpg',
      id: 10,
      source: 10
    },
    {
      name_KA: 'ჯიქი',
      name_EN: 'Snow Leopard',
      species: 10,
      date: 'Tue Sep 11 2018 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 9856,
      municipality: 8,
      source_name_KA: 'ასე ჯობია',
      source_name_EN: 'a lance through',
      source_attached_document: 'source.jpg',
      id: 11,
      source: 11
    },
    {
      name_KA: 'ბრიყვი',
      name_EN: 'fool',
      species: 11,
      date: 'Fri Jun 12 2015 00:00:00 GMT+0400 (Georgia Standard Time)',
      population: 9856,
      municipality: 1,
      source_name_KA: 'თაბლე',
      source_name_EN: 'Table',
      source_attached_document: 'source.jpg',
      id: 12,
      source: 12
    }
  ]
}

Ext.define('Animals.view.main.MainModel', {
  extend: 'Ext.app.ViewModel',

  alias: 'viewmodel.main',

  stores: {
    speciesdata: Ext.create('Animals.store.SpeciesData', {
      storeId: 'speciesdata', localData: data, listeners: {
        datachanged: store => {
          store.proxy.data = store.data.items;
        }
      }
    })
  },
  // data: {speciesdata: '{speciesdatastore}'}
  //TODO - add data, formulas and/or methods to support your view
});