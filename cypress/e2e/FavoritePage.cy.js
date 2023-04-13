describe('Exhibit Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/favorites')
    })
  
    it('should have no favorites when first visiting the site', () => {
      cy.visit('http://localhost:3000/favorites')
      cy.get(".dog-card").should('have.length', 0)
      //input message when no dogs are there
    })

    it('should allow a user to favorite a dog image', () => {
      //(not sure how to intercept and display the dogs we want to then favorite)
      // cy.intercept('https://dog.ceo/api/breed/bulldog/images', {
      //   status: 200,
      //   fixture: "favoriteDogs.json"})
      cy.visit('http://localhost:3000/dogexhibits')
      cy.get('#bulldog > img').click()
      cy.get(':nth-child(1) > .favorite-button').click()
      cy.get(':nth-child(2) > .favorite-button').click()
      cy.get('[href="/favorites"] > .nav-btn').click()
      cy.get(".dog-card").should('have.length', 2)
      //check the two images are there
      

    })

    it('should be able to delete a dog from the favorite page', () => {
      
    })

    it('should allow a user to delete a favorite image', () => {
      
    })


})

//no favorites

//


// it('should be able to favorite different dogs', () => {
//   cy.get('[href="/dogexhibits"] > .nav-btn').click()
//   cy.get('#schnauzer > img').click()
//   cy.get(':nth-child(1) > .favorite-button').click()
//   cy.get(':nth-child(2) > .favorite-button').click()
//   cy.get('[href="/favorites"] > .nav-btn').click()
//   cy.get('.dog-card').should('have.attr', 'src')
//   cy.get('.dog-card').should('have.length', 2);
//   cy.get(':nth-child(1) > .delete-button').click()
//   cy.get('.dog-card').should('have.length', 1);
// })