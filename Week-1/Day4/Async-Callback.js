/* Callback */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//First function//
function cloud(callback, err) {
    setTimeout(
        function() {
            console.log('Function save cloud dengan delay ' + Math.random() + ' ms.');
            callback()
        }, 1000
    )
}
cloud();

//Second function//
function notif(callback, err) {
    setTimeout(
        function() {
            console.log('Function send notif dengan delay ' + Math.random() + ' ms.');
            callback()
        }, 1000
    )
}
notif();

//Third function//
function news(callback, err) {
    setTimeout(
        function() {
            console.log('Function fetch news dengan delay ' + Math.random() + ' ms.');
            callback()
        }, 1000
    )
}
news();