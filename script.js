// Assignment Code + global variable init
var generateBtn = document.querySelector("#generate");

var alphabetLowercase = "qwertyuiopasdfghjklzxcvbnm";
var numbers = "1234567890";
var specialChars = "~`!@#$%^&*()-_=+[]{}\|;:,<.>/?"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // generates a random password based on previous user inputs including:
  // 1) length of password (8-128)
  // 2) whether the password should contain lowercase, uppercase, numeric and/or special characters

  var passLength = parseInt(prompt('Enter desired password length (can be no less than 8 and no more than 128 characters):'));
  // ensure pass length is between 8 and 128 characters
  while (passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt('Please ensure desired length is no less than 8 and no more than 128 characters.'));
  }

  // use a do/while loop to make sure Option variables are initialized at least once -- if all false, keep asking
  do {
    var includeLower = confirm("Please confirm whether you'd like to include lowercase characters in your password.");
    var includeUpper = confirm("Please confirm whether you'd like to include uppercase characters in your password.");
    var includeNum = confirm("Please confirm whether you'd like to include numeric characters in your password.");
    var includeSpecial = confirm("Please confirm whether you'd like to include special characters in your password.");

    if (includeLower === false && includeUpper === false && includeNum === false && includeSpecial === false) {
      alert("At least one character type needs to be selected!")
    }
  } while (includeLower === false && includeUpper === false && includeNum === false && includeSpecial === false);
  var optionsArray = [includeLower, includeUpper, includeNum, includeSpecial];
  var optionsTicked = [];

  // Match the ticked options with a number 0-4...
  // includeLower = 0
  // includeUpper = 1
  // includeNum = 2
  // includeSpecial = 3
  // This way the unique number can be used to determine character type later
  for (var i=0; i<4; i++) {
    if (optionsArray[i] === true) {
      optionsTicked.push(i);
    }
  }

  
  // initialize, generate, and populate the generated password
  var generatedPassword = [];
  for (i=0; i<passLength; i++) {
    // select a random character type from the list of ticked options
    var charType = optionsTicked[Math.floor(Math.random() * optionsTicked.length)];

    // get random number and choose character type accordingly... 
    if (charType === 0) {
      var currentChar = alphabetLowercase[Math.floor(Math.random() * alphabetLowercase.length)];
    } else if (charType === 1) {
      var currentChar = alphabetLowercase[Math.floor(Math.random() * alphabetLowercase.length)].toUpperCase();
    } else if (charType === 2) {
      var currentChar = numbers[Math.floor(Math.random() * numbers.length)];
    } else {
      var currentChar = specialChars[Math.floor(Math.random() * specialChars.length)];
    }

    generatedPassword.push(currentChar)
  }

  // convert password array to a string using .join()
  generatedPassword = generatedPassword.join("");
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);