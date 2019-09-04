public class ProfileTest {
    public static void test1 (){
        Profile p = [select id from profile where name =: 'TestMe'];
        System.debug('Profile details: '+p);
    }

}