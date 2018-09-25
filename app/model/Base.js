Ext.define('Animals.model.Base', {
  extend: 'Ext.data.Model',

  fields: [
    {name: 'id', type: 'int'},
    'name_KA', 'name_EN'
  ],
  schema: {
    namespace: 'Animals.model'
  },
  // hasMany: 'Animals.model.SpeciesData'
});
Ext.define('Ext.grid.filters.filter.Animals', {
  extend: 'Ext.grid.filters.filter.String',
  alias: 'grid.filter.animalsfilter',

  activate: function (showingMenu) {
    if (showingMenu) {
      this.activateMenu();
    } else {
      let filter = this.filter;
      let dataIndex = this.dataIndex;
      let id = this.filterId;
      this.addStoreFilter(new Ext.util.Filter({
        id: id,
        filterFn: function (item) {
          if (filter.getValue() === undefined) return true;
          let reg = new RegExp(filter.getValue().replace(/(\\|\||\.|\^|\$|\*|\+|\-|\?|\=\{|\}|\[|\]|\(|\))/gi,
            '\\$1'), 'gi');
          return item.get(dataIndex).get('name_KA').match(reg) !== null ||
            item.get(dataIndex).get('name_EN').match(reg) !== null;
        }
      }));
    }
  }, deactivate: function () {
    this.getGridStore().removeFilter(this.filterId)
  }
});