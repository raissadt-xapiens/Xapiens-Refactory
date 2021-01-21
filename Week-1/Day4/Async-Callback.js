/* Callback */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function cloud(callback) {
    setTimeout(
        function() {
            console.log('Function save cloud dengan delay ' + Math.random() + ' ms.');
            callback()
        }, 1000
    )
}

function notif(callback) {
    setTimeout(
        function() {
            console.log('Function send notif dengan delay ' + Math.random() + ' ms.');
            callback()
        }, 1000
    )
}

function news(callback) {
    setTimeout(
        function() {
            console.log('Function fetch news dengan delay ' + Math.random() + ' ms.');
            callback()
        }, 1000
    )
}

cloud();
notif();
news();