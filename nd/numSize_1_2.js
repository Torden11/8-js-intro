console.clear();

function numSize(number) {
    if (typeof number !== 'number'
        || !isFinite(number)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    const numberAsString = '' + number;
    let numberSize = numberAsString.length;

// arba 14 eiluteje -> if (numberAsString.includes('-')) {

    if (number < 0) {
        numberSize--;
       }

//arba 20 eiluteje -> if (numberAsString.includes('.')) {

       if (number % 1 !== 0) {
        numberSize--;
    }
    

    return numberSize;
}

console.log(numSize(true), '->', 'ERROR');
console.log(numSize('asd'), '->', 'ERROR');
console.log(numSize(NaN), '->', 'ERROR');
console.log(numSize(Infinity), '->', 'ERROR');
console.log(numSize(-Infinity), '->', 'ERROR');
console.log(numSize(), '->', 'ERROR');
console.log(numSize(null), '->', 'ERROR');

console.log(numSize(5), '->', 1);
console.log(numSize(781), '->', 3);
console.log(numSize(37060123456), '->', 11);
console.log(numSize(-5), '->', 1);
console.log(numSize(-781), '->', 3);
console.log(numSize(-37060123456), '->', 11);
console.log(numSize(3.14), '->', 3);
console.log(numSize(-3.14), '->', 3); 