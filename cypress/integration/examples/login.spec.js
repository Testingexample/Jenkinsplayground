describe("Login and Verify Designation",function(){

    before(function(){
        cy.fixture("example").then(function(data){
            this.data = data;
        });
    });
    it("Verify Designation" , function(){
        cy.login(this.data.username,this.data.password);
        cy.get('[title="Designation"]').contains('TEST ANALYST');
        
    });
});