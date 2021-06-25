var passwordLength
var userNumbers
var userLowercase
var userUppercase
var userSpecial
var lowercase = ("abcdefghijklmnopqrstuvwxyz");
var uppercase= ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numbers= ("1234567890");
// var special= (" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
var pressed = document.querySelector("#generate")


function userLength () { 
    passwordLength = prompt("how many characters would you like in your password? (must be between 8-128");
    console.log(passwordLength);
    return passwordLength;
}

function wantNumbers() {
    if (passwordLength >=8 && passwordLength<=128 );{
    userNumbers = confirm("would you like numbers in your password?"); 
        }
    else {
        altert("please pick a number between 8-128")
    }
}

pressed.addEventListener("click", userLength)