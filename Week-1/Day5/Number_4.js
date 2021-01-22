function rangeNumbers(min, max) {
    var range = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }
    return range;
}
rangeNumbers(Number(prompt("Enter a minimum number")), Number(prompt("Enter a maximum number")));