describe("renders the home page",()=>{
    it("renders correctly",()=> {

        cy.visit('/About');
        cy.get("#container").should("exist");

    });
    it("finds the text Agenagn", ()=>{

        cy.visit("/About");
        cy.contains('Agenagn') // Yield first el in document containing 'Hello'
    });

    it('renders the Developers text:\n', () => {
        cy.visit("/About")
        cy.contains("Developers");
    });

    it("checks the feedback section" , ()=>{
        cy.visit("/About");
        cy.get('[id="filled-basic"]').should("exist")
    })

    it("check if it has a value ", ()=>{
        cy.visit("/About")
        cy.get('[id="filled-basic"]').should('have.type', 'submit')
    })
});
