// Assignment code here
var characterLength = function() {
  var characters = window.prompt("Please choose the length of your password from 8 to 125");
  //to stop someone from using anything but numbers
  if (!characters) {
    window.alert("Please choose a NUMBER from 8 to 125!");
    return characterLength();
  }
  characters = parseInt(characters);
}
var lowerCase
var upperCase
var numeric
var symbols


//function to generate password
var generatePassword = function () {
}
//converts number to its ascii associate string
String.fromCharCode();

//function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(characterLength, lowerCase, upperCase, numeric, symbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
