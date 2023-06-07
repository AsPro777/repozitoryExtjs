Ext.define('MyApp.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    store: {type: 'StockStore'},
    xtype: 'mainGrid',
    title: 'Users',
    plugins:[{
        ptype:'cellediting',
        clicksToEdit: 1,
        listeners: {
            afteredit : function(dv, record, item, index, e) {
                var name=record.row.cells[0].textContent;

                Ext.Ajax.request({
                    url: "http://www.zend2.local/changeEducation",
                    success: function (response) {

                        alert(response.responseText)
                    },
                    failure: function () {
                       alert("failed to load")
                    },
                    params: {
                        "value": record.value,
                        "name":name
                    }
                });
            }
        }
    }],
   
    columns: [
         {text: 'Name' , dataIndex: 'name' , flex: 1},
         {text: 'Education' , dataIndex: 'education' , flex: 1,editor: {
            xtype: 'textfield',
            allowBlank: false
        }},
         {text: 'City' , dataIndex: 'city' , flex: 1},
    ],
    renderTo: Ext.getBody()
});