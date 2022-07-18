// Spread 연산자, 전개구문
// 모든 Interable은 Spread 될 수 있다
// 순회가 가능한 모든것들은 촤르르륵 펼쳐 질 수있다
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018
function add(a,b,c){
    return  a+b+c;
}

const nums = [1,2,3];
console.log(add(...nums));

// Rest parameters
function sum(first,secnod,...nums) {
    console.log(nums);
}
sum(1,2,3,4,5,6,7,8);

// Array Concat
const fruits1 = ["사과","키위"];
const fruits2 = ['딸기','바나나'];
let arr = fruits1.concat(fruits2);
console.log(arr);

arr = [...fruits1,'딸기',...fruits2];
console.log(arr);

// Object
const ellie = {name:"Elie", age:20};
const update = {...ellie,
job:'s/w engineer',
};
console.log(update);
console.log(ellie);