/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Animals.Application',

    name: 'Animals',

    requires: [
        // This will automatically load all classes in the Animals namespace
        // so that application classes do not need to require each other.
        'Animals.*'
    ],

    // The name of the initial view to create.
    mainView: 'Animals.view.main.Main'
});
