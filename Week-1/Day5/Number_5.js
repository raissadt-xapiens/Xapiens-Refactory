var str = prompt("Input value");
var result = str.split("").reverse().join("").split(" ").reverse().join(" ");
console.log(str.concat(result));