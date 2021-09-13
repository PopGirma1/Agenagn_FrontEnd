describe("renders AdminDashboard page",()=>{

    it("admin should first logged in then add a new house",() =>{
        cy.visit("/Login")
        cy.get('#email')
            .type('justt@gmail.com')
        cy.get("#password")
            .type('qw')
        cy.get("#login")
            .click()
        cy.get("#addNewHouse")

        cy.visit("/addhouse")

        cy.contains("Location of the Condominium")
        cy.get('input[name="Myname"]')
            .type('Balderas Condominium')

        // select number of bed rooms
        cy.get('select[name="selectNumberOfBedrooms"]')
            .select('3')
            // confirm the selected value
            .should('have.value', '3')

        // select number of floor
        cy.get('select[name="selectNumberOfFloor"]')
            .select('3')
            // confirm the selected value
            .should('have.value', '3')
        // type the monthly payment
        cy.get('input[name="payment"]')
            .type('6000')

        //select the number of Square Meters

        cy.get('input[name="SquareMeter"]')
            .type('3 x 4')
            // confirm the selected value
            .should('have.value', '3 x 4')

        // date picker

        // cy.get('#date')
        //     .select('10-09-2021')
        //     .should('have.value', '10-09-2021')

        // write the phone number
        cy.get('input[name="phone"]')
            .type("940651254")

        //  upload images

        cy.wait(3000)
        cy.get('[data-cy=content]')
            .attachFile('image/4.jpg', { subjectType: 'drag-n-drop' }) // image 1
        cy.wait(3000)

        cy.get('[data-cy=content]')
            .attachFile('image/5.jpg', { subjectType: 'drag-n-drop' })  //image 2
        cy.wait(3000)

        cy.get('[data-cy=content]')
            .attachFile('image/6.jpg', { subjectType: 'drag-n-drop' })  // image 3
        cy.wait(3000)
        // let's check whether it is guest house or not

        cy.get('input[name="guestRadio"]')
            .check('yes')
// Short description (optional)
        cy.get('textarea[name="shortDescription"]')
            .type("this is my best house ever. so please use this opportunity, keep it up")

// finally click the submit button then redirect to the home page
        cy.get("#submit")
            .click()
    })
    it("can accept user input and can show the result ",()=>{
        cy.visit('http://localhost:3000/');
        cy.get('[id="search"]').should("exist").type("Balderas Condominium{enter}")
    })

});


