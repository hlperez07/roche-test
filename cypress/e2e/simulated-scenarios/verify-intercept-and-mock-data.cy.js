describe('UI - Intercept an Empty region and mock the data', () => {
    var myMockdata

    beforeEach(()=>{
      cy.visitMainPage()
      cy.readFile('./cypress/fixtures/my-mock-region.json').then( function (mockdata){
        myMockdata = mockdata
    })
    })
  
    it('Click in an empty region and verify the mock data', () => {
        const apisUrl = 'https://wines-api.herokuapp.com/api'
        cy.intercept(apisUrl+'/wines?region=Languedoc', { fixture: 'my-mock-region.json' })
        cy.contains('Languedoc').click()
        // verify the mock data
        cy.contains(myMockdata[0].name).should('be.visible')
        cy.contains(myMockdata[0].type).should('be.visible')
        cy.contains(myMockdata[0].appellation.name).should('be.visible')
        cy.contains(myMockdata[0].appellation.region).should('be.visible')
        cy.contains(myMockdata[0].grapes[0]).should('be.visible')
        cy.contains(myMockdata[0].grapes[1]).should('be.visible')
    })
  })