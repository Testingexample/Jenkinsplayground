
class MainPage
{
    FetchJanus(){
        cy.visit("http://localhost:8089/");
       
    }
   

    ValidateallLables(){
        cy.get('#userInfoButtonElement').contains('James');
       // cy.wait(5000);
        // cy.get('[sortby="date"]').should('eq','Date');
        cy.xpath('//li[text()="Team Tasks"]').contains('Team Tasks');
       // cy.wait(5000);
        cy.xpath('//li[text()="Outage Notifications"]').contains('Outage Notifications');
    }

}
export default MainPage;