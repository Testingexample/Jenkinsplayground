

describe("Launch Janus and Verify Labels",function(){
   
    it("Validate Landing page" , function(){
        cy.visit("http://localhost:8089/");
        cy.get('#userInfoButtonElement').contains('James');
        cy.xpath('//li[text()="Team Tasks"]').contains('Team Tasks');
        cy.xpath('//li[text()="Outage Notifications"]').contains('Outage Notifications');

        

    });
});

