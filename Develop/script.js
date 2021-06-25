// Variables
var password
var randomChar
var userInput
var totalChar
var finalChar
var passwordLength
var userNumbers
var userLowercase
var userUppercase
var userSpecial
var lower=("abcdefghijklmnopqrstuvwxyz")
var upper=("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var numbers=("1234567890")
var special=(" !$%&'()*+,-./:;<=>?@[\]^_`{|}~#")


// function started by a button click
function userLength() { 
  userInput = prompt("how many characters would you like in your password? (must be between 8-128");
  console.log(userInput);

//method to check if integer between 8-128 was inputted
if (Number(userInput) - parseInt(userInput) !==0) {
    alert("please enter a number between 8-128")
    return
}

else if (Number(userInput) >= 129 || Number(userInput)<= 7 ) {
    alert("please enter a whole number between 8-128")
    return
}

}