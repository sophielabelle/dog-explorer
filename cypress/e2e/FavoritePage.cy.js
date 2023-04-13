describe('Exhibit Page', () => {
  beforeEach(() => {
    // cy.intercept('GET', 'https://dog.ceo/api/breed/schnauzer/images', {
    //   statusCode: 200,  
    //   fixture: "favoriteDogs.json"
    // })
    cy.intercept('GET', 'https://dog.ceo/api/breeds/image/random', {
      statusCode: 200,  
      fixture: "randomDog.json"
    })
    cy.visit('http://localhost:3000/')
  })

  it('should be able to favorite different dogs', () => {
    cy.get('[href="/dogexhibits"] > .nav-btn').click()
    cy.get('#schnauzer > img').click()
    cy.get(':nth-child(1) > .favorite-button').click()
    cy.get(':nth-child(2) > .favorite-button').click()
    cy.get('[href="/favorites"] > .nav-btn').click()
    cy.get('.dog-card').should('have.attr', 'src')
    cy.get('.dog-card').should('have.length', 2);

  })

  it('should be able to delete a dog from the favorites page', () => {
    
  })
})