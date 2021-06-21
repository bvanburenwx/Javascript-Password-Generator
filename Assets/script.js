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
  enteredValue = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters"))

  if (!enteredValue) {
    alert("You must select a value");
  } else if (enteredValue < 8 || enteredValue > 128); {

    enteredValue = parseInt(prompt("Your choice must be between 8 and 128"));
  }

}
// creating a function using the numeric character code values to generate random lowercase letters
function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// creating a function using the numeric character code values to generate random uppercase letters
function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// creating a function using the numeric character code values to generate random numbers from 0-9
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(randomNumber());