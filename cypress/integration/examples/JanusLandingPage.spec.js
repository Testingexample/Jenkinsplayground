
import MainPage from '../PageObjects/MainPage';
describe("Launch Janus and Verify Labels",function(){
   
    it("Validate Landing page" , function(){
        const mp= new MainPage();
        mp.FetchJanus();
        mp.ValidateallLables();

    });
});