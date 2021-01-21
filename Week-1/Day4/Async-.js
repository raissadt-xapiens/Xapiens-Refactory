/* Promise */
for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

console.log('Done');



/* Await */
const i = [];
const forLoop = async => {
    console.log('Start');

    for (let i = 1; i <= 3; i++) {
        const number = numberToGet[i]
        const numRan = await getnumRan(number)
        console.log(numRan)
    }

    console.log('End');
}