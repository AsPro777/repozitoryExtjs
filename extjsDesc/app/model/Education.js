Ext.define('MyApp.model.Education', {
    extend: 'MyApp.model.Base',

    store : 'MyApp.store.EducationStore',
    fields: [
        {name: 'title' , type: 'string'},
    ]
});