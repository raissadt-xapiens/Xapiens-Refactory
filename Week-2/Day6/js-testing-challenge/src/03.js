function mebiToKibi(bytes) {
    return parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
}
module.exports = mebiToKibi;