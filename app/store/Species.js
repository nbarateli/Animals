Ext.create('Ext.data.Store', {
    // extend: 'Ext.data.Store',

    alias: 'store.personnel',
    autoload: true,
    model: 'Animals.model.Species',
    storeId: 'species',
    data: {
        items: [
            {
                id: 1,
                name: Ext.create('MultiLangValue', {KA: 'მგელი', EN: 'wolf'}),
                date: '6/12/2015',
                population: 2456,
                municipality: {KA: 'თბილისი', EN: 'Tbilisi'},
                source: {
                    name: Ext.create('MultiLangValue', {KA: 'წყაროების წყარო', EN: 'The source to end all sources'}),
                    attached_document: 'source.jpg'
                }
            }, {
                id: 2,
                name: Ext.create('MultiLangValue', {KA: 'ვეფხვი', EN: 'Tiger'}),
                date: '11/22/2015',
                population: 3456,
                municipality: {KA: 'ქუთაისი', EN: 'Kutaisi'},
                source: {
                    name: Ext.create('MultiLangValue', {KA: 'ჩემი ძმაკანა ტოო', EN: 'My Dzmakana'}),
                    attached_document: 'source.jpg'
                }
            }, {
                id: 3,
                name: Ext.create('MultiLangValue', {KA: 'ნიყვი', EN: 'Ceasar\'s shroomz'}),
                date: '6/12/2015',
                population: 9856,

                municipality: {KA: 'ლანჩხუთი', EN: 'Lunchfive'},

                source: {
                    name: Ext.create('MultiLangValue', {KA: 'თერიბლ', EN: 'Terrible'}),
                    attached_document: 'source.jpg'
                }
            }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    // load: function (e) {
    //     console.log(e)
    // }
});
