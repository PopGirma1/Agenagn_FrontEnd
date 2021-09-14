describe("renders Search page",()=>{
    it("renders correctly",()=> {
        cy.visit('http://localhost:3000/');
        cy.contains("Agenagn");
        cy.wait(6000)
    });

    it("can accept user input and can show the result ",()=>{
        cy.get('[id="search"]').should("exist").type("ayat")
        cy.wait(6000)
    })

    it("can accept user input and can show the result ",()=>{
        cy.visit('http://localhost:3000/');
        cy.get('[id="search"]').should("exist").type("4 kilo condominium{enter}")
    })

});


