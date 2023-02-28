class Login
{
       txtUsename="input[placeholder='Username']"
       txtPassword="input[placeholder='Password']"
       btnsm="button[type='submit']"
       lbdb=".oxd-topbar-header-breadcrumb > .oxd-text"
   setUserName(Username)
   {
    cy.get(this.txtUsename).type(Username)
   }
   setPassWord(password)
   {
    cy.get(this.txtPassword).type(password)
   }
   clickSubmit()
   {
    cy.get(this.btnsm).click()

   }
   verifyLogin()
   {
    cy.get(this.lbdb).should('have.text','Dashboard')
   }

}

export default Login