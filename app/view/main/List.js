/**
 * This view is an example list of people.
 */

Ext.define('Animals.view.main.List', {

  extend: 'Ext.grid.Panel',
  xtype: 'mainlist',
  minHeight: window.innerHeight * 0.65,
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

  store: 'speciesdata',

  columns: [
    {
      text: 'Name', flex: 2,
      dataIndex: 'species',
      renderer: (val, el, entry) => nameRenderer(val, el, entry, 'species'),
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
      text: 'Municipality', dataIndex: 'municipality', flex: 2,
      renderer: (val, el, entry) => nameRenderer(val, el, entry, 'municipalities'),
      sortable: true, filter: {
        type: 'string',
        itemDefaults: {
          emptyText: 'Search for... (KA)'
        }
      }
    },
    {
      text: 'Source',
      dataIndex: 'source',
      flex: 2,
      renderer: (val, elem, entry) => {
        if (typeof  val === "number") val = Ext.data.StoreManager.lookup(store).getAt(val - 1);
        return `<a target="_blank" href='${val.data.attached_document}'>${val.data.name_KA}</a> \t• <a target="_blank" href='${val.data.attached_document}'>${val.data.name_EN}</a>`
      },
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
