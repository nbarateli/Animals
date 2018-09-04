Ext.define('Animals.store.Species', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'Animals.model.Species',

    data: {
        items: [
            {
                name: {KA: 'მგელი', EN: 'wolf'},
                date: '6/12/2015',
                population: 2456,
                municipality: {KA: 'თბილისი', EN: 'Tbilisi'},
                source: {
                    name: {KA: 'წყაროების წყარო', EN: 'The source to end all sources'},
                    attached_document: 'source.jpg'
                }
            }, {
                name: {KA: 'ვეფხვი', EN: 'Tiger'},
                date: '11/22/2015',
                population: 2456,
                municipality: {KA: 'ქუთაისი', EN: 'Kutaisi'},
                source: {
                    name: {KA: 'ჩემი ძმაკანა ტოო', EN: 'My Dzmakana'},
                    attached_document: 'source.jpg'
                }
            }, {
                name: {KA: 'ნიყვი', EN: 'Ceasar\'s shroomz'},
                date: '6/12/2015',
                population: 2456,

                municipality: {KA: 'ლანჩხუთი', EN: 'Lunchfive'},

                source: {
                    name: {KA: 'თერიბლ', EN: 'Terrible'},
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
