/* Callback */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function cloud(callback) {
    setTimeout(
        function() {
            console.log(`Function save cloud dengan delay ${randomInt} ms.`);
            callback()
        }, xxxxxx
    )
}

function notif(callback) {
    setTimeout(
        function() {
            console.log(`Function send notif dengan delay ${randomInt} ms.`);
            callback()
        }, xxxxx
    )
}

function news(callback) {
    setTimeout(
        function() {
            console.log(`Function fetch news dengan delay ${randomInt} ms.`);
            callback()
        }, xxxxx
    )
}

cloud();
notif();
news();