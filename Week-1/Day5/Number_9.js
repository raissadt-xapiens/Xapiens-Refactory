/* With Crypto-JS */
var CryptoJS = require("crypto-js");

var md5Hash = CryptoJS.MD5('secret');
var sha1Hash = CryptoJS.SHA1('secret');
var sha256Hash = CryptoJS.SHA256('secret');
var sha512Hash = CryptoJS.SHA512('secret');

console.log(md5Hash.toString());
console.log(sha1Hash.toString());
console.log(sha256Hash.toString());
console.log(sha512Hash.toString());