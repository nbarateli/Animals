Ext.define('Animals.model.Source', {
  extend: 'Ext.data.Model',

  fields: [
    {name: 'id', type: 'int'},
    {name: 'name_KA', type: 'string'},
    {name: 'name_EN', type: 'string'},
    {name: 'attached_document', type: 'string'}
  ]
});
Ext.define('Ext.grid.filters.filter.SourceFilter', {
  extend: 'Ext.grid.filters.filter.String',
  alias: 'grid.filter.sourcefilter',

  activate: function (showingMenu) {
    if (showingMenu) {
      this.activateMenu();
    } else {
      let filter = this.filter;
      let dataIndex = this.dataIndex;
      this.addStoreFilter(new Ext.util.Filter({
        filterFn: function (item) {
          let reg = new RegExp(filter.getValue(), 'gi')
          return item.get(dataIndex).get('name_KA').match(reg) !== null ||
            item.get(dataIndex).get('name_EN').match(reg) !== null ||
            item.get(dataIndex).get('attached_document').match(reg) !== null;
        }
      }));
    }
  },
})