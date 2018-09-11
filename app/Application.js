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
