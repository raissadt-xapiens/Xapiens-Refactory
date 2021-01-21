for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

function setDelay(x) {
    setTimeout(function() {
        console.log('Done');
    }, 1500);
}
setDelay();