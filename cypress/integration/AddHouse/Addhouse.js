describe("it renders correctly", ()=>{
    it('is working', () => {
        expect(true).to.equal(true)
    });

    it('visits the app', () => {
        cy.visit('http://localhost:3000')
    })
    it("check the Add home page ", ()=>{
      cy.visit("/Addhouse");
        cy.get('#loading').should('not.exist')
    });
    it('Visits the Kitchen Sink on cypress', () => {
        cy.visit('https://example.cypress.io')
    })
    it("visits my github profile link",()=>{
        cy.visit("https://github.com/PopGirma1/Agenagn_FrontEnd");
    })
    it("checks the DatePicker element " , ()=>{

    })





})
