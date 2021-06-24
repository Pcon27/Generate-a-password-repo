//var password.Length=()
//var lowercase=("abcdefghijklmnopqrstuvwxyz")
//var uppercase=("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
//var numbers=("1234567890")
//var special=(" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")

// prompt password.Length=()

// if an integer between 8-128 continue, 
// other, continue. 

// promt: addUppercase=(true/false)

//if true. add uppercase to the new array


// prompt: addLowercase=(true/false)

//if true, add lowercase to the new array


// promt: addNumber=(true/false)

// if true, add number to the new array


// prompt: addSpecial=(true/false)

// if true, add special to the new array


//create random password string from existing string the length the user has promted. 



//define variables

var passwordLength
var userNumbers
var userLowercase
var userUppercase
var userSpecial
var lowercase = ("abcdefghijklmnopqrstuvwxyz")
var uppercase= ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var numbers= ("1234567890")
// var special= (" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")


function userLength () { 
  passwordLength = prompt("how many characters would you like in your password? (must be between 8-128");
  console.log(passwordLength)

    if (passwordLength >=8 && passwordLength<=128 );{
    userNumbers = confirm("would you like numbers in your password?") 
      }
      if (userNumbers === true); {
        userLowercase = confirm("would you like lower case in your password?") 
      }
      if (userLowercase === true); {
        userUpperrcase = confirm("would you like upper case in your password?") 
      }
      if (userUppercase === true); {
        userSpecial = confirm("would you like special characters in your password?") 
      }
}

function test (){
  prompt("hello")
  console.log("worked")
}


function wantNumbers() {
  if (passwordLength >=8 && passwordLength<=128 );{
  userNumbers = confirm("would you like numbers in your password?") 
    }
    console.log("yes")
}

function wantLowercase () {
  if (userNumbers === true); {
    userLowercase = confirm("would you like lower case in your password?") 
  }
}

function wantUppercase () {
  if (wantLowercase === true); {
    userLowercase = confirm("would you like upper case in your password?") 
  }
}

function wantSpecial () {
  if (userUppercase === true); {
    userSpecial = confirm("would you like special characters in your password?") 
  }
}

// wantNumbers();
// wantLowercase();
// wantUppercase();
// wantSpecial();


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
