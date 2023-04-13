describe('Exhibit Page', () => {
  beforeEach(() => {
    cy.intercept('GET',  {
      statusCode: 200,  
    })
    cy.visit('http://localhost:3000/favorites')
  })
})