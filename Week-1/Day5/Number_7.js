var x = [1, 3, 4, 1, 201, 100, 4, 7, 42, 85, 12, 583, 13, 104, 31, 76, 49];

function bubbleSort(x) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < x.length - 1; i++) {
            if (x[i] > x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
bubbleSort(x);
console.log(x);