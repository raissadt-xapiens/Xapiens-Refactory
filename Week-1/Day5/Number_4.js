var str = "saya ingin makan nasi goreng";
console.log(str.split(/\s/).reverse().join(" "));


var str = "saya ingin makan nasi goreng";
var arr = str.split(" ");
arr.reverse();
str = arr.join(" ");