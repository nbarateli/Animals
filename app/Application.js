/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
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
            // extend: 'Ext.data.Store',
            requires: ['Ext.data.field.Date', 'Ext.data.proxy.LocalStorage'],

            alias: 'store.personnel',
            autoload: true,
            model: 'Animals.model.Species',
            storeId: 'species',
            data: {
                items: [
                    {
                        id: 1,
                        name_KA: 'მგელი', name_EN: 'wolf',
                        date: '6/12/2015',
                        population: 2456,
                        municipality_KA: 'თბილისი', municipality_EN: 'Tbilisi',
                        source_name_KA: 'წყაროების წყარო', source_name_EN: 'The source to end all sources',
                        source_attached_document: 'source.jpg'

                    }, {
                        id: 2,
                        name_KA: 'ვეფხვი', name_EN: 'Tiger',
                        date: '11/22/2015',
                        population: 3456,
                        municipality_KA: 'ქუთაისი', municipality_EN: 'Kutaisi',
                        source_name_KA: 'ჩემი ძმაკანა ტოო', source_name_EN: 'My Dzmakana',
                        source_attached_document: 'source.jpg'

                    }, {
                        id: 3,
                        name_KA: 'ნიყვი', name_EN: 'Ceasar\'s shroomz',
                        date: '6/12/2015',
                        population: 9856,
                        municipality_KA: 'ლანჩხუთი', municipality_EN: 'Lunchfive',

                        source_name_KA: 'თერიბლ', source_name_EN: 'Terrible',
                        source_attached_document: 'source.jpg'

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
