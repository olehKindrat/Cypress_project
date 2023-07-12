export class PriceFilter {
    openHomePage(){
        cy.visit('https://allo.ua/') 
    }
    chooseTourismFishingCat(){
        cy.contains('.mm__item', 'Туризм та риболовля')
        .should('be.visible')
        .click()
    }
    chooseBoatAndEngSubCat(){
        cy.contains('.portal-group .portal-group__item ', 'Човни і мотори')
        .should('be.visible')
        .click()
    }
    chooseBoatEngSubCat(){
        cy.contains('.portal-group .portal-group__item ', 'Човнові мотори')
        .should('be.visible')
        .click()
    }
    chooseParsonProd(){
        cy.get('[class="f-list cropped"]>:first-child')
        .click()
    }
    chooseTwotaktEngine(){
        cy.get('a[data-id="12651"]')
        .click()
    }
    applyFiltersClickPopUp(){
        cy.contains('[class="f-popup__message"]','Показати').should('exist', {timeout: 800})
        .should('be.visible')
        .click()
    }    
    sortItemsExpToCheap(){
        cy.get('.sort-by__select .sort-by__current').trigger('mouseover')
        cy.contains('від дорогих до дешевих')
        .click()
    }    
 }
 export const applyFilters = new PriceFilter()
