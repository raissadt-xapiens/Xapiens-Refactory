function repeatString(string, times) {
    var repeat = "";
    while (times > 0) {
        repeat += string;
        times--;
    }
    return repeat;
}
module.exports = repeatString;