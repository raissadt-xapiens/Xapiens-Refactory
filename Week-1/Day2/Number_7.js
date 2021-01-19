// Sum Data
console.log([89, 77, 75, 66, 55, 44, 44, 44, 33, 33, 33].reduce((a, b) => a + b, 0));
console.log([22, 9, 8, 7, 6, 5, 4, 4, 3, 3, 3].reduce((a, b) => a + b, 0));
console.log([3, 3, 2, 2, 2, 2, 2, 1, 1, 1].reduce((a, b) => a + b, 0));


// Average Data
const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
average([89, 77, 75, 66, 55, 44, 44, 44, 33, 33, 33]);
average([22, 9, 8, 7, 6, 5, 4, 4, 3, 3, 3]);
average([3, 3, 2, 2, 2, 2, 2, 1, 1, 1]);


// Max Data
Math.max(89, 77, 75, 66, 55, 44, 44, 44, 33, 33, 33);
Math.max(22, 9, 8, 7, 6, 5, 4, 4, 3, 3, 3);
Math.max(3, 3, 2, 2, 2, 2, 2, 1, 1, 1);


// Min Data
Math.min(89, 77, 75, 66, 55, 44, 44, 44, 33, 33, 33);
Math.min(22, 9, 8, 7, 6, 5, 4, 4, 3, 3, 3);
Math.min(3, 3, 2, 2, 2, 2, 2, 1, 1, 1);