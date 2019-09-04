({
    changeListView : function(component, event, helper) {
       var listView = component.find("listViewAccounts");
       listView.set("v.body",[]);
       helper.createListView(component, listView);
    },
    initListViewSCV : function(component, event, helper){
        helper.callApex(component, 'getListViewTypes', {obj: 'Account'}, function(response){
            component.set('v.uiControls.lstViewTypes', response.Account);
        }, function(error){});
    }
})