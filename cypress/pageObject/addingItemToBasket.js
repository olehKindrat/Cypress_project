export class addToBasket{
    selectTvMultimedia(){
        cy.contains('.mm__item', 'Телевізори та мультимедіа')
        .should('be.visible')
        .click()
    }

    verifyItemsList(){
        cy.get('.mm__list').should('exist', {timeout: 15000})
    }
    openSubCategory(){
        cy.get('h2 [href="https://allo.ua/ua/televizory/"]')
        .click()
    }
    addFirstElementToBasket(){
        cy.get('.v-btn--cart')
        .first()
        .click()
    }
    returnHomePage(){
        cy.get('.snap-slider__item [title="Перейти на головну сторінку"]')
        .click()
    }
    openAnotherCategogy(){
        cy.get('li [href="https://allo.ua/ua/planshety-i-gadzhety/"]')
        .click({force: true})
    }
    openAnotherSubcategory(){
        cy.get('a[title="Ноутбуки"]')
        .click()
    }
    addSecondElementToBasket(){
        cy.get('.v-btn--cart')
        .eq(1)
        .click()
    }
    verifyBasketOpened(){
        cy.wait(3000)
        cy.get('.cart-popup__content .title')
        .should('exist')

    }
    
    clouseBasket(){
        cy.get('button.comeback')
        .should('exist',{timeout: 20000})
        .click()
    }
    openBasket(){
        cy.get('.mh-cart [aria-label="Кошик"]')
        .click()
    }
    checkFirstItemInBucketByName(televizor){
        cy.get('.title')
        .first()
        .should('contain.text', televizor)
    }
    checkSecondItemInBucketByName(notebook){
        cy.get('.title')
        .eq(1)
        .should('contain.text', notebook)
    }
    verifyPrise(price){
      cy.get('.content [class="total-box"]')
      .contains(price)
      .should('be.visible')
    }
}
export const addingItem = new addToBasket()