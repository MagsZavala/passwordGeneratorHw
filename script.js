// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';


//Function to generate a random password
function generatePassword() {
   
    let length = parseInt(prompt("Enter the desired length of the password (8-128 characters):"));
  
    while (isNaN(length) || length < 8 || length > 128) {
        alert("Password length must be a number between 8 and 128.");
        length = parseInt(prompt("Enter the desired length of the password (8-128 characters):"));
    }
    
    
    function askForCriteria(message) {
        let response = prompt(message + " (yes or no)").toLowerCase();
        while (response !== 'yes' && response !== 'no') {
            alert("Please enter 'yes' or 'no'.");
            response = prompt(message + " (yes or no)").toLowerCase();
        }
        return response === 'yes';
    }
    
    // Confirm character types to include in the password
    let includeUpperCase = askForCriteria("Include uppercase letters?");
    let includeLowerCase = askForCriteria("Include lowercase letters?");
    let includeNumbers = askForCriteria("Include numeric characters?");
    let includeSpecialCharacters = askForCriteria("Include special characters?");
    
    while (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSpecialCharacters) {
        alert("You must select at least one character type.");
        includeUpperCase = askForCriteria("Include uppercase letters?");
        includeLowerCase = askForCriteria("Include lowercase letters?");
        includeNumbers = askForCriteria("Include numeric characters?");
        includeSpecialCharacters = askForCriteria("Include special characters?");
    }
    
    let characterSet = '';
    if (includeUpperCase) characterSet += upperCaseLetters;
    if (includeLowerCase) characterSet += lowerCaseLetters;
    if (includeNumbers) characterSet += numbers;
    if (includeSpecialCharacters) characterSet += specialCharacters;
    
  
    let password = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }
    
    return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

