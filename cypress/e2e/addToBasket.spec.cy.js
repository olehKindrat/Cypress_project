/// <reference types="Cypress"/>
import {dataItems} from "../fixtures/data"
import { addingItem } from "../pageObject/addingItemToBasket"
  describe('Add items to the basket', ()=>{
    
    beforeEach("Login to web page", () => {
      cy.viewport(1920, 1080)
      cy.visit('/');
      cy.url().should('include', dataItems.url)
    });

  it('Add twoItems items to the basket and verify it ', () => { 
      addingItem.verifyItemsList()
      addingItem.selectTvMultimedia()
      addingItem.openSubCategory()
      addingItem.addFirstElementToBasket()
      addingItem.verifyBasketOpened()
      addingItem.clouseBasket()
      addingItem.returnHomePage()
      addingItem.openAnotherCategogy()
      addingItem.openAnotherSubcategory()
      addingItem.addSecondElementToBasket()
      addingItem.verifyBasketOpened()
      addingItem.clouseBasket()
      addingItem.openBasket()
      addingItem.checkFirstItemInBucketByName('Телевізор Xiaomi Mi TV Q1E 55')
      addingItem.checkSecondItemInBucketByName('Ноутбук Acer Aspire 5 A515-45 (NX.A83EU.014)')
      addingItem.verifyPrise('44 498')
    })
  })