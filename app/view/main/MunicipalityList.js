Ext.define('Animals.view.main.MunicipalityList', {
  extend: 'Ext.grid.Panel',
  xtype: 'municipalitylist',
  minHeight: window.innerHeight * 0.9,
  minWidth: window.innerWidth * .8,
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
  columns: [{
    text: 'სახელი (ქართულად)',
    flex: 1,
    dataIndex: 'name_KA',
    sortable: true,

  }, {
    text: 'სახელი (ინგლისურად)',
    flex: 1,
    dataIndex: 'name_EN',
    sortable: true,

  }]
});