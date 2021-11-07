// Assignment code here

//array for asccii character type. obtained from w3schools @ https://www.w3schools.com/charsets/ref_html_ascii.asp
var lowCaseChar = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
var upCaseChar = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
var numericChar = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
var specialChar = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 126];

//function to generate password
var generatePassword = function () {

  var newPassword = [];

  //asks for password length and ensures they can only put from 8 to 128.
  var characters = "";
  while (characters === "" || characters === null) {
    characters = window.prompt("Please choose the length of your password from 8 to 128");
  }
  characters = parseInt(characters);
  while (characters < 8 || characters > 128) {
    window.alert("Number must be from 8 to 128. Try again.");
    characters = window.prompt("Please choose the length of your password from 8 to 128");
  }

  //makes sure that they at least pick one character type
  while (!lowCaseConfirm && !upCaseConfirm && !numberConfirm && !symbolConfirm) {
    alert("You must pick at least ONE of character type for your new password to be generated");
    var lowCaseConfirm = window.confirm("Do you want your password to have lower case letters in it?");
    var upCaseConfirm = window.confirm("Do you want your password to have upper case letters in it?");
    var numberConfirm = window.confirm("Do you want your password to have numbers in it?");
    var symbolConfirm = window.confirm("Do you want your password to have symbols in it?");
  }

  var asciiArr = [];

  //confirms and adds lowercase letters to the total ascii character array
  if (lowCaseConfirm) {
    asciiArr = asciiArr.concat(lowCaseChar);
  }

  //confirms and adds uppercase letters to the total ascii character array
  if (upCaseConfirm) {
    asciiArr = asciiArr.concat(upCaseChar);
  }

  //confirms and adds numbers to the total ascii character array
  if (numberConfirm) {
    asciiArr = asciiArr.concat(numericChar);
  }

  //confirms and adds symbols/special characters to the total ascii character array
  if (symbolConfirm) {
    asciiArr = asciiArr.concat(specialChar);
  }

  //Generates new password based what was chosen
  for (var i = 0; i < characters; i++) {
    var genPassword = asciiArr[Math.floor(Math.random() * asciiArr.length)]
    newPassword.push(String.fromCharCode(genPassword));
  }
  return newPassword.join("");
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
