// Assignment code here

//function to generate a random numeric value
// var randomNumber = function(min, max) {
//   var value = Math.floor(Math.random() * (max - min + 1) + min);

//   return value;
// };

//function to generate password
var generatePassword = function () {
  //asks for password length
  var characterLength = function() {
    var characters = "";
    while (characters === "" || characters === null) {
      characters = window.prompt("Please choose the length of your password from 8 to 125");
    }
    characters = parseInt(characters);
    if (characters >= 8 && characters <= 125) {
      console.log(characters);
      return characters;
    }
    if (characters < 8 || characters > 125) {
      window.alert("Number must be from 8 to 125. Try again.");
      characterLength();
    }
    //to stop someone from using anything but numbers
  }

  var lowCaseConfirm =window.confirm("Do you want your password to have lower case letters in it?");
  if (lowCaseConfirm) {
    console.log("Yes they want lower case letters");
  }
  else {
    console.log("Ok you don't want lower case");
  }
  var UpCaseConfirm =window.confirm("Do you want your password to have upper case letters in it?");
  if (UpCaseConfirm) {
    console.log("Yes they want upper case letters");
  }
  else {
    console.log("Ok you don't want upper case");
  }
  var numberConfirm =window.confirm("Do you want your password to have numbers in it?");
  if (numberConfirm) {
    console.log("Yes they want numbers");
  }
  else {
    console.log("Ok you don't want numbers");
  }
  var symbolConfirm =window.confirm("Do you want your password to have symbols in it?");
  if (symbolConfirm) {
    console.log("Yes they want symbols");
  }
  else {
    console.log("Ok you don't want symbols");
  }
  characterLength();
}

//new password method
// var newWord = {
//   passLength: characterLength(),
  // lowCase:,
  // upCase:,
  // numeric:,
  // special:,
// }

//converts number to its ascii associate string
// String.fromCharCode();

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
