describe("example test",() =>{

    it('Green',()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input[placeholder='Search for Vegetables and Fruits']").type("ca")
        cy.wait(2000)
        cy.get('.product').should('have.lenght',4)
    })
})