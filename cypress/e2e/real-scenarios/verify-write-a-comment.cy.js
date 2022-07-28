describe('UI - Create a comment', () => {

  beforeEach(()=>{
    cy.visitMainPage()
  })

  it('Create a comment as a visitor', () => {
    cy.writeAComment()
  })
})