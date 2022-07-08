console.clear();

const a = 5;
const b = 5;

if  (a > b) {
    console.log('pomidoras');
}
else if  (a < b) {
    console.log('Bandykite kita karta');
}

if  (a === b) 
    console.log('pomidoras');

else if (a != b) 
    console.log('Bandykite kita karta');
    
    
if  (a >= b) {
    console.log('pomidoras');
}
else if  (a <= b) {
    console.log('Bandykite kita karta');
}



console.log("---------------------------------------");

const salis1 = 'Lietuva';
console.log (salis1.length);

const salis2 = 'Estija';
console.log (salis2.length);

if  (salis1.length > salis2.length) {
    console.log('pomidoras');
}
else  if (salis1.length < salis2.length) {
    console.log('Bandykite kita karta');
}


if  (salis1.length === salis2.length) {
    console.log('pomidoras');
}
else  if (salis1.length !== salis2.length) {
    console.log('Bandykite kita karta');
}


if  (salis1.length >= salis2.length) {
    console.log('pomidoras');
}
else  if (salis1.length <= salis2.length) {
    console.log('Bandykite kita karta');
}


console.log("------------------------------");

const salys = ["lietuva", 'uk'];
console.log(salys[0].length, salys[1].length);

console.log("------------------------------");

if  (salys[0].length > salys[1].length) {
    console.log('pomidoras');
}
else  if (salys[0].length < salys[1].length) {
    console.log('Bandykite kita karta');
}


if  (salys[0].length === salys[1].length) {
    console.log('pomidoras');
}
else  if (salys[0].length !== salys[1].length) {
    console.log('Bandykite kita karta');
}


if  (salys[0].length >= salys[1].length) {
    console.log('pomidoras');
}
else  if (salys[0].length <= salys[1].length) {
    console.log('Bandykite kita karta');
}



console.log("------------------------------");

const arrayLength1 = [1, 3, 5, 7].length;
const arrayLength2 = ['Vilnius', 'Kaunas', 'Klaipeda', 'Panevezys', 'Siauliai'].length;

console.log(arrayLength1);
console.log(arrayLength2);
