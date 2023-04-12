describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://dog.ceo/api/breeds/image/random', {
      statusCode: 200,  
      fixture: "randomDog.json"
    })
    cy.visit('http://localhost:3000')
  })
  
  it('Home page should have a title', () => {
    cy.get('h1').contains('Night at the Dawg Museum')
  })

  it('Should have navigation buttons', () => {
    cy.get('.nav-btn').contains('Home')
    cy.get('.nav-btn').contains('Choose Your Dog Breed')
    cy.get('.nav-btn').contains('Favorite Dogs')

  })

  it('Should welcome the user', () => {
    cy.get('h2').contains('Welcome Dawgs')
    cy.get('p').contains('about us goes here')
  })

  it('Should display a picture of a random dog', () => {
    cy.get('.get-random').find('.random-dog').should('have.attr', 'src').should('eq', 'https://images.dog.ceo/breeds/pointer-german/n02100236_3836.jpg')
    cy.get('.get-random').find('button').contains('Get Random Dog!')
  })

  it('Should get a new random dog when the button is pressed', () => {
    cy.intercept('GET', 'https://dog.ceo/api/breeds/image/random', {
      statusCode: 200,  
      fixture: "getRandomDog.json"
    })
    cy.get('.get-random').find('.random-dog').should('have.attr', 'src').should('eq', 'https://images.dog.ceo/breeds/germanshepherd/n02106662_12969.jpg')
    cy.get('.get-random').find('button').contains('Get Random Dog!')
  })

  it('Should show an error message when random dog can/t be fetched', () => {
    cy.intercept('GET', 'https://dog.ceo/api/breeds/image/random', {
      statusCode: 404,  
    })
    cy.contains('There was a 404 error, please try again later.')
  })

})