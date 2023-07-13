export class FailedTestPage {
    typeSearchRequest(itemName){
        cy.get('input#search-form__input')
        .type(itemName)
    }
    clickSearchButton(){
        cy.get('button.search-form__submit-button')
        .click()
    }
    checkProductCards(productName){
        cy.get('div.product-card')
        .should('include.text', productName);
    }

}
export const testFail = new FailedTestPage()
