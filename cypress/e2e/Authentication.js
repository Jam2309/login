import AuthenticationPage from "../PageObjects/AuthenticationObject"
import LoginData from "../../TestData/TestData"

describe('Login Page Test', () => {
    it('Login with valid account', () => {
        AuthenticationPage.openLoginPage()
        AuthenticationPage.LoginwithValidAcount(LoginData.ValidAccount.Username, LoginData.ValidAccount.Password)

    })
})