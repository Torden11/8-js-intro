console.clear();

const numbers = [1, 2, 3, 4];


for (i=0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    }

console.log('************************');

for ( const number of numbers) {
    console.log(number);
    }