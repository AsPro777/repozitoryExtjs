
/*Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    items: [
        {
            xtype: 'mainGrid'
        }
    ]
});*/

var filterPanel = Ext.create('Ext.panel.Panel', {
    bodyPadding: 5,  
    width: 800,

    items: [

        {
            xtype: 'mainGrid',

        },
    ],
    renderTo: Ext.getBody()
});




/*Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'MyApp.view.main.Grid'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 0,
    titleRotation: 0,
    tabRotation: 0,*/

   /* header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },*/

    /*tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },*/

    /*responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },*/

    /*defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },*/

   /* items: [{
        title: 'Home',
        iconCls: 'fa-columns',
        items: [{
            xtype: 'mainGrid'
        }]
    }],
    renderTo: Ext.getBody()
});*/
