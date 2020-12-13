// Assignment code here

document.querySelector("#generate").addEventListener("click", writePassword);

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "+", "=", "?", "/", "<", ">"];
var alphaLower = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p" , "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P" , "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt to confirm how many characters the user would like in their password

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
   

  let randomPassword = '';
  let passwordCharacters = [];

  //console.log(confirmLength);
  //console.log(confirmSpecialCharacter);
  //console.log(confirmNumericCharacter);
  //console.log(confirmUpperCase);
  //console.log(confirmLowerCase);

// if special, numeric, lower and upper are chosen
if (confirmSpecialCharacter === true && confirmNumericCharacter === true && confirmLowerCase === true && confirmUpperCase === True) {
  for (var i = 0; i <confirmLength; i++) {

    Password = Password + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)];
  }

  console.log(password)
  
}

// if numeric, lower and upper chosen but no special
else if (confirmSpecialCharacter != true && confirmNumericCharacter === true && confirmLowerCase === true && confirmUpperCase === True) {
  for (var i = 0; i <confirmLength; i++) {

    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)];
  }

  console.log(password)
  
}

// if no special no numeric, but lower and upper are chosen
else if (confirmSpecialCharacter != true && confirmNumericCharacter != true && confirmLowerCase === true && confirmUpperCase === True) {
  for (var i = 0; i <confirmLength; i++) {

    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)];
  }

  console.log(password)
  
}

// if no special no numeric, and no lower but upper are chosen
else if (confirmSpecialCharacter != true && confirmNumericCharacter != true && confirmLowerCase != true && confirmUpperCase === True) {
  for (var i = 0; i <confirmLength; i++) {

    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)];
  }

  console.log(password)

}

// if special but no numeric, no lower and no upper are chosen
else if (confirmSpecialCharacter === true && confirmNumericCharacter != true && confirmLowerCase != true && confirmUpperCase != True) {
  for (var i = 0; i <confirmLength; i++) {

    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)];
  }

  console.log(password)

}

// if special and numeric, but no lower and no upper are chosen
else if (confirmSpecialCharacter === true && confirmNumericCharacter === true && confirmLowerCase != true && confirmUpperCase != True) {
  for (var i = 0; i <confirmLength; i++) {

    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)];
  }

  console.log(password)

}

// if special numeric and lower but no upper are chosen
else if (confirmSpecialCharacter === true && confirmNumericCharacter === true && confirmLowerCase === true && confirmUpperCase != True) {
  for (var i = 0; i <confirmLength; i++) {

    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)];
  }

  console.log(password)

}

// if no special and no upper but numeric and lower are chosen
else if (confirmSpecialCharacter != true && confirmNumericCharacter === true && confirmLowerCase === true && confirmUpperCase != True) {
  for (var i = 0; i <confirmLength; i++) {

    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)];
  }

  console.log(password)

}

// if no special no upper no lower but numeric are chosen
else if (confirmSpecialCharacter != true && confirmNumericCharacter === true && confirmLowerCase != true && confirmUpperCase != True) {
  for (var i = 0; i <confirmLength; i++) {

    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)];
  }

  console.log(password)

}

// if numeric and upper but no lower and special are chosen
else if (confirmSpecialCharacter != true && confirmNumericCharacter === true && confirmLowerCase != true && confirmUpperCase === True) {
  for (var i = 0; i <confirmLength; i++) {

    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)];
  }

  console.log(password)

}

// if lower but no numeric upper and special are chosen
else if (confirmSpecialCharacter != true && confirmNumericCharacter != true && confirmLowerCase === true && confirmUpperCase != True) {
  for (var i = 0; i <confirmLength; i++) {

    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)];
  }

  console.log(password)

}

// if lower and speical but no numeric or upper are chosen
else if (confirmSpecialCharacter === true && confirmNumericCharacter != true && confirmLowerCase === true && confirmUpperCase != True) {
  for (var i = 0; i <confirmLength; i++) {

    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)];
  }

  console.log(password)

}

  return password;
}


  









