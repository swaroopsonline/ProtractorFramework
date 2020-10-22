
let homepage = require('../pages/homepage');

describe('demo calculator tests', function(){

    it('addition test', function(){

        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNo('2');

        //element(by.model('second')).sendKeys('4');
        homepage.enterSecondNo('4');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickButton();

        //let result = element(by.cssContainingText('.ng-binding', '6'));
        //expect(result.getText()).toEqual('7');
        
        homepage.verifyResult('6');

        browser.sleep(3000);        

    });  
    
    it('substraction test', function(){

        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNo('2');

        //element(by.model('second')).sendKeys('4');
        homepage.enterSecondNo('4');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickButton1();

        //let result = element(by.cssContainingText('.ng-binding', '6'));
        //expect(result.getText()).toEqual('7');
        
        homepage.verifyResult('6');

        browser.sleep(2000);        

    });    

});