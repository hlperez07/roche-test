describe('UI - Create a comment and Intercept it', () => {
    var myMockdata

    beforeEach(()=>{
      cy.visitMainPage()
      cy.readFile('./cypress/fixtures/my-mock-comment.json').then( function (mockdata){
        myMockdata = mockdata
    })
    })

    // WIP - Need to check the intercept method in order to stub the response
    it.skip('Create a comment as a visitor', () => {
        // Write a Comment
        cy.get('.card-action').contains('Comment ').should('be.visible').click()
        cy.get('.modal-content').should('be.visible')
        const fakeNow = new Date().valueOf();
        const comment = 'comment thought cypress' + fakeNow
        cy.get('#inputComment').type(comment)
        cy.get('.modal-footer').contains('Submit').click()
        // Intercept POST - Comment
        const apisUrl = 'https://wines-api.herokuapp.com/api'
        cy.intercept('POST', apisUrl+'/wines/chevrol-bel-air/comments', (req) =>{
            req.continue((res) => {
                  // sends a fixture body instead of the existing 'res.body'
                  cy.log(res)
                  res.send({ fixture: 'my-mock-comment.json' })
              })
        })
        //cy.contains(myMockdata.content).should('be.visible')
        cy.contains(comment).should('not.exist')
    })
  })