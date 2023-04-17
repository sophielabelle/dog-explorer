describe('Single Breed Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://dog.ceo/api/breed/labrador/images", {
      statusCode: 200,
      fixture: "singleExhibitBreeds.json"
    })
    cy.visit('https://museum-explorer.vercel.app/dogexhibits')
    cy.get('#labrador > img').click()
  })

  it('Should have the specific dog breed cards displayed', () => {
    cy.get(".dog-card-small").should('have.length', 6)
  })
  
  it('Should have the images and buttons for each card', () => {
    cy.get('.breed-page > :nth-child(1)').find('img').should('have.attr', 'src', 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_1024.jpg')
    cy.get('.breed-page > :nth-child(1)').find('.favorite-button')
    cy.get('.breed-page > :nth-child(6)').find('img').should('have.attr', 'src', 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_1157.jpg')
    cy.get('.breed-page > :nth-child(6)').find('.favorite-button')
  })

  it('Should open a single large image when an image is clicked', () => {
    cy.get(':nth-child(1) > div > .dog-card-small').click()
    cy.get('.dog-card-large').should('have.length', 1).click().should('have.length', 0)
  })
})

describe('Error page', () => {
  it('Should show an error message when a dog breed can/t be fetched', () => {
    cy.intercept('GET', 'https://dog.ceo/api/breed/labrador/images', {
      statusCode: 404,  
    })
    cy.visit('https://museum-explorer.vercel.app/dogexhibits')
    cy.get('#labrador > img').click()
    cy.get('.error-message').contains('Sorry there was a 404 error please try again')
  })
})