var str = prompt("Input value");
console.log(str + str.split(/\s/).reverse().join(" "));


var str = "saya ingin makan nasi goreng";
var arr = str.split(" ");
arr.reverse();
str = arr.join(" ");
console.log(str + arr.join(" "))