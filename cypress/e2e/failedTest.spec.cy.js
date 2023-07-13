/// <reference types="Cypress"/>
import {dataItems} from "../fixtures/data"
import { testFail } from "../pageObject/failedTestPage"
describe('Do failed test', () => {

  beforeEach("Login to web page", () => {
    cy.viewport(1920, 1080)
    cy.visit('/');
    cy.url().should('include', dataItems.url)
  });

  it('searchTheItemsAndChekThem', () => {
    testFail.typeSearchRequest('Samsung Galaxy Watch Active 2 40mm')
    testFail.clickSearchButton()
    testFail.checkProductCards('FailedTest' )
    
  })
})