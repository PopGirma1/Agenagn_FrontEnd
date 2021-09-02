describe("We are searching for you! Let’s get in touch!",()=>{
    it("We are searching for you! Let’s get in touch!" , ()=>{
        cy.visit("/Contact");
        cy.contains("We are searching for you! Let’s get in touch!");
    })


});




