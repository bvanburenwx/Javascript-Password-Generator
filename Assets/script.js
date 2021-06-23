// Assignment Code

var generateBtn = document.querySelector("#generate");
var allChoices = "";
var lowerCase = "qwertyuioplkjhgfdsazxcvbnm"
var upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM"
var numberChoices = "1234567890"
var symbolChoices = "!#$%&()*+,-./:;<=>?@[]^_`{|}~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to generate password
function generatePassword() {
var actualPassword = ""
var enteredValue = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters"))
// if else statement used to prompt that a value must be between 8-128 characters. 
  if (!enteredValue) {
    alert("You must select a value");
  } else if (enteredValue < 8 || enteredValue > 128) {
// prompt used to let user know that the character they choose must be between 8 and 128.
  enteredValue = parseInt(prompt("Your choice must be between 8 and 128"));
  } 
    // using a confirm prompt to decide if user wants uppercase letters as a part of password
    var capitalLetters = window.confirm("Would you like uppercase letters?")
    
    // using a confirm prompt to decide if user wants lowercase letters as a part of password
    var lowerCaseLetters = window.confirm("Would you like lowercase letters?")
    
    // using a confirm prompt to decide if user wants numbers as a part of password
    var numbers = window.confirm("Would you like numbers?")
   
    // using a confirm prompt to decide if user wants symbols as a part of password
    var symbols = window.confirm("Would you like symbols?")
    
    // series of if statements that combines a string into an emtpy string if the variable is true
    if (capitalLetters === true) {
      allChoices += upperCase;
    } 
    if (lowerCaseLetters === true) {
        allChoices += lowerCase;
    }    
    if (numbers === true) {
          allChoices += numberChoices;
    }
    if (symbols === true) {
            allChoices += symbolChoices;
    }

    // A for loop to make sure that once all of the statements are true they produce the right amount of characters.
    for (var i = 0; i < enteredValue; i++) {
        var pass = Math.floor(Math.random() * allChoices.length);

      // continues to concatinate random characters from the string until the desired number of characters is reached. 
        actualPassword += allChoices.charAt(pass);
        console.log(actualPassword.length)
    }
    return actualPassword; 
    
}