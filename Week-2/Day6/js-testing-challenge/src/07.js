// function repeatLetter(string, times) {
//     var array = [];
//     for (var i = 0; i < times;)
//         array[i++] = string;
//     return array.join('');
// }
// module.exports = repeatLetter;


// function repeatLetter(string, times) {
//     parts = str_split(string);
//     foreach(parts as part) {
//         output. = str_repeat(part, times)
//     }
//     return output;
// }

function repeatLetter(text, n) {
    return ''.join([x * n
        for x in text
    ])
}
module.exports = repeatLetter;