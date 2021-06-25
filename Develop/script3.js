var userInput
var totalChar
var passwordLength
var userNumbers
var userLowercase
var userUppercase
var userSpecial
var lower=("abcdefghijklmnopqrstuvwxyz")
var upper=("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var numbers=("1234567890")
var special=(" !$%&'()*+,-./:;<=>?@[\]^_`{|}~#")

function userLength() { 
    userInput = prompt("how many characters would you like in your password? (must be between 8-128");
    console.log(userInput);
    
    
    if (Number(userInput) - parseInt(userInput) !==0) {
        alert("please enter a number between 8-128")
    }

    else if (Number(userInput) >= 129 || Number(userInput)<= 7 ) {
        alert("please enter a number between 8-128")
    }

    else {
        passwordLength = (Number(userInput));
        userUppercase=confirm("would you like to have UpperCase letters?") 
    };
        
    if (userUppercase) {
        totalChar = lower.concat(upper);
        userNumbers=confirm("would you like to have numbers?");
        console.log(totalChar);
    }
    
    else {
        totalChar = lower;
        userNumbers=confirm("would you like to have numbers?");
        console.log(totalChar)
    };
    
    if (userNumbers) {
        totalChar = totalChar.concat(numbers);
        userSpecial=confirm("would you like to have special characters");
        console.log(totalChar);
    }
    
    else {
        totalChar = totalChar;
        userSpecial=confirm("would you like to have special characters");
        console.log(totalChar)
    };

    if ()
}
    
    



//         userNumbers=confirm("would you like to have numbers?");

//     userSpecial=confirm("would you like to have special charaters?");
// }