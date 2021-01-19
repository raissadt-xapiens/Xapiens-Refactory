var numbers = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3];
numbers.sort(function(a, b) {
    return a - b;
})
console.log(numbers);