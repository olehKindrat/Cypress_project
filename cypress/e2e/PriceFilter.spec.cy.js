/// <reference types="Cypress"/>
import {dataItems} from "../fixtures/data"
import { applyFilters } from "../pageObject/verifyFilters"

describe('VerifyPriceFilter', () => {

    beforeEach("Login to web page", () => {
        cy.viewport(1920, 1080)
        cy.visit('/');
        cy.url().should('include', dataItems.url)
      });

it('verifyPriceAndItemSorting ', () => {
    applyFilters.chooseTourismFishingCat()
    applyFilters.chooseBoatAndEngSubCat()
    applyFilters.chooseBoatEngSubCat()
    applyFilters.chooseParsonProd()
    applyFilters.chooseTwotaktEngine()
    applyFilters.applyFiltersClickPopUp()
    applyFilters.verifyFilterSelected() 
    applyFilters.enterValueFilterFrom()  
    applyFilters.enterValueFilterTo()  
    applyFilters.applyFiltersClickPopUp()
    applyFilters.sortItemsExpToCheap()
    applyFilters.verifyFilterSelected()
    applyFilters.verifyFilterFromAndTo(10000, 80000)



})
})