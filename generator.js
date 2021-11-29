// Declare variables
const output = document.querySelector('.pwbox .output');
const copy = document.getElementById('copy');
const passwordLength = document.getElementById('passLength');
const upperCase = document.getElementById('upperCase');
const lowerCase = document.getElementById('lowerCase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');

// Strings for letters, nums, symbols
let symbolStr = '_)$*%^!=-/<>(#|@\)=&_)$*%^!=-/<>(#|@\)=&';
let upperCaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCaseStr = 'abcdefghijklmnopqrstuvwxyz';
let numbersStr = '065496281376205947138';

// Event listener
generate.addEventListener('click', () => {
    // The works! Uppercase, lowercase, numbers, and symbols in a random order.
    if (upperCase.checked && lowerCase.checked && symbols.checked && numbers.checked) {
        let random = Math.floor(Math.random() * 10);
        let randomStr = 'K@Eio3a1X9BWrNx(hI!u&Syp-bTM0*jqdtZ7GC#n$AQOfvUV)D2R%sweLc^Fg8m6Jk5PlzH4Y';
        output.value = randomStr.slice(random, random + +passwordLength.value);
    }
    // Uppercase, lowercase, numbers, no symbols.
    else if (upperCase.checked && lowerCase.checked && numbers.checked) {
        let random = Math.floor(Math.random() * 10);
        let randomStr = 'KEio3a1X9BWrNxhIuSypbTM0jqdtZ7GCnAQOfvUVD2RsweLcFg8m6Jk5PlzH4Y';
        output.value = randomStr.slice(random, random + +passwordLength.value);
    }
    // Symbols, numbers, lowercase. No uppercase.
    else if (symbols.checked && numbers.checked && lowerCase.checked) {
        let random = Math.floor(Math.random() * 10);
        let randomStr = '@io3a19rx(h!u&yp-b0*jqdt7#n$fv)2%swec^g8m6k5lz4';
        output.value = randomStr.slice(random, random + +passwordLength.value);
    }
    // Uppercase, lowercase, symbols. No numbers.
    else if (upperCase.checked && lowerCase.checked && symbols.checked) {
        let random = Math.floor(Math.random() * 10);
        let randomStr = 'K@EioOaXBWrNx(hI!u&Syp-bTM*jqdtZGC#n$AQfvUV)DR%sweLc^FgmJkPlzHY';
        output.value = randomStr.slice(random, random + +passwordLength.value);
    }
    // Uppercase and lowercase letters only.
    else if (upperCase.checked && lowerCase.checked) {
        let random = Math.floor(Math.random() * 10);
        let randomStr = 'KEioaXBWrNxhIuSypbTMjqdtZGCnAQfvUVDRsweLcFgmJkPlzHY';
        output.value = randomStr.slice(random, random + +passwordLength.value);
    }
    // Symbols and numbers. No letters.
    else if (symbols.checked && numbers.checked) {
        let random = Math.floor(Math.random() * 10);
        let randomStr = '@319(!&-#$)2%^8654';
        output.value = randomStr.slice(random, random + +passwordLength.value);
    }
    // Uppercase letters only.
    else if (upperCase.checked) {
        let random = Math.floor(Math.random() * 10);
        output.value = upperCaseStr.slice(random, random + +passwordLength.value);
    }
    // Lowercase letters only.
    else if (lowerCase.checked) {
        let random = Math.floor(Math.random() * 10);
        output.value = lowerCaseStr.slice(random, random + +passwordLength.value);
    }
    // Numbers only.
    else if (numbers.checked) {
        let random = Math.floor(Math.random() * 5);
        output.value = numbersStr.slice(random, random + +passwordLength.value);
    }
    // Symbols only.
    else if (symbols.checked) {
        let random = Math.floor(Math.random() * 5);
        output.value = symbolStr.slice(random, random + +passwordLength.value);
    }
});

// Function to copy text.
function copyPW() {
    output.select();
    output.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Text has been copied to the clipboard.");
}
