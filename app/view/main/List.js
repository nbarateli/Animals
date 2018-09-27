/**
 * This view is an example list of people.
 */
let args;
Ext.define('Animals.view.main.List', {

  extend: 'Ext.grid.Panel',
  xtype: 'mainlist',
  minHeight: window.innerHeight * 0.9,
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
    }, {
      text: 'source',
      xtype: 'actioncolumn',
      align: 'center',
      items:
        [
          {
            xtype: 'button',
            iconCls: 'x-fa fa-plus-circle',
            tooltip: 'Show the sources',
            handler: 'onShowSources'
          }
        ]
    },
    // {
    //   text: 'Source',
    //   dataIndex:
    //     'source',
    //   flex:
    //     2,
    //   renderer:
    //     (val) => {
    //       let sources = Ext.data.StoreManager.lookup('sources');
    //       if (typeof  val === "number") val = sources.getAt(sources.findBy((rec, id) => id === val));
    //       return val.data ?
    //         `<a target="_blank" href='${val.data.attached_document}'>${val.data.name_KA}</a> \t• <a target="_blank" href='${val.data.attached_document}'>${val.data.name_EN}</a>` :
    //         `<a target="_blank" href='${val.attached_document}'>${val.name_KA}</a> \t• <a target="_blank" href='${val.attached_document}'>${val.name_EN}</a>`
    //     },
    //   sortable:
    //     true,
    //   filter:
    //     {
    //       dataIndex: 'source',
    //       type:
    //         'sourcefilter',
    //       store:
    //         'speciesdata',
    //       filterId:
    //         'sourceFilter',
    //       itemDefaults:
    //         {
    //           emptyText: 'Search for...'
    //         }
    //     }
    // }
  ],

  listeners: {

    itemdblclick: 'onItemSelected'
  }
  ,
  loadMask: true,

  bbar:
    {
      xtype: 'pagingtoolbar',
      displayInfo:
        true,
      displayMsg:
        'Displaying topics {0} - {1} of {2}',
      emptyMsg:
        "No topics to display",
      onRefresh(elem) {

        let panel = elem.up('panel');
        let loadingMask = new Ext.LoadMask({
          msg: 'Please wait...',
          target: panel
        });

        loadingMask.show();
        setTimeout(() => {

          panel.store.load(() => {

            loadingMask.hide();
          })
        }, 200)//only for testing
      }
      ,
      items: [
        {
          xtype: 'combobox',
          fieldLabel: 'Items per page',
          value: 5,
          store: Ext.create('Ext.data.Store', {
            model: Ext.create('Ext.data.Model', {
              fields: [{name: 'val', type: 'int'}],
              validators: {'val': v => v > 0}
            }),
            data: [{val: 5}, {val: 10}, {val: 25}, {val: 50}, {val: 100}
            ]
          }),
          valueField: 'val',
          displayField: 'val',
          maxWidth: 180,
          modelValidation: true,
          minValue: 1,
          listeners: {
            change:
              'onNumberOfPagesChanged'
          },
          validator: v => v.val ? v.val > 0 : v > 0,
          forceSelection: false,
          allowBlank: false
        }],
      doRefresh:
        'onRefresh'
    }
  ,

  plugins: 'gridfilters'
})
;
