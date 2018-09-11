/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
let species;
const data = {
    items: [
        {
            name_KA: 'მგელი', name_EN: 'wolf',
            date: '6/12/2015',
            population: 2456,
            municipality_KA: 'თბილისი', municipality_EN: 'Tbilisi',
            source_name_KA: 'წყაროების წყარო', source_name_EN: 'The source to end all sources',
            source_attached_document: 'source.jpg'

        }, {
            name_KA: 'ვეფხვი', name_EN: 'Tiger',
            date: '11/22/2015',
            population: 3456,
            municipality_KA: 'ქუთაისი', municipality_EN: 'Kutaisi',
            source_name_KA: 'ჩემი ძმაკანა ტოო', source_name_EN: 'My Dzmakana',
            source_attached_document: 'source.jpg'

        }, {
            name_KA: 'ნიყვი', name_EN: 'Ceasar\'s shroomz',
            date: '6/12/2015',
            population: 9856,
            municipality_KA: 'ლანჩხუთი', municipality_EN: 'Lunchfive',

            source_name_KA: 'თერიბლ', source_name_EN: 'Terrible',
            source_attached_document: 'source.jpg'

        }
    ]
};

function hasPrefix(strings, prefix) {
    let result =
        strings.reduce((cur, str) => str.startsWith(prefix), false);
    console.log(result);
    return result;
}

Ext.application({
    extend: 'Animals.Application',

    name: 'Animals',
    launch: () => {
        species = Ext.data.StoreManager.lookup('species');
        window.localStorage.initialEntry === undefined ? (() => {
            data.items.map(e => species.add(e));
            species.sync();
        })() : species.load();

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
