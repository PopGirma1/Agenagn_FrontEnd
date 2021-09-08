describe("renders the home page",()=>{
    it("renders correctly",()=> {
        cy.visit("/About");
        cy.get("#container").should("exist");
    });
});
