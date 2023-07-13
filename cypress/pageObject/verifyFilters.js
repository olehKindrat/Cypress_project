export class PriceFilter {
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
        cy.get('[class="f-popup__message"]').should('exist')
        .should('be.visible')
        .click({force: true})
    }    
    sortItemsExpToCheap(){
        cy.get('.sort-by__select .sort-by__current').trigger('mouseover')
        cy.contains('від дорогих до дешевих')
        .click()
    }    
    verifyFilterSelected(){
        cy.get('.loading-block-gif').should('exist', {timeout: 15000})
        cy.get('.loading-block-gif').should('not.exist')
        cy.wait(3000)

    }

    enterValueFilterFrom(){
        cy.get('.f-range__form :first-child')
        .click().clear()
        .type('12160')
    }
    enterValueFilterTo(){
        cy.get('.f-range__form :nth-child(2)')
        .click().clear()
        .type('46413')
    }
    verifyFilterFromAndTo(from, to){
        cy.get('.v-pb__cur .sum').each((priceElement) => {
            cy.wrap(priceElement).invoke('text').then((text) => {
                const formattedText = text.replace(/[^0-9]/g, '');
                const numberValue = parseInt(formattedText, 10);
              expect(numberValue).to.be.within(12160, 46413);
          
        })
    })
    }
}
 export const applyFilters = new PriceFilter()

