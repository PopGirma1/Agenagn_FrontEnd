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

    it("checks the feedback section when it accepts user email and user comments" , ()=>{
        cy.visit("/About");
        cy.get('[id="filled-basic"]').should("exist")
        cy.get('[id="filled-basic"]').should("exist").type("papa@gmail.com")
        cy.get('[id="feedback"]').should("exist").type("Agenagn is a solution for looking for house available for rent. " +
            "The system connects strangers who looking for house rent and administrator of the system. " +
            "The service capable of showing the detailed information about the house such as number of bedrooms, " +
            "bathrooms, price of rent, location where the house is found." +
            " In addition, the strangers can filter the available house with respect to the ranges of price they can afford." +
            " The service would not provide online payment since online payment is another challenge in Ethiopia." +
            " The system reduces strangers’ time, energy and money spent by looking for house. " +
            "It reduces an additional money spent for brokers from both strangers and owner." +
            " Furthermore, it facilitates house rent to be taken earlier." +
            " In terms of boundary Agenagn works for house found around Addis Ababa for now." +
            " But, for sure Agenagn will expand to the rest of Ethiopia.")
        cy.get('[id="submit"]').should("exist").click()
    })
});
