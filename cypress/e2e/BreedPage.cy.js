describe('Single Breed Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://dog.ceo/api/breed/labrador/images", {
      statusCode: 200,
      fixture: "singleExhibitBreeds.json"
    })
    cy.visit('http://localhost:3000/dogexhibits')
    cy.get('#labrador > img').click()
  })

  it('Should have the specific dog breed cards displayed', () => {
    cy.get(".dog-card").should('have.length', 6)
  })
  
  it('Should have the images and buttons for each card', () => {
    cy.get('.breed-page > :nth-child(1)').find('img').should('have.attr', 'src', 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_1024.jpg')
    cy.get('.breed-page > :nth-child(1)').find('.favorite-button')
    cy.get('.breed-page > :nth-child(6)').find('img').should('have.attr', 'src', 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_1157.jpg')
    cy.get('.breed-page > :nth-child(6)').find('.favorite-button')
  })
})