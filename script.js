// Assignment code here

document.querySelector("#generate").addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");

var numericChar = "1234567890";
var specialChar = "!@#$%&*+=?/<>";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Empty Strings

var resultPassword = "";
var userPassword = [];

// Prompt to confirm how many/type characters the user would like in their password
function generatePassword() {
  var confirmLength = parseInt(prompt("How many characters would you like your password to contain?"));
 
  while(confirmLength < 8 || confirmLength > 128 || isNaN(confirmLength)) {
    alert("Password length must be between 8-128 characters Try again");
    confirmLength = parseInt(prompt("How many characters would you like your password to contain?"));

  }
  
  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");  

  //If statements for concatenation

  if (confirmNumericCharacter) {
      resultPassword = resultPassword.concat(numericChar)
    }

  if (confirmSpecialCharacter) {
      resultPassword = resultPassword.concat(specialChar)
    }

  if (confirmLowerCase) {
      resultPassword = resultPassword.concat(alphaLower)
    }

  if (confirmUpperCase) {
      resultPassword = resultPassword.concat(alphaUpper)
    }

    console.log(resultPassword)
    console.log(resultPassword[17])


  for (var i = 0; i < confirmLength; i++) {
    userPassword.push (resultPassword[Math.floor(Math.random() * resultPassword.length)]);
  }

    return userPassword.join("") ;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
