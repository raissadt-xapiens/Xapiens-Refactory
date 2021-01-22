/* 1 */
/* Object, String, Number */
function dataType(value) {
    switch (typeof value) {
        case 'string':
            return "string";
        case 'number':
            return "number";
        case 'object':
            return "object";
        case 'array':
            return "array";
        default:
            return "undefined";
    }
}


/* 2 */
/* Object, String, Array, Number */
Object.prototype.toString.call([]);
Object.prototype.toString.call(new String('' || ""));
Object.prototype.toString.call(new Boolean(true));
Object.prototype.toString.call(null);

function dataType(value) {
    const return_value = Object.prototype.toString.call(value);

    const type = return_value.substring(
        return_value.indexOf(" ") + 1,
        return_value.indexOf("]"));

    return type.toLowerCase();
}

dataType(["fruit", "vegetable"]); // 'array'
dataType({ "hello": "world" }); // 'string'
dataType(2345); // 'number'


/* 3 */
/* Object, String, Array, Number, Integer, Float, Octadecimal, Hexadecimal*/
function dataType(x) {
    if (typeof(x) === 'string') {
        console.log('String');
    } else if (typeof(x) === []) {
        console.log('Array');
    } else if (typeof(x) === 'object') {
        console.log('Object');
    } else if (typeof(x) === parseInt()) {
        console.log('Integer');
    } else if (typeof(x) === parseFloat()) {
        console.log('Float');
    } else if (typeof(x) !== parseInt() && typeof(x) !== parseFloat()) {
        console.log('Number');
    } else if (typeof(x) === x % 8 === 0) {
        console.log('Octadecimal');
    } else if (typeof(x) === '0x'.concat((x))) {
        console.log('Hexadecimal');
    } else {
        console.log('Undefined');
    }
}