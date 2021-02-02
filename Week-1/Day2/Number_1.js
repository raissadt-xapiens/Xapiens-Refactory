function score(x) {
    if (x >= 90) {
        console.log("You got A!");
    } else if (x >= 80) {
        console.log("You got B!");
    } else if (x >= 70) {
        console.log("You got C!");
    } else if (x >= 60) {
        console.log("You got D!");
    } else {
        console.log("You need to take the test again.");
    }
}


console.log(score(65));
// You got D!