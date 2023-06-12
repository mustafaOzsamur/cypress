class CustomCommandsLogin {
  

    get usernameField(){
     return cy.get('input[data-qa="login-email"]')   
    }

    get passwordField(){
        return cy.get('input[data-qa="login-password"]')  
       }

    get loginBtn(){
        return cy.get('button[data-qa="login-button"]') 
       }

    get signupBtn(){
        return cy.get('a[href="/login"]')
    }

}

export default new CustomCommandsLogin()