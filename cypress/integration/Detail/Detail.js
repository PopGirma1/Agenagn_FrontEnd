describe("renders the home page",()=>{

    it("check the text which is not found in the page" , ()=>{
        cy.visit("/detail");
        // cy.get('[id="search"]').should("exist").type("submit condominium{enter}")
        cy.contains("Location")
    });

});
