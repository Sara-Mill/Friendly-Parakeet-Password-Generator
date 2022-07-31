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
generatePassword();

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
//The id attribut defines the HTML element.  The innerHTML property defines the HTML content.

// To make the outcome random:
var randomNumber = Math.floor(Math.random() * characters.length);
 

//To call the function
    document.getElementById("password").value = password;


//Use query Selectors to replace text inside box with the new password
var generateBtn = document.querySelector("#generate");



//Make a password from random variables
function generatePassword() {

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
