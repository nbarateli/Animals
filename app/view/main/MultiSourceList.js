Ext.define('Animals.view.main.MultiSourceList', {
  extend: 'Ext.grid.Panel',
  height: 400,
  width: 700,
  bodyPadding: 5,
  floating: true,
  closable: true,
  xtype: 'msrclist',
  columns: [
    {
      text: 'Source',
      dataIndex: 'name_KA',
      flex:
        2,
      renderer:
        (val, metaData, record) => {
          let sources = Ext.data.StoreManager.lookup('sources');
          if (typeof  record === "number") record = sources.getAt(sources.findBy((rec, id) => id === record));

          let rend = record.data ? {...record.data} : {...record};
          return `<a target="_blank" href='${rend.attached_document}'>${rend.name_KA}</a> \t• <a target="_blank" href='${rend.attached_document}'>${rend.name_EN}</a>`
        },
      sortable:
        true,
      filter:
        {
          dataIndex: 'source',
          type:
            'sourcefilter',
          store:
            'speciesdata',
          filterId:
            'sourceFilter',
          itemDefaults:
            {
              emptyText: 'Search for...'
            }
        }
    },
    {
      width: 100,
      xtype: 'actioncolumn',
      text: 'Actions',

      align: 'center',
      items:
        [
          {
            xtype: 'button',
            iconCls: 'x-fa fa-edit',
            tooltip: 'Edit this source',

          }, {/*blank space*/},
          {
            xtype: 'button',
            iconCls: 'x-fa fa-minus-square-o',
            tooltip: 'Remove from source list',
          }
        ]
    },
  ]
});