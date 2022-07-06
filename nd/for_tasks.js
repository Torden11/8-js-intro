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

/* a.	0 … 0
b.	0 … 4
c.	0 … 100
d.	574 … 815
e.	-50 … 50
f.	-70 … 30
*/

const numbers = [-70, 30];
const findSum = ([l, h]) => {
   let sum = 0;
   for(let i = l; i <= h; i++){
      sum += i;
   }
   return sum;
};
console.log(findSum(numbers));