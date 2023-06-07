Ext.define('MyApp.store.StockStore', {
    extend: 'Ext.data.Store',

   alias: 'store.StockStore',
   model: 'MyApp.model.Stock',
   autoLoad: true,
   fields : [
    {name: 'name'},
    {name: 'education'},
    {name: 'city'},
   ],
   proxy: {
    type: 'ajax',
    reader: {
        type: 'json',
        rootProperty: 'dataUsers'
    },
    /*url: 'http://localhost/zend2.local/public/'*/
    url: 'http://www.zend2.local/'
   }
});