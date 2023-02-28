import Login from "../PageObjects/LoginPage1"
describe('Demo Test Login', ()=>{
    it('LoginTest', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
    })
///////using pom
    it.only('LoginTest', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.fixture('orangehrm').then((data)=>{
            const ln=new Login
        ln.setUserName(data.username)
        ln.setPassWord(data.password)
        ln.clickSubmit()
        ln.verifyLogin()
        })
        

    })

})