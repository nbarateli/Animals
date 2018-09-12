/**
 * This view is an example list of people.
 */

Ext.define('Animals.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

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
            text: 'Name', dataIndex: 'name_KA', sortable: true, filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Search for...'
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
        {text: 'Population', dataIndex: 'population', flex: 1, sortable: true, filter: 'number'},
        {
            text: 'Municipality', dataIndex: 'municipality_KA', flex: 1, sortable: true, filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Search for...'
                }
            }
        },
        {
            text: 'Source',
            dataIndex: 'source_name_KA',
            flex: 1,
            renderer: (value, entry, el) => {

                return `<a target="_blank" href='${el.data.attached_document}'>${value}</a>`
            },
            sortable: true,
            filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Search for...'
                }
            }
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
    plugins: {
        gridfilters: true
    },

});
