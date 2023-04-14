describe('Single Breed Page', () => {
  it('Should be able to click any exhibit card to be taken to that page', () => {
    cy.visit('http://localhost:3000/dogexhibits')
    cy.get('#bulldog > img').click()
    cy.intercept('GET', 'https://dog.ceo/api/breed/bulldog/images', {
      statusCode: 200, 
      fixture:  singleExhibitBreeds.json,
    })
  })
  
  it('Should have the name of a dog breed', () => {
 
  })
})