var numbers = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3];
numbers.sort(function(a, b) {
    return a - b;
})
console.log(numbers);

numbers.sort(function(a, b) {
    return b - a;
})
console.log(numbers);


function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        tempArray.push(myChunk);
    }

    return tempArray;
}

var result = chunkArray([89, 77, 75, 66, 55, 44, 44, 44, 33, 33, 33, 22, 9, 8, 7, 6, 5, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1], 11);
console.log(result);