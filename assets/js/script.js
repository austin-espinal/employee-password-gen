// Assignment code here

//asks for password length
var characterLength = function () {
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

//function to generate a random value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

//function to generate a random lower case letter
var lowCaseGen = function () {
  var lowCaseLetter = String.fromCharCode(randomNumber(97, 122));
  console.log(lowCaseLetter);
}

//function to generate a random upper case letter
var upCaseGen = function () {
  var upCaseLetter = String.fromCharCode(randomNumber(65, 90));
  console.log(upCaseLetter);
}

//function to generate a random numeric
var numGen = function () {
  var num = String.fromCharCode(randomNumber(48, 57));
  console.log(num);
}

//function to generate a random special character
var specialGen = function () {
  var specialChar = String.fromCharCode(randomNumber(33, 47));
  console.log(specialChar);
}

//function to generate password
var generatePassword = function () {

  newWord.passLength();

  var charConfirm = function () {
    var lowCaseConfirm = window.confirm("Do you want your password to have lower case letters in it?");
    if (lowCaseConfirm) {
      console.log("Yes they want lower case letters");
    }
    else {
      console.log("Ok you don't want lower case");
    }
    var upCaseConfirm = window.confirm("Do you want your password to have upper case letters in it?");
    if (upCaseConfirm) {
      console.log("Yes they want upper case letters");
    }
    else {
      console.log("Ok you don't want upper case");
    }
    var numberConfirm = window.confirm("Do you want your password to have numbers in it?");
    if (numberConfirm) {
      console.log("Yes they want numbers");
    }
    else {
      console.log("Ok you don't want numbers");
    }
    var symbolConfirm = window.confirm("Do you want your password to have symbols in it?");
    if (symbolConfirm) {
      console.log("Yes they want symbols");
    }
    else {
      console.log("Ok you don't want symbols");
    }
    if (!lowCaseConfirm && !upCaseConfirm && !numberConfirm && !symbolConfirm) {
      alert("You must pick at least one of them for your new password to be generated");
    charConfirm();
    }
  };
  for (var i = 0; i < passLength; i++) {
  if (lowCaseConfirm) {
    newWord.lowCase();
  }
 }
}

//new password method
var newWord = {
  passLength: characterLength(),
  lowCase: lowCaseGen(),
  upCase: upCaseGen(),
  numeric: numGen(),
  special: specialGen()
}


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
