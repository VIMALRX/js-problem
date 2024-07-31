console.log("problem_1")
let arr=[1,2,2,3,4,2,3,4,5,6,4,5]
let new_arr=[...new Set(arr)]
console.log(new_arr)
console.log("problem_2")
const array4=['john',30,'new york']
const obj={...array4}
console.log(obj)
console.log("problem_3")
const r=[3,2,1,4,5,67,4]
r.sort((a,b)=> a-b);
console.log(r.reverse())
console.log("problem_4")

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];


const difference1 = array1.filter(item => !array2.includes(item));
const difference2 = array2.filter(item => !array1.includes(item));

console.log('Difference (array1 - array2):', difference1);
console.log('Difference (array2 - array1):', difference2);


const set1 = new Set(array1);
const set2 = new Set(array2);

const difference1Set = [...set1].filter(item => !set2.has(item));
const difference2Set = [...set2].filter(item => !set1.has(item));

console.log('Difference (array1 - array2) using Set:', difference1Set);
console.log('Difference (array2 - array1) using Set:', difference2Set);
console.log("problem_5")
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const minMath = Math.min(...array);
const maxMath = Math.max(...array);

console.log('Minimum value (Math):', minMath);
console.log('Maximum value (Math):', maxMath); 

const minReduce = array.reduce((acc, curr) => (curr < acc ? curr : acc), array[0]);
const maxReduce = array.reduce((acc, curr) => (curr > acc ? curr : acc), array[0]);

console.log('Minimum value (reduce):', minReduce);
console.log('Maximum value (reduce):', maxReduce); 
