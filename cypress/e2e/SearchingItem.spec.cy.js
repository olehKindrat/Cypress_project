/// <reference types="Cypress"/>
import { itemSearch } from "../support/pages/itemSearching"
  describe('Searching items', ()=>{
  it.only('searchTheItemsAndVerifyThemByName', () => {
    itemSearch.openHomePage()
    itemSearch.typeSearchRequest('Samsung Galaxy Watch Active 2 40mm')
    itemSearch.search()
    itemSearch.checkProductCards('Samsung Galaxy Watch Active 2 40mm' )
    
  })
})