// Assignment code here

//function to generate a random value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

//function to generate a random lower case letter
var lowCaseGen = function () {
  var lowCaseLetter = String.fromCharCode(randomNumber(97, 122));
  return lowCaseLetter;
}

//function to generate a random upper case letter
var upCaseGen = function () {
  var upCaseLetter = String.fromCharCode(randomNumber(65, 90));
  return upCaseLetter;
}

//function to generate a random numeric
var numGen = function () {
  var num = String.fromCharCode(randomNumber(48, 57));
  return num;
}

//function to generate a random special character
var specialGen = function () {
  var coinFlip = Math.random();
  if (coinFlip < 0.5) {
    var specialChar = String.fromCharCode(randomNumber(33, 47));
    return specialChar;
  } else{
    var specialChar = String.fromCharCode(randomNumber(58, 64));
    return specialChar;
  }
}

//new password method
var newWord = {
  lowCase: lowCaseGen(),
  upCase: upCaseGen(),
  numeric: numGen(),
  special: specialGen()
}


//function to generate password
var generatePassword = function () {
  var newPassword = [];

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

  characterLength();

  //checks if they want their password to contain lowercase, uppercase, numeric and special characters
  var lowCaseConfirm = window.confirm("Do you want your password to have lower case letters in it?");
  var upCaseConfirm = window.confirm("Do you want your password to have upper case letters in it?");
  var numberConfirm = window.confirm("Do you want your password to have numbers in it?");
  var symbolConfirm = window.confirm("Do you want your password to have symbols in it?");

  var charConfirm = function () {
    for (var i = 0; i < characterLength;) {
      //confirms and adds lowercase letters to the password
      if (lowCaseConfirm) {
        console.log("Yes they want lower case letters");
        newWord.lowCase();
        newPassword.push(newWord.lowCase);
        i++;
      }

      //confirms and adds uppercase letters to the password
      if (upCaseConfirm) {
        console.log("Yes they want upper case letters");
        newWord.upCase();
        newPassword.push(newWord.upCase);
        i++;
      }

      //confirms and adds numbers to the password
      if (numberConfirm) {
        console.log("Yes they want numbers");
        newWord.numeric();
        newPassword.push(newWord.numeric);
        i++;
      }

      //confirms and adds symbols/special characters to the password
      if (symbolConfirm) {
        console.log("Yes they want symbols");
        newWord.special();
        newPassword.push(newWord.special);
        i++;
      }

      //makes sure that they at least pick one character type
      if (!lowCaseConfirm && !upCaseConfirm && !numberConfirm && !symbolConfirm) {
        alert("You must pick at least one of them for your new password to be generated");
        charConfirm();
      }
    }
    alert(JSON.stringify(newPassword));
  };

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
