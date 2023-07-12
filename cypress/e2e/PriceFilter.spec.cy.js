/// <reference types="Cypress"/>
import { applyFilters } from "../support/pages/VerifyFilters"
beforeEach(() => {
    cy.viewport(1920, 1080) })
describe('VerifyPriceFilter', ()=>{
it.only('verifyPriceAndItemSorting ', () => {
    applyFilters.openHomePage()
    applyFilters.chooseTourismFishingCat()
    applyFilters.chooseBoatAndEngSubCat()
    applyFilters.chooseBoatEngSubCat()
    applyFilters.chooseParsonProd()
    applyFilters.chooseTwotaktEngine()
    applyFilters.applyFiltersClickPopUp()
    applyFilters.sortItemsExpToCheap()

    
    
    
    
})
})