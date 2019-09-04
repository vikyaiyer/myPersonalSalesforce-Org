public class SCV_listViewController {
    public static final String STR_NO_OBJECT = 'No object received';
	@auraEnabled
    public static Map<String,Object> getListViewTypes(String obj){
        Map<String, Object> mapRet = new Map<String, Object>();
        if(String.isNotBlank(obj)){              
        	List<listView> optionList = [SELECT Name, DeveloperName FROM listView WHERE sObjecttype =: obj];
            mapRet.put(obj,optionList);
        }else mapRet.put('error', STR_NO_OBJECT);
        return mapRet;
    }
}