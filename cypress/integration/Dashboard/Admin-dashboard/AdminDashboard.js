describe("renders AdminDashboard page",()=>{
    it("renders correctly",()=> {

        cy.visit('/AdminDashboard');
        cy.contains("Agenagn");
    });

    it("renders correctly the Agenagn background information",()=>{
        cy.contains("Agenagn is a solution for looking for " +
            "house available for rent. The system connects strangers who " +
            "looking for house rent and administrator of the system." +
            " The service capable of showing the detailed" +
            " information about the house such as number of bedrooms, " +
            "bathrooms, price of rent, location where the house is found.");
    })
});
