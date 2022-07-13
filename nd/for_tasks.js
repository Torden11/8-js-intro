/* 1 uzduotis
 a.	0 … 0
b.	0 … 4
c.	0 … 100
d.	574 … 815
e.	-50 … 50
f.	-70 … 30
*/


/*const numbers = [0, 0];
const findSum = ([l, h]) => {
   let sum = 0;
   for(let i = l; i <= h; i++){
      sum += i;
   }
   return sum;
};
console.log(findSum(numbers));
*/


/*
const numbers = [-70, 30];
const findSum = ([l, h]) => {
   let sum = 0;
   for(let i = l; i <= h; i++){
      sum += i;
   }
   return sum;
};
console.log(findSum(numbers));
*/



console.log('********************');

let suma = 0;
for (let i=0; i <=4; i++)
      suma += i;

console.log(suma);

// 2 Uzduotis

const seka = 'abcdef';
console.log(seka);



for (let i = seka.length-1; i >= 0; i--) {
   atbul = seka[i];
   console.log(atbul);
}


let abc = 'abcdef';
let newAbc = '';

for(let i = abc.length-1;i >= 0;i--)
{
    newAbc += abc[i];
}
console.log(newAbc);

console.log('-----------------------')
// 3 uzduotis

/* a.	0 - 11
b.	8 - 31
c.	-18 - 18
*/

let count = 0;

const m1 = [3, 5, 7];

for(let j = 0; j<=2; j++)
{
    for(let i = 0; i <= 11; i++){
        if((i % m1[j])===0)
        {
            count++;
        }
    }
    console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš ' + m1[j] +' yra ' + count + ' vienetai.');
   }

   console.log("Intervalas -----------------------------0-11");

   let beliekanos3 = 0;
   let beliekanos5 = 0;
   let beliekanos7 = 0;

   for(let i=0; i <= 11; i++ ) {
      if (i % 3 === 0)
      beliekanos3 ++
      if (i % 5 === 0)
      beliekanos5 ++
      if (i % 7 === 0)
      beliekanos7 ++
   };
   console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ' + beliekanos3 + ' vienetai.');
   console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ' + beliekanos5 + ' vienetai.'); 
   console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ' + beliekanos7 + ' vienetai.'); 
   

const nums = [2, 7, 11, 15];
const target = [9];


let twoSum = function(nums, target) {
   for (i=0; i <= nums.length-1; i++) {
       for (j=i+1; j<=nums.length; j++) {          
         if (nums [i] + nums [j] === target) {
            return [i, j]
         }
      }
   }
}

console.log(twoSum ([2, 7, 11, 15], [9]));


