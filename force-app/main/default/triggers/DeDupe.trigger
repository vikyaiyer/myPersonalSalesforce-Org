trigger DeDupe on Account (after insert) {   
    for (Account acc : Trigger.new){
        
        Case newCase = new Case();
        
        newCase.OwnerId   = '0056F00000AIbjk';
        newCase.Subject   = 'DeDupe this account';
        newCase.AccountId = acc.Id;
        
        insert newCase;
    }
    

}