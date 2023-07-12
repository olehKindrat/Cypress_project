export class addToBasket{
    selectTvMultimedia(){
        cy.contains('.mm__item', 'Телевізори та мультимедіа')
        .should('be.visible')
        .click()
    }
    openHomePage(){
        cy.visit('https://allo.ua/')
    }
    verifyItemsList(){
        cy.get('.mm__list').should('exist', {timeout: 15000})
    }
    openSubCategory(){
        cy.get('h2 [href="https://allo.ua/ua/televizory/"]')
        .click()
    }
    addItemToBasket(){
        cy.get('[data-product-id="9703087"] .v-btn--cart')
        .click()
    }
    exitBasket(){
        cy.get('button.comeback')
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
    addSecondItemToBasket(){
        cy.get('[data-product-id="11913346"] .v-btn--cart')
        .click()
    }
    exit2Basket(){
        cy.get('button.comeback')
        .click()
    }
    openBasket(){
        cy.get('.mh-cart [aria-label="Кошик"]')
        .click()
    }
    checkFirstItemInBucket(televizor){
        cy.get('.title [href="https://allo.ua/ua/televizory/televizor-xiaomi-mi-tv-q1e-55.html"]')
        .should('contain.text', televizor)
    }
    checkSecondItemInBucket(notebook){
        cy.get('.title [href="https://allo.ua/ua/products/notebooks/mi-redmibook-15-i3-8-256-jyu4436id.html"]')
        .should('contain.text', notebook)
    }
    verifyPrise(price){
      cy.get('.content [class="total-box"]')
      .contains(price)
      .should('be.visible')
    }
}
export const itemAdd = new addToBasket()