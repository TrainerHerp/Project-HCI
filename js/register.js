/* Register */
let email = document.getElementById("email")
let username = document.getElementById("username")
let password = document.getElementById("password")
let confirm_password = document.getElementById("confirm-password")
let terms = document.getElementById("terms")

function validateEmail(email){
    let emailError = document.getElementById("email-error");
    if(email.length==0){
        emailError.innerHTML = "Input your email!"
        return false;
    }
    else if(email[0] == '.'||email[0] == '/'||email[0] == '_'||email[0] == '@'){
        emailError.innerHTML = "Invalid email!"
        return false;
    }
    else if(email.indexOf('@') == -1){
        emailError.innerHTML = "Invalid email!"
        return false;
    }
    else if(email[email.indexOf('@')-1] == '.'||email[email.indexOf('@')+1] == '.'){
        emailError.innerHTML = "Invalid email!"
        return false;
    }
    else if(email.endsWith(".com") == false && email.endsWith(".ac.id") == false){
        emailError.innerHTML = "Invalid email!"
        return false;
    }
    emailError.innerHTML = "";
    return true;
}

function validateUsername(username){
    if(username.length < 5){
        document.getElementById("username-error").innerHTML = 
        "Username must be at least 5 characters in length!";
        return false;
    }
    document.getElementById("username-error").innerHTML = "";
    return true;
}

function validatePassword(password){
    let check = false;
    for(let i = 0; i < password.length; i++){
        if(password[i] >= '0' && password[i] <= '9'){
            check = true;
            break;
        }
    }
    if(password.length < 8){
        document.getElementById("password-error").innerHTML = 
        "Password must be at least 8 characters in length!";
        return false;
    }
    else if(check == false){
        document.getElementById("password-error").innerHTML = 
        "Password must contain a number!";
        return false;
    }
    document.getElementById("password-error").innerHTML = "";
    return true;
}

function validateConfirmPassword(password, confirm_password){
    if(password != confirm_password){
        document.getElementById("confirm-password-error").innerHTML = 
        "Password doesn't match!";
        return false;
    }
    document.getElementById("confirm-password-error").innerHTML = "";
    return true;
}

function validateTerms(terms){
    if(terms.checked == false){
        document.getElementById("terms-error").innerHTML =
        "You must agree to the terms and conditions.";
        return false;
    }
    document.getElementById("terms-error").innerHTML = "";
    return true;
}

function submit(){
    if(validateEmail(email.value) &&
    validateUsername(username.value) &&
    validatePassword(password.value) &&
    validateConfirmPassword(password.value, confirm_password.value) &&
    validateTerms(terms)
    ){
        window.location.href = "../html/index.html";
        window.alert("Register Success!")
    }
}

/* Register End */
