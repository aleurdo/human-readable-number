module.exports = function toReadable(number) {
    var converter = require('number-to-words');
    var words = converter.toWords(number);
    return words.replace('-', ' ');


}