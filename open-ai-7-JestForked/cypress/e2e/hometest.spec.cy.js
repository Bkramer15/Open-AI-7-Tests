// cypress/integration/home_spec.js

describe('Home Component', () => {
  beforeEach(() => {
  
    cy.visit('http://localhost:8000')
  })

  it('should display the logo', () => {
    cy.get('img[alt="lrnr-logo"]').should('be.visible')
  })

  it('should display the header text', () => {
    cy.contains('h5', 'Your guided path to programming enlightenment').should('be.visible')
  })

  it('should have a working Begin Journey button', () => {
    cy.get('#download-button').should('be.visible').click()
    // cy.url().should('include', 'materializecss.com/getting-started.html')
  })

  it('should display icon blocks with correct content', () => {
    // Check first icon block
    cy.get('.icon-block').eq(0).find('h2 i').should('have.text', 'flash_on')
    cy.get('.icon-block').eq(0).find('h5').should('contain.text', 'Personalized Quizzes')
    cy.get('.icon-block').eq(0).find('p').should('contain.text', 'Greetings, young padawan')

    // Check second icon block
    cy.get('.icon-block').eq(1).find('h2 i').should('have.text', 'payments')
    cy.get('.icon-block').eq(1).find('h5').should('contain.text', 'Rewarding')
    cy.get('.icon-block').eq(1).find('p').should('contain.text', 'Our app is designed to be both challenging and rewarding')

    // Check third icon block
    cy.get('.icon-block').eq(2).find('h2 i').should('have.text', 'person')
    cy.get('.icon-block').eq(2).find('h5').should('contain.text', 'Personal SME')
    cy.get('.icon-block').eq(2).find('p').should('contain.text', 'Welcome to the path of knowledge')
  })
})
