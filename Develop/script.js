//var password.Length=()
//var lowercase=("abcdefghijklmnopqrstuvwxyz")
//var uppercase=("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
//var numbers=("1234567890")
//var special=(" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")

// prompt password.Length=()

// addUppercase=(true/false)

// addLowercase=(true/false)

// addNumber=(true/false)

// addSpecial=(true/false)




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
