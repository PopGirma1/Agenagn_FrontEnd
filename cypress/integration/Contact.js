describe("renders the home page",()=>{
    it("finds the (send message) text" , ()=>{
        cy.visit("/Contact");
        cy.get('.bt-submit').contains('Send Message') // Yield el in .bt-submit containing 'Send Message'
    })

    it("finds the input type email ", ()=>{

        cy.visit("/Contact");
        cy.get('h4').contains('Wants to contact US? feel free');

    })
});
