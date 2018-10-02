/**
 * This view is an example list of people.
 */
Ext.define('Animals.view.main.List', {

  extend: 'Ext.grid.Panel',
  xtype: 'mainlist',
  minHeight: window.innerHeight * 0.9,
  minWidth: window.innerWidth * .8,
  tbar:
    [
      {
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
  tools: [
    {
      type: 'gear',
      callback(grid) {
        Ext.Msg.confirm('Reset Grid Layout', 'Are you sure that you want to reset the grid layout?',

          function (response) {
            if (response === 'yes') {
              // clear the state management for the grid
              Ext.state.Manager.clear(grid.stateId);
              // repaint the grid using the hardcoded defaults
              grid.reconfigure(grid.getStore(), grid.initialConfig.columns);
            }
          });
      }
    }
  ],
  requires: [
    'Ext.data.Store',
    'Ext.toolbar.Paging',
    'Ext.grid.filters.Filters'
  ],

  title: 'Species',
  bind: '{speciesdata}',
  columns: [
    {
      text: 'Name',
      flex: 1,
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
      flex: 0.65,
      sortable: true,
      filter: 'date',
      renderer: Ext.util.Format.dateRenderer('m/d/Y')
    },
    {
      text: 'Population', dataIndex: 'population',
      flex: 0.65, sortable: true,
      filter: 'number'
    },
    {
      text: 'Municipality', dataIndex: 'municipality', flex: 1,
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

      text: 'Sources//Methods',
      xtype: 'actioncolumn',
      align: 'center',
      flex: 1,
      filter: {
        type: 'string',
        filterFn: function (item, filter) {
          if (filter === undefined || filter === "") return true;
          let reg = new RegExp(filter.replace(/(\\|\||\.|\^|\$|\*|\+|-|\?|={|}|\[|]|\(|\))/gi,
            '\\$1'), 'gi');
          let sources = item.get('sources');
          return sources.reduce((current, val) => current || val.get('name_KA').match(reg) !== null ||
            val.get('name_EN').match(reg) !== null ||
            val.get('attached_document').match(reg) !== null, false)

        }
      },
      items:
        [
          {
            xtype: 'button',
            iconCls: 'x-fa fa-eye',
            tooltip: 'Show the sources',
            handler: 'onShowSources'
          }
        ]
    },

  ],

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
