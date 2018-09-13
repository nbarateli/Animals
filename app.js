/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
let species; //global only during development
// data = {
//     items: [
//         {
//             name_KA: 'მგელი', name_EN: 'wolf',
//             date: '6/12/2015',
//             population: 2456,
//             municipality_KA: 'თბილისი', municipality_EN: 'Tbilisi',
//             source_name_KA: 'წყაროების წყარო', source_name_EN: 'The source to end all sources',
//             source_attached_document: 'source.jpg'
//
//         }, {
//             name_KA: 'ვეფხვი', name_EN: 'Tiger',
//             date: '11/22/2015',
//             population: 3456,
//             municipality_KA: 'ქუთაისი', municipality_EN: 'Kutaisi',
//             source_name_KA: 'ჩემი ძმაკანა ტოო', source_name_EN: 'My Dzmakana',
//             source_attached_document: 'source.jpg'
//
//         }, {
//             name_KA: 'ნიყვი', name_EN: 'Ceasar\'s shroomz',
//             date: '6/12/2015',
//             population: 9856,
//             municipality_KA: 'ლანჩხუთი', municipality_EN: 'Lunchfive',
//
//             source_name_KA: 'თერიბლ', source_name_EN: 'Terrible',
//             source_attached_document: 'source.jpg'
//
//         }, {
//             name_KA: 'ციყვი', name_EN: 'Squirrel',
//             date: '4/5/2013',
//             population: 9856,
//             municipality_KA: 'მანგლისი', municipality_EN: 'Manglease',
//
//             source_name_KA: 'ჯიგარი სორსი', source_name_EN: 'Jigar sauce',
//             source_attached_document: 'source.jpg'
//
//         }, {
//             name_KA: 'ლომი', name_EN: 'Lion',
//             date: '3/23/2002',
//             population: 9856,
//             municipality_KA: 'ლანჩხუთი', municipality_EN: 'Lunchfive',
//
//             source_name_KA: 'ლომპორტი', source_name_EN: 'Lion\'s Den',
//             source_attached_document: 'source.jpg'
//
//         }, {
//             name_KA: 'წავი', name_EN: 'el tsavo',
//             date: '4/22/2015',
//             population: 9856,
//             municipality_KA: 'ქუთაისი', municipality_EN: 'Kutaisi',
//
//             source_name_KA: 'წავიდა გულავი', source_name_EN: 'Tsavi & gulavi',
//             source_attached_document: 'source.jpg'
//
//         }, {
//             name_KA: 'ირემი', name_EN: 'Deer',
//             date: '8/12/1995',
//             population: 9856,
//             municipality_KA: 'ზუგდიდი', municipality_EN: 'Zugdidi',
//
//             source_name_KA: 'სენაკი სითი ლაიფ', source_name_EN: 'West side',
//             source_attached_document: 'source.jpg'
//
//         }, {
//             name_KA: 'ელარჯი', name_EN: 'Elarji',
//             date: '2/1/2005',
//             population: 9856,
//             municipality_KA: 'ზუგდიდი', municipality_EN: 'Zugdidi',
//
//             source_name_KA: 'დადიანის მენიუ', source_name_EN: 'menu of the restaurant Dadiani',
//             source_attached_document: 'source.jpg'
//
//         }, {
//             name_KA: 'ავაზა', name_EN: 'Panther',
//             date: '2/12/2018',
//             population: 9856,
//             municipality_KA: 'ვაკანდა', municipality_EN: 'Wakanda',
//
//             source_name_KA: 'ჰან სოლო', source_name_EN: 'dies in force awakens',
//             source_attached_document: 'source.jpg'
//
//         }, {
//             name_KA: 'ჯიქი', name_EN: 'Snow Leopard',
//             date: '8/19/2018',
//             population: 9856,
//             municipality_KA: 'ჩოხატაური', municipality_EN: 'Chokhatauri',
//
//             source_name_KA: 'ეჰ', source_name_EN: 'eh',
//             source_attached_document: 'source.jpg'
//
//         }, {
//             name_KA: 'ჯიქი', name_EN: 'Snow Leopard',
//             date: '9/11/2018',
//             population: 9856,
//             municipality_KA: 'ფაბრიკა', municipality_EN: 'Fabrika',
//
//             source_name_KA: 'ასე ჯობია', source_name_EN: 'a lance through',
//             source_attached_document: 'source.jpg'
//
//         }, {
//             name_KA: 'ბრიყვი', name_EN: 'fool',
//             date: '6/12/2015',
//             population: 9856,
//             municipality_KA: 'თბილისი', municipality_EN: 'Tbilisi',
//             source_name_KA: 'თაბლე', source_name_EN: 'Table',
//             source_attached_document: 'source.jpg'
//
//         }
//     ]
// };

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
        // window.localStorage.initialEntry === undefined ? (() => {
        //     data.items.map(e => species.add(e));
        //     species.sync();
        // })() : species.load();
        // species.load();
        // window.localStorage.initialEntry = false;
    },
    requires: [
        // This will automatically load all classes in the Animals namespace
        // so that application classes do not need to require each other.
        'Animals.*'
    ],

    // The name of the initial view to create.
    mainView: 'Animals.view.main.Main'
});
