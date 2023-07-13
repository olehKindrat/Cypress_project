/// <reference types="Cypress"/>
import {dataItems} from "../fixtures/data"
import { itemSearch } from "../pageObject/itemSearching"
  describe('Searching items', () => {
    
    beforeEach("Login to web page", () => {
      cy.viewport(1920, 1080)
      cy.visit('/');
      cy.url().should('include', dataItems.url)
    });

  it('searchTheItemsAndVerifyThemByName', () => {
    itemSearch.typeSearchRequest('Samsung Galaxy Watch Active 2 40mm')
    itemSearch.search()
    itemSearch.checkProductCards('Samsung Galaxy Watch Active 2 40mm' )
    
  })
})