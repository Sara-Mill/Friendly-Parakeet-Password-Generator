// Assignment code here
var characters = ["a","b","c","d","e","f","g"]

var planet = {
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion",
  // Objects can store arrays in a key-value pair
  neighboringPlanets: ["Mars", "Venus"],
// Objects can also store methods
tellFunFact: function () {
  console.log("The earth is the only planet in our solar system not named after a Roman god or goddess.");
},
showWarning: function () {
  console.log("Space junk falls into Earth's atmosphere at a rate of about one a day.");
}

}
//Array of options for computer to pick from
var options = ["a","b","c","d","e"];

//Get random index from array of options

var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];
 

//Make the Generate Password Function
function generatePassword() {

}

//Call the generate password function
//generatePassword();

//Document.write function prints computer's choice onto the webpage
document.write("The computer Chose " + computerChoice);


var password=("");
var passwordlength = 7;
 //We Use a for-loop to execute code more than once
for (var i = 0; i <= passwordlength; i++) {
  // This is the bloc of code that will run each time
  console.log("This is the current value of i: " + i + ".");
}

//For-loops are often used to iterate over arrays
var characters = ["a","b","c","d","e","f","g"];

//To determine how many times the loop should execute, we use the array's length
for (var i = 0; i<passwordlength; i ++) {
  console.log("I am going to the zoo to see " + characters[i] + ".");
}  


//Make a function
function declareHello() {
  console.log("Hello, I am a function declaration.");
  console.log("-----------------------------------");
  //return stops the excution of a function
  return;
}

// Functions must be called to execute
declareHello();

//Functions can take parameters
// Parameters give a name to the data to be passed into the function


function declareHelloAgain(a,b,c,d,e,f,g,h){
  console.log("Hello, my parameter's values are " + a + "," + b + " , " + c + " , " + d + " , " + e + " , " + f + "," + g + ",  and " + h);
  console.log("___________________________________");
  return;
}

//Function arguments give parameters their values
//Here the paramter a is given the value 7 when the function is called
declareHelloAgain(7,"Hello",true, "yes", "ha", "raw", "juicy", "nape");

//To access a value in an array, use the name of the object, the key and the index
//Logs "MArs"uisng bracket notation
console.log(planet["neighboringPlanets"][0]);
//To call a method, use the name of the object and the key.  Don't forget the ()!
planet.tellFunFact();
planet.showWarning();



// To access an HTML element, JavaScript can use the document.getElementById method
//The id attribute defines the HTML element.  The innerHTML property defines the HTML content.

// To make the outcome random:
var randomNumber = Math.floor(Math.random() * characters.length);
 

//To call the function
    document.getElementById("password").value = password;


//Use query Selectors to replace text inside box with the new password
var generateBtn = document.querySelector("#generate");

var characterAmountRange = document.getElementById ("characterAmountRange");
varcharacterAmountNumber = document.getElementById ("characterAmountNumber");
var includeUppercaseElement = document.getElementById ("includesUppercase");
var includeNumbersElement = document.getElementById ("includesNumbers");
var includesSymbolsElement = document.getElementById ("includesSymbols");
var form = document.getElementById("passwordGeneratorForm");
var passwordDisplay = document.getElementById("passwordDisplay");

//Determines which characters to choose from
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47);
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57);
characterAmount = 7;

// Signals to do something when hear submit button
characterAmountNumber.addEventListener("submit", syncCharacterAmount)
characterAmountRange.addEventListener("submit", syncCharacterAmount)
 

form.addEventListener("submit", e => {
  e.preventDefault()
  var characterAmount = characterAmountNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var includeNumbers = includeNumbersElement.checked
  var includeSymbols = includeSymbolsElement.checked
  var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innertext = password
})

//Make a password from random variables

var characterAmountRange = document.getElementById ("characterAmountRange")
var characterAmountNumber = document.getElementById ("characterAmountNumber")
var includeUppercaseElement = document.getElementById ("includesUppercase")
var includeNumbersElement = document.getElementById ("icludesNumbers")
var includeSymbolsElement = document.getElementById ("includesSymbols")
var form = document.getElementById("passwordGeneratorForm")
var passwordDisplay = document.getElementById("passwordDisplay")

// Fucntion to include all check boxes
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {

// Function to generate Password
let characterCodes = LOWERCASE_CHAR_CODES
if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

//Loop for all difererent Characters
var passwordCharacter = []
for (let i=0; i<characterAmount; i ++); {
  //Gets Random Character From List
  var charaterCode = chararactercodes[Math.floor(Math.random() * characterAmount)]
  passwordCharacters.push(String.fromCharacterCode(characterCode))
}
return passwordCharacters.join("")
} 


// Function to generate array
function arrayFromLowToHigh(low, high) {
  var array = []
  for(let i=low; i<high; i++) {
    array.push(i)
  }
  return array
}
// Function to link slider with input selector arrows
function syncCharacterAmount() {
  var value = e.target.value
  characterAmountNmber.value = value
  characterAmountRange.value = value
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  if (console.log(generatePassword)) {
}else {
  console.log("not yet");
}
  

  passwordText.value = password;
}
writePassword();
