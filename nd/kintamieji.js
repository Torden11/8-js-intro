// Kintamuju inicijavimas
// 1 uzduotis


let skaicius1 = 3;
let skaicius2 = 7;
let skaicius3 = 10;
console.log(skaicius1, skaicius2, skaicius3)

let skaicius4 = 4;
console.log(skaicius4);
let skaicius5 = 8;
console.log(skaicius5);
let skaicius6 = 15;
console.log(skaicius6);

// 2 uzduotis

const vilnius1 = "zirmunai sauletekis";
console.log(vilnius1);
const vilnius2 ='pasilaiciai justiniskes'
console.log(vilnius2);
const vilnius3 =`lazdynai naujamiestis`
console.log(vilnius3);
console.log(vilnius1, vilnius2, vilnius3);

// 3 uzduotis

const numbers = [7, 15, 8, 9, 5];
console.log(numbers);
const numbers2 = [0, 1, 2, 3, 4];
console.log(numbers2);
const numbers3 = [5, 7, 1, 4, 7];
console.log(numbers3);

const gatves = ['ziedu', 'liepu', 'aguonu', 'mokyklos', 'sauletekio'];
console.log(gatves);
const miestai = ['vilnius', 'ryga', 'talinas', 'siauliai', 'palanga'];
console.log(miestai);
const salys = ['lietuva', 'latvija', 'estija', 'lenkija', 'svedija'];
console.log(salys);


// Veiksmai su kintamaisiais
//1 uzduotis

const suma = skaicius1 + skaicius2 + skaicius3;
console.log(suma);

//2 uzduotis

const tarpas = "zirmunai pasilaiciai" + ' plytine sauletekis';
console.log(tarpas);

const eilute = `Zirmunai
pasilaiciai
justiniskes`;
console.log(eilute); 

//3 uzduotis

const numbers4 = [1, -2, 3, -4, 5]
const suma1 = numbers4[0] + numbers4[1] + numbers4[2] + numbers4[3] + numbers4[4];
console.log(suma1);

//4 uzduotis

//gatves1.reverse ();
//console.log(gatves1);

console.log('------------------------paprastas');

const gatves1 = ['ziedu', 'liepu', 'aguonu', 'mokyklos', 'sauletekio'];
const suma2 = gatves1[4] + ' ,' + gatves1[3] + ' ,' + gatves1[2] + ' ,' + gatves1[1] + ' ,' + gatves1[0];
console.log(suma2);

console.log('------------------------FOR');

for (let i = gatves1.length-1; i >=0; i--) {
    const mano = gatves1[i] + ',';
    console.log(mano);
}

