function letterValue(str) {
    var anum = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    if(str.length == 1)
        return anum[str] || ' ';
        return str.split('').map(letterValue);
}

letterValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.');


function loop(letterValue) {
    var a = [],
    b = [],
    prev;

    letterValue.sort();
    for (var i = 0; i < letterValue.length; i ++) {
        if (letterValue[i] !== prev) {
            a.push(letterValue[i]);
            b.push(1);
        } else {
            b[b.length - 1] ++;
        }
        prev = letterValue[i];
    }
    return [a, b];
}

var result = loop(letterValue);
console.log('[' + result[1] + ']');