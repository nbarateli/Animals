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

            alias: 'store.personnel',

            model: 'Animals.model.Species',
            storeId: 'species',
            data: {
                items: [
                    {
                        id: 1,
                        name: {KA: 'მგელი', EN: 'wolf'},
                        date: '6/12/2015',
                        population: 2456,
                        municipality: {KA: 'თბილისი', EN: 'Tbilisi'},
                        source: {
                            name: {KA: 'წყაროების წყარო', EN: 'The source to end all sources'},
                            attached_document: 'source.jpg'
                        }
                    }, {
                        id: 2,
                        name: {KA: 'ვეფხვი', EN: 'Tiger'},
                        date: '11/22/2015',
                        population: 3456,
                        municipality: {KA: 'ქუთაისი', EN: 'Kutaisi'},
                        source: {
                            name: {KA: 'ჩემი ძმაკანა ტოო', EN: 'My Dzmakana'},
                            attached_document: 'source.jpg'
                        }
                    }, {
                        id: 3,
                        name: {KA: 'ნიყვი', EN: 'Ceasar\'s shroomz'},
                        date: '6/12/2015',
                        population: 9856,

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
