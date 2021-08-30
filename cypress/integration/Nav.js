import NavTabs from "../../src/components/NavTabs";
import {mount} from "@cypress/react";

describe("renders the NavTabs ",()=>{
    it('renders the Nav Tab Elements ', () => {
        cy.visit("/NavTabs");
        cy.get('list').contains('Home')
    })
});
