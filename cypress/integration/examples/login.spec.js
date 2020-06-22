describe("login and Verify title",function(){

    before(function(){
        cy.fixture("example").then(function(data){
            this.data = data;
        });
    });
    it("login and verify title" , function(){
        cy.login(this.data.username,this.data.password);
        cy.get('[title="Designation"]').contains('TEST ANALYST');
        cy.get('[href="#/home/dashboard"]').should('be.visible').click();
        cy.get('[class="btn btn-primary  right-buffer-10"]').should('be.visible').click();
        cy.get('[class="ng-tns-c6-17 ui-dropdown-label ui-inputtext ui-corner-all ui-placeholder ng-star-inserted"]').click();
        cy.get('#bar-home > app-weekly > div > div.container-fluid > div > div > div.table-responsive.empdircontainer > div > div > table > tbody > tr:nth-child(3) > td.table-particulars.padding-top-0 > div > div.col-sm-12 > p-dropdown > div > div.ng-tns-c6-17.ui-dropdown-panel.ui-widget-content.ui-corner-all.ui-shadow.ng-trigger.ng-trigger-panelState > div.ui-dropdown-items-wrapper > ul > li:nth-child(1) > span').click();
        cy.get('#bar-home > app-weekly > div > div.container-fluid > div > div > div.table-responsive.empdircontainer > div > div > table > tbody > tr:nth-child(3) > td.table-cell.today > input').type('9:00');
        cy.get('[title="Save Weekly Timesheet"]').click();
        
    });
    it("just login" , function(){
        cy.login(this.data.username,this.data.password);
        
    });
   
});