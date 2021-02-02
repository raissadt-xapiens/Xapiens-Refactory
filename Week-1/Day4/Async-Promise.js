/* Promise */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//First function//
let cloud = new Promise((resolve, reject) => {
    resolve("Function save cloud dengan delay " + Math.random() + " ms.");
    reject(new Error("Function salah"));
})
cloud
    .then((result) => { console.log(result) })
    .catch((error) => { console.log(error) })

//Second function//
let notif = new Promise((resolve, reject) => {
    resolve("Function send notif dengan delay " + Math.random() + " ms.");
    reject(new Error("Function salah"));
})
notif
    .then((result) => { console.log(result) })
    .catch((error) => { console.log(error) })

//Third function//
let news = new Promise((resolve, reject) => {
    resolve("Function fetch news dengan delay " + Math.random() + " ms.");
    reject(new Error("Function salah"));
})
news
    .then((result) => { console.log(result) })
    .catch((error) => { console.log(error) })