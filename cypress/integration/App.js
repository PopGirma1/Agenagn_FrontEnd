describe("check the App.js file",()=>{
    it('renders the Developers text:\n', () => {
        cy.visit("/About")
        cy.contains("Developers");
    });
})
