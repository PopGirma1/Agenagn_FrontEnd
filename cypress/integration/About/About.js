describe("renders the About page",()=>{
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

});
