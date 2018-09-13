/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
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
    items: [{
        "name_KA": "მგელი",
        "name_EN": "wolf",
        "date": "2015-06-11T20:00:00.000Z",
        "population": 2456,
        "municipality_KA": "თბილისი",
        "municipality_EN": "Tbilisi",
        "source_name_KA": "წყაროების წყარო",
        "source_name_EN": "The source to end all sources",
        "source_attached_document": "source.jpg",
        "id": 1
    }, {
        "name_KA": "ვეფხვი",
        "name_EN": "Tiger",
        "date": "2015-11-21T20:00:00.000Z",
        "population": 3456,
        "municipality_KA": "ქუთაისი",
        "municipality_EN": "Kutaisi",
        "source_name_KA": "ჩემი ძმაკანა ტოო",
        "source_name_EN": "My Dzmakana",
        "source_attached_document": "source.jpg",
        "id": 2
    }, {
        "name_KA": "ნიყვი",
        "name_EN": "Ceasar's shroomz",
        "date": "2015-06-11T20:00:00.000Z",
        "population": 9856,
        "municipality_KA": "ლანჩხუთი",
        "municipality_EN": "Lunchfive",
        "source_name_KA": "თერიბლ",
        "source_name_EN": "Terrible",
        "source_attached_document": "source.jpg",
        "id": 3
    }, {
        "name_KA": "ციყვი",
        "name_EN": "Squirrel",
        "date": "2013-04-04T20:00:00.000Z",
        "population": 9856,
        "municipality_KA": "მანგლისი",
        "municipality_EN": "Manglease",
        "source_name_KA": "ჯიგარი სორსი",
        "source_name_EN": "Jigar sauce",
        "source_attached_document": "source.jpg",
        "id": 4
    }, {
        "name_KA": "ლომი",
        "name_EN": "Lion",
        "date": "2002-03-22T20:00:00.000Z",
        "population": 9856,
        "municipality_KA": "ლანჩხუთი",
        "municipality_EN": "Lunchfive",
        "source_name_KA": "ლომპორტი",
        "source_name_EN": "Lion's Den",
        "source_attached_document": "source.jpg",
        "id": 5
    }, {
        "name_KA": "წავი",
        "name_EN": "el tsavo",
        "date": "2015-04-21T20:00:00.000Z",
        "population": 9856,
        "municipality_KA": "ქუთაისი",
        "municipality_EN": "Kutaisi",
        "source_name_KA": "წავიდა გულავი",
        "source_name_EN": "Tsavi & gulavi",
        "source_attached_document": "source.jpg",
        "id": 6
    }, {
        "name_KA": "ირემი",
        "name_EN": "Deer",
        "date": "1995-08-11T19:00:00.000Z",
        "population": 9856,
        "municipality_KA": "ზუგდიდი",
        "municipality_EN": "Zugdidi",
        "source_name_KA": "სენაკი სითი ლაიფ",
        "source_name_EN": "West side",
        "source_attached_document": "source.jpg",
        "id": 7
    }, {
        "name_KA": "ელარჯი",
        "name_EN": "Elarji",
        "date": "2005-01-31T21:00:00.000Z",
        "population": 9856,
        "municipality_KA": "ზუგდიდი",
        "municipality_EN": "Zugdidi",
        "source_name_KA": "დადიანის მენიუ",
        "source_name_EN": "menu of the restaurant Dadiani",
        "source_attached_document": "source.jpg",
        "id": 8
    }, {
        "name_KA": "ავაზა",
        "name_EN": "Panther",
        "date": "2018-02-11T20:00:00.000Z",
        "population": 9856,
        "municipality_KA": "ვაკანდა",
        "municipality_EN": "Wakanda",
        "source_name_KA": "ჰან სოლო",
        "source_name_EN": "dies in force awakens",
        "source_attached_document": "source.jpg",
        "id": 9
    }, {
        "name_KA": "ჯიქი",
        "name_EN": "Snow Leopard",
        "date": "2018-08-18T20:00:00.000Z",
        "population": 9856,
        "municipality_KA": "ჩოხატაური",
        "municipality_EN": "Chokhatauri",
        "source_name_KA": "ეჰ",
        "source_name_EN": "eh",
        "source_attached_document": "source.jpg",
        "id": 10
    }, {
        "name_KA": "ჯიქი",
        "name_EN": "Snow Leopard",
        "date": "2018-09-10T20:00:00.000Z",
        "population": 9856,
        "municipality_KA": "ფაბრიკა",
        "municipality_EN": "Fabrika",
        "source_name_KA": "ასე ჯობია",
        "source_name_EN": "a lance through",
        "source_attached_document": "source.jpg",
        "id": 11
    }, {
        "name_KA": "ბრიყვი",
        "name_EN": "fool",
        "date": "2015-06-11T20:00:00.000Z",
        "population": 9856,
        "municipality_KA": "თბილისი",
        "municipality_EN": "Tbilisi",
        "source_name_KA": "თაბლე",
        "source_name_EN": "Table",
        "source_attached_document": "source.jpg",
        "id": 12
    }]
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
        Ext.create('Ext.data.Store', {
            requires: ['Ext.data.field.Date', 'Ext.data.proxy.LocalStorage'],
            pageSize: 15,
            alias: 'store.species',
            autoload: true,
            model: 'Animals.model.Species',
            storeId: 'species',
            data: data.items
        });
        Ext.create('Animals.store.Municipalities', {
            data: data.municipalities, storeId: 'municipalities'
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
