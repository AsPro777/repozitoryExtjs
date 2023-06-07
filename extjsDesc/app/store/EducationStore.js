Ext.define('MyApp.store.EducationStore', {
    extend: 'Ext.data.Store',

   alias: 'store.EducationStore',
   model: 'MyApp.model.Education',
   autoLoad: true,
   fields : [
    {name: 'title'},
   ],
   proxy: {
    type: 'ajax',
    reader: {
        type: 'json',
        rootProperty: 'dataEducations'
    },
    url: 'http://www.zend2.local/'
   }
});