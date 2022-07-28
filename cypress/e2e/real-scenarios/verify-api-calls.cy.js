describe('Back-end - Verify API Calls', () => {
    const apisUrl = 'https://wines-api.herokuapp.com/api'

    it('GET All Comments', () => {
        cy.request(apisUrl+'/comments').as('comments')
        cy.get('@comments').then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('count')
        })
    })

    it('GET All Likes', () => {
        cy.request(apisUrl+'/likes').as('likes')
        cy.get('@likes').then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('count')
        })
    })

    it('GET All Regions', () => {
        cy.fixture('regions.json').then((regions) => {
            cy.request(apisUrl+'/regions')
              .its('body')
              .should('deep.equal', regions)
          })
    })

    it('GET Wines By Id', () => {
        let normandie
        cy.readFile('./cypress/fixtures/normandie.json').then( function (el){
            normandie = el
        }).then(()=>{
            cy.request(apisUrl+'/wines/'+normandie.id)
            .its('body')
            .should('deep.equal', normandie)
        })
    })

    it('GET Wines By Region', () => {
        cy.fixture('bordeaux.json').then((bordeaux) => {
            cy.request(apisUrl+'/wines?region=Bordeaux')
              .its('body')
              .should('deep.equal', bordeaux)
          })
    })

})