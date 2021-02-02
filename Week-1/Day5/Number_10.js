/* With Crypto-JS */
var CryptoJS = require("crypto-js");

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'p4$$w0rd').toString();

// Decrypt
var bytes = CryptoJS.AES.decrypt(ciphertext, 'p4$$w0rd');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'ini rahasia'




/* Without Crypto-JS */
const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
}

const decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
}

const myCipher = cipher('mySecretSalt')
myCipher('the secret string');
const myDecipher = decipher('mySecretSalt')
myDecipher("7c606d287b6d6b7a6d7c287b7c7a61666f");