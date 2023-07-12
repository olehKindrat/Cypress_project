/// <reference types="Cypress"/>
import { itemAdd } from "../support/pages/AddingItemToBasket"
beforeEach(() => {
  cy.viewport(1920, 1080) })
  describe('Add items to the basket', ()=>{
  it.only('Add twoItems and check them ', () => {
      
      itemAdd.openHomePage()
      itemAdd.verifyItemsList()
      itemAdd.selectTvMultimedia()
      itemAdd.openSubCategory()
      itemAdd.addItemToBasket()
      itemAdd.exitBasket()
      itemAdd.returnHomePage()
      itemAdd.openAnotherCategogy()
      itemAdd.openAnotherSubcategory()
      itemAdd.addSecondItemToBasket()
      itemAdd.exit2Basket()
      itemAdd.openBasket()
      itemAdd.checkFirstItemInBucket('Телевізор Xiaomi Mi TV Q1E 55')
      itemAdd.checkSecondItemInBucket('Ноутбук Mi RedmiBook 15 ')
      itemAdd.verifyPrise('37 498 ₴')
    })
      
  })
  