describe("renders Search page",()=>{
    it("renders correctly",()=> {
        cy.visit('/Search');
        cy.contains("HomeIcon");

    });
});


