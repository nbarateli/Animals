/**
 * This view is an example list of people.
 */
Ext.define('Animals.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Animals.store.Species'
    ],

    title: 'Species',

    store: {
        type: 'personnel'
    },

    columns: [
        {text: 'Name', dataIndex: 'name', renderer: value => value.KA, sortable: true},
        {text: 'Date', dataIndex: 'date', flex: 1, sortable: true},
        {text: 'Population', dataIndex: 'population', flex: 1, sortable: true},
        {text: 'Municipality', dataIndex: 'municipality', flex: 1, renderer: value => value.KA, sortable: true},
        {
            text: 'Source',
            dataIndex: 'source',
            flex: 1,
            renderer: value => `<a href='${value.attached_document}'>${value.name.KA}</a>`,
            sortable: true
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
