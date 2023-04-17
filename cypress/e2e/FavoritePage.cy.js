describe('Favorite Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://dog.ceo/api/breed/labrador/images", {
      statusCode: 200,
      fixture: "singleExhibitBreeds.json"
    })
    cy.visit('https://museum-explorer.vercel.app/dogexhibits')
    cy.get('#labrador > img').click()
  })


  it('should have no favorites when first visiting the site', () => {
      cy.visit('https://museum-explorer.vercel.app/favorites')
      cy.get(".fave-dog").should('have.length', 0)
      cy.get(".fave-message").contains("You haven't favorited any dogs yet...")
    })

    it('should allow a user to favorite a dog image and delete one', () => {
      cy.visit('https://museum-explorer.vercel.app/dogexhibits')
      cy.get('#labrador > img').click()
      cy.get(':nth-child(1) > .favorite-button').click()
      cy.get(':nth-child(2) > .favorite-button').click()
      cy.get('[href="/favorites"] > .nav-btn').click()
      cy.get(".fave-dog").should('have.length', 2)
      cy.url().should('includes', '/favorites')
      cy.get(':nth-child(1) > .delete-button').click()
      cy.get(".fave-dog").should('have.length', 1)
      cy.get(':nth-child(1) > .delete-button').click()
      cy.get(".fave-dog").should('have.length', 0)
    })
})
