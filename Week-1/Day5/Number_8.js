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
/* Object, String, Number, Array */
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