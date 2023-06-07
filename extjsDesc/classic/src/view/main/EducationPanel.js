Ext.define('Ext.form.Panel', {
    title: 'Education',
    width: 300,
    height: 125,
    fullscreen: true,
    xtype: 'educationPanel',
    store: {type: 'EducationStore'},
    items:[{
        xtype: 'checkboxgroup',
        label: 'Education',
        // Arrange checkboxes distributed vertically.
        // Automatically latter items flow to next column if
        // available height is less to display all the items in single column.
        vertical: true,
        height: 200,
        items: [
            { label: 'Item 1', name: 'cb-item-1', value: '1' },
            { label: 'Item 2', name: 'cb-item-2', value: '2', checked: true },
            { label: 'Item 3', name: 'cb-item-3', value: '3' },
            { label: 'Item 4', name: 'cb-common', value: '4' },
            { label: 'Item 5', name: 'cb-common', value: '5' },
            { label: 'Item 6', name: 'cb-common', value: '6' }
        ]
    }]
}
);