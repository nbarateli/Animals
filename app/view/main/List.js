/**
 * This view is an example list of people.
 */
let args;
Ext.define('Animals.view.main.List', {

  extend: 'Ext.grid.Panel',
  xtype: 'mainlist',
  minHeight: window.innerHeight * 0.85,
  minWidth: window.innerWidth * .8,
  tbar: [{
    iconCls: 'x-fa fa-plus',
    tooltip: 'Add a new item to the store',
    handler: 'onAddItem'
  }, {
    iconCls: 'x-fa fa-minus',
    tooltip: 'Remove the selected item from the store',
    handler: 'onRemoveItem'
  }, {
    iconCls: 'x-fa fa-edit',
    tooltip: 'Edit the selected item',
    handler: 'onEditItem'
  },
    {
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
  bind: '{speciesdata}',
  columns: [
    {
      text: 'Name', flex: 2,
      dataIndex: 'species',
      renderer: (val, el, entry) => nameRenderer(val, el, entry, 'species'),
      sortable: true,
      filter: {
        type: 'animalsfilter',
        dataIndex: 'species',
        filterId: 'speciesFilter',
        store: 'speciesdata',
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
    {
      text: 'Population', dataIndex: 'population',
      flex: 0.75, sortable: true,
      filter: 'number'
    },
    {
      text: 'Municipality', dataIndex: 'municipality', flex: 2,
      renderer: (val, el, entry) => nameRenderer(val, el, entry, 'municipalities'),
      sortable:
        true,
      filter: {
        type: 'animalsfilter',
        dataIndex: 'municipality',
        filterId: 'municipalityFilter',
        store: 'speciesdata',
        itemDefaults: {
          emptyText: 'Search for...'
        }
      }
    },
    {
      text: 'Source',
      dataIndex: 'source',
      flex: 2,
      renderer: (val) => {
        let sources = Ext.data.StoreManager.lookup('sources');
        if (typeof  val === "number") val = sources.getAt(sources.findBy((rec, id) => id === val));
        return `<a target="_blank" href='${val.data.attached_document}'>${val.data.name_KA}</a> \t• <a target="_blank" href='${val.data.attached_document}'>${val.data.name_EN}</a>`
      },
      sortable: true,
      filter: {
        dataIndex: 'source',
        type: 'sourcefilter',
        store: 'speciesdata',
        filterId: 'sourceFilter',
        itemDefaults: {
          emptyText: 'Search for...'
        }
      }
    }
  ],

  listeners: {

    itemdblclick: 'onItemSelected'
  },
  loadMask: true,

  bbar: {
    xtype: 'pagingtoolbar',
    displayInfo: true,
    displayMsg: 'Displaying topics {0} - {1} of {2}',
    emptyMsg: "No topics to display",
    items: [
      {
        xtype: 'numberfield',
        fieldLabel: 'Items on page',
        value: 5,
        step: 5,
        maxWidth: 180,
        minValue: 1,
        listeners: {
          change:
            'onNumberOfPagesChanged'
        },
        allowBlank: false
      }],
    doRefresh: 'onRefresh'
  },
  plugins: 'gridfilters'
});
