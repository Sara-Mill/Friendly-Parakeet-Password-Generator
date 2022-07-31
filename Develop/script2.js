// Generator Functions
//DOM elements
var resultEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');
var clipboardEl = document.getElementById('clipboard');

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Get Lowercase Letter from charcodes 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
// Gets Random Uppercase Letter from charcodes
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
// Gets Random number from charcodes
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
// Gets Random symbol from list
function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]+<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol(0, length));

// Generate Password click event whether boxes are checked or not
generateEl.addEventListener('click', () => {
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;
// Put final password into result box
resultEl.innertext = generatePassword
(hasLower,
  hasUpper,
  hasNumber,
  hasSymbol,
  length);
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  // Initiate password variable
  let generatedPassword = "";

  // Filter out unchecked boxes
  var typesCount = lower + upper + number + symbol;
  // How many checkedboxes are checked?
  console.log('typesCount:', typesCount);
}