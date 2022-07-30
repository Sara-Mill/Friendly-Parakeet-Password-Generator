// Assignment code here

// Array of options for computer to pick from
var options = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*"];
var length = 10;

var playGame = function() {
  // Ask user for their choice
  var userChoice = window.prompt("Enter R, P, or S:");
}

// Convert to to lowercasecae to make comparisons easier
userChoice = userChoice.toLowerCase();

//Get random index from array of options
var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function querySelector("#generate");
  function arrayFromLowToHigh(low, high); {
    var array = [];
    for (let i = low; i <=high; i++); {
      array.push(i);
    }
    return array;
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    for (var i=0; i<=passwordLength; i++) {
    var index = Math.floor(math.random() * options.length);
  
  return;
    }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  function writePassword() {
    var array( low, high) {
      var array = []
      for let i=low;i<=high; i++){
        array.push(i)
    
    return
    }
    }


  }