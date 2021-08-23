import React from 'react'
// import { mount } from 'cypress-react-unit-test'
import Button from '@material-ui/core/Button'
import {mount} from "@cypress/react";

describe("check the login page ", ()=> {
    it('check the text (Login Account)', () => {
        cy.visit("/login");
        cy.findByText("Login Account").should("exist");
    });

    it('renders a button', () => {
        mount(
            <Button variant="contained" color="primary">
                LOG IN
            </Button>,
        )
    })

})

