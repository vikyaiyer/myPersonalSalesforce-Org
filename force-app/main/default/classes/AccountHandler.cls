public with sharing class AccountHandler{
    public static Account insertNewAccount(String accName){
        Account newAcc = new Account(Name = accName);
        try{
            insert newAcc;
        }
        catch(DmlException e){
            return null;
        }
        return newAcc;
    } 
}