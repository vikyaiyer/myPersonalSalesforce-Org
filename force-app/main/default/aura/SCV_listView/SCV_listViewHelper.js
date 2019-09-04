({
	callApex: function(component, action, params, successFn, errorFn){
		var actionRef = component.get('c.'+action);
        if(!$A.util.isEmpty(params))
             actionRef.setParams(params);
        actionRef.setCallback(this, function(response){
            var state = response.getState();            
            switch(state){
                case 'SUCCESS':
                    successFn(response.getReturnValue());
                    break;
                case 'ERROR':
                    errorFn(response.getError());
                    break;
                case 'INCOMPLETE':
                   alert('Action seems incomplete. Something went wrong.');
                    break;
                default:
                    alert('Unknown error');
                    break;
            }
        });
        $A.enqueueAction(actionRef);
	},
    createListView: function(component, parentComponent){
        $A.createComponent('lightning:listView', {
            'objectApiName':'Account',
            'listName':component.get('v.SCV_listSelect'),
            'rows':'5',
            'showActionBar':'false', 
            'enableInlineEdit':'true',
            'showRowLevelActions':'false'
        }, function(cmp, status, errormessage){
            if(status == 'SUCCESS'){
                var getParent = parentComponent.get('v.body');
                getParent.push(cmp);
                parentComponent.set('v.body', getParent);
            }
        });
    }
})