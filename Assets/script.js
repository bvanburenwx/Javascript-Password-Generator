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

// function to generate password
function generatePassword() {
  okKey = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters"))
  
}