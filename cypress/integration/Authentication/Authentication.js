describe("renders Authentication page",()=>{
    it("renders correctly",()=> {

        cy.visit('/Authentication');
        cy.get("#container").should("exist");

    });
});
