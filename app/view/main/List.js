/**
 * This view is an example list of people.
 */
Ext.define('Animals.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Ext.data.Store',
        'Ext.toolbar.Paging'
    ],

    title: 'Species',

    store: 'species',

    columns: [
        {text: 'Name', dataIndex: 'name', renderer: value => value.KA, sortable: true},
        {text: 'Date', dataIndex: 'date', flex: 1, sortable: true},
        {text: 'Population', dataIndex: 'population', flex: 1, sortable: true},
        {text: 'Municipality', dataIndex: 'municipality', flex: 1, renderer: value => value.KA, sortable: true},
        {
            text: 'Source',
            dataIndex: 'source',
            flex: 1,
            renderer: value => `<a target="_blank" href='${value.attached_document}'>${value.name.KA}</a>`,
            sortable: true
        }
    ],

    listeners: {
        // select: 'onItemSelected',
        // tap: 'onItemSelected',
        itemdblclick: 'onItemSelected'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",

        items: ['-', {
            bind: '{expanded ? "Hide Preview" : "Show Preview"}',
            pressed: '{expanded}',
            enableToggle: true,
            toggleHandler: 'onToggleExpanded'
        }]
    }
});
