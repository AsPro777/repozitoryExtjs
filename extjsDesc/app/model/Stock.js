Ext.define('MyApp.model.Stock', {
    extend: 'MyApp.model.Base',

    store : 'MyApp.store.StockStore',
    fields: [
        {name: 'name' , type: 'string'},
        {name: 'education' , type: 'string'},
        {name: 'city' , type: 'string'},
    ]
});