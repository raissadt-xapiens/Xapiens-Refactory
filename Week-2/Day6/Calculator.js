const readline = require('readline');

let calc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1. Add(+)");
console.log("2. Substract(-)");
console.log("3. Multiply(*)");
console.log("4. Divided(/)");

calc.question(`Choose here: `, function(menu) {
    console.log(`${menu}`);
    calc.question(`Input the first number:`, function(num1) {
        console.log(`The first number is ${num1}`);
        calc.question(`Input the second number:`, function(num2) {
            console.log(`The second number is ${num2}`);
            if (menu == 1) {
                console.log('Output: ', parseInt(num1) + parseInt(num2));
            } else if (menu == 2) {
                console.log('Output: ', parseInt(num1) - parseInt(num2));
            } else if (menu == 3) {
                console.log('Output: ', parseInt(num1) * parseInt(num2));
            } else if (menu == 4) {
                console.log('Output: ', parseInt(num1) / parseInt(num2));
            } else {
                console.log(`Undefined`);
            }
            calc.close();
        });
    });
});