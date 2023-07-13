export class SearchTheItem {
    typeSearchRequest(itemName){
        cy.get('input#search-form__input')
        .type(itemName)
    }
    search(){
        cy.get('button.search-form__submit-button')
        .click()
    }
    checkProductCards(productName){
        cy.get('div.product-card')
        .should('include.text', productName);
    }

}
export const itemSearch = new SearchTheItem()


