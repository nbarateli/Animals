/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
let species, mun; //global only during development


function hasPrefix(strings, prefix) {
    let result =
        strings.reduce((cur, str) => str.startsWith(prefix), false);
    console.log(result);
    return result;
}

function processItems(items, mun) {
    items.map(item => item.municipality = mun.getAt(item.municipality - 1))
    return items;
}

Ext.application({
    extend: 'Animals.Application',

    name: 'Animals',
    launch: () => {
        species = Ext.data.StoreManager.lookup('speciesdata');
        mun = Ext.data.StoreManager.lookup('municipalities');
        // console.log(data)

        (species.proxy.type === "localstorage" && window.localStorage.initialEntry === undefined) ? (() => {
            data.municipalities.map(e => {
                mun.add(e)
            })
            // processItems(data.items, mun);
            data.items.map(e => {
                species.add(e)
            });
            mun.sync();
            species.sync();

        })() : (() => {
            // mun.load()
            // species.load();
        })();

        window.localStorage.initialEntry = false;
    },
    requires: [
        // This will automatically load all classes in the Animals namespace
        // so that application classes do not need to require each other.
        'Animals.*'
    ],

    // The name of the initial view to create.
    mainView: 'Animals.view.main.Main'
});
