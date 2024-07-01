const passwordBox = document.getElementById("password")
const length = 12;


const upperCaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols =  '!@#$%^&*()_+[]{}|;:,.<>?'
const allCharacters = upperCaseletters + lowercaseLetters + numbers + symbols;

function randomPassword (){

    let password = '';

    password += upperCaseletters[Math.floor(Math.random() * upperCaseletters.length)];
    password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    
    while (length > password.length){
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];

}

passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    showToast();
}

function showToast(){
    const toast = document.getElementById("toast")
    toast.className = "show"
    setTimeout(() => {
        toast.className = toast.className.replace("show", "")
    }, 2500)
}
