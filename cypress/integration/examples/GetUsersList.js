
context('API Testing using Cypress', ()=>{

    it('GET-User List', ()=>{
  
        cy.request({
            method : 'GET', 
            url : 'http://localhost:5008/api/profile/user',
            headers :{
              'content-type' : 'application/json'
               }
            
          }).then((response)=>{
  
           expect(response.status).equal(200);
           expect(response.statusText).equal('OK');
        //    expect(response.body).to.not.be.null;
           expect(response.body.userid).equal('jurcja4');
           expect(response.body.firstname).equal('James');
           expect(response.body.lastname).equal('Jurczewsky');
           console.log(response.body);
  
       });
  
    });
});