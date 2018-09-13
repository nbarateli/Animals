/**
 * This view is an example list of people.
 */

Ext.define('Animals.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    minHeight: window.innerHeight * 0.5,
    tbar: [{
        text: '+',
        tooltip: 'Add a new item to the store',
        handler: 'onAddItem'
    }, {
        text: '-',
        tooltip: 'Remove the selected item from the store',
        handler: 'onRemoveItem'
    }, {
        text: 'Clear Filters',
        tooltip: 'Clear all filters',
        handler: 'onClearFilters'
    }],
    requires: [
        'Ext.data.Store',
        'Ext.toolbar.Paging',
        'Ext.grid.filters.Filters'
    ],

    title: 'Species',

    store: 'species',

    columns: [
        {
            text: 'Name', flex: 2,
            dataIndex: 'name_KA',
            renderer: (val, el, entry) => `${entry.data.name_KA}\t• ${entry.data.name_EN}`,
            sortable: true,
            filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Search for... (KA)'
                }
            }
        },
        {
            text: 'Date',
            dataIndex: 'date',
            flex: 1,
            sortable: true,
            filter: 'date',
            renderer: Ext.util.Format.dateRenderer('m/d/Y')
        },
        {
            text: 'Population', dataIndex: 'population',
            flex: 0.75, sortable: true, filter: 'number'
        },
        {
            text: 'Municipality', dataIndex: 'municipality_KA', flex: 2,
            renderer: (val, el, entry) => `${entry.data.municipality_KA}\t• ${entry.data.municipality_EN}`,
            sortable: true, filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Search for... (KA)'
                }
            }
        },
        {
            text: 'Source',
            dataIndex: 'source_name_KA',
            flex: 2,
            renderer: (value, elem, entry) => `<a target="_blank" href='${entry.data.source_attached_document}'>${value}</a> \t• <a target="_blank" href='${entry.data.source_attached_document}'>${entry.data.source_name_EN}</a>`,
            sortable: true,
            filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Search for... (KA)'
                }
            }
        }
    ],

    listeners: {
        // select: 'onItemSelected',
        // tap: 'onItemSelected',
        itemdblclick: 'onItemSelected'
    },
    loadMask: true,

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
        }],
        doRefresh: function (toolbar) {

            let panel = toolbar.up('panel');
            let loadingMask = new Ext.LoadMask({
                msg: 'Please wait...',
                target: panel
            });

            loadingMask.show();
            setInterval(() => panel.store.load((records, operation, success) => {

                loadingMask.hide();
            }), 200)//only for testing
        }
    },
    plugins: 'gridfilters'

});
