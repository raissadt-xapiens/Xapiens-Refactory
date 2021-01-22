function rating(x) {
    if (x >= 21) {
        console.log('Dewasa');
    } else if (x >= 13) {
        console.log('Remaja');
    } else if (x >= 9) {
        console.log('Bimbingan Orang Tua');
    } else {
        console.log('Semua Usia');
    }
}
rating(9); //Bimbingan Orang Tua 
rating(22); //Dewasa