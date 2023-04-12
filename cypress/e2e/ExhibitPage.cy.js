describe('Exhibit Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://dog.ceo/api/breeds/image/random', {
      statusCode: 200,  
    
    })
    cy.visit('http://localhost:3000/dogexhibits')
  })

  it('Should have five breeds/exhibits', () => {
    cy.get('.exhibit-container').find('.exhibit-card-container').should('have.length', 5);
  })
  
  it('Should have the name of a dog breed', () => {
    cy.get('#Labrador > .breed-name')
    cy.get('#Bulldog > .breed-name')
    cy.get('#Greyhound > .breed-name')
    cy.get('#Retriever > .breed-name')
  })

})