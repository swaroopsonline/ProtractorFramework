let homepage = function(){

    let firstTextBox = element(by.model('first'));
    let secondTextBox = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNo = function(firstNo){
        firstTextBox.sendKeys(firstNo);
    };

    this.enterSecondNo = function(secondNo){
        secondTextBox.sendKeys(secondNo);
    };

    this.clickButton = function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);        
    };

};

module.exports = new homepage();