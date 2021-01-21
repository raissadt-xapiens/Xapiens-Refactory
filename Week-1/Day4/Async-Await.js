/* Await */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//First function//
async function cloud() {
    result = await Math.random();
    console.log(`Function save cloud dengan delay ${result} ms.`);
}
cloud();

//Second function//
async function notif() {
    result = await Math.random();
    console.log(`Function send notif dengan delay ${result} ms.`);
}
notif();

//Third function//
async function news() {
    result = await Math.random();
    console.log(`FUnction fetch news dengan delay ${result} ms.`);
}
news();