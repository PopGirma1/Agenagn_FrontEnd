describe("renders the home page",()=>{

    it("check the id's which is not found in the page" , ()=>{
        cy.visit("/Detail");
        cy.get('#loading').should('not.exist')
    });
    it("renders correctly",()=> {
        cy.visit("NavTabs");
        cy.get("span").contains("Location");

    });

});
