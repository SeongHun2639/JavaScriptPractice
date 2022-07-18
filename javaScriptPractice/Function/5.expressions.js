// 함수 선언문 funcion name(){}
// 함수 표현식 const name  = function (){}
// 화살표 햠수 cnost name = () => {}
let add = function(a,b){
    return a+b;
}
console.log(add(1,2));

// 화살표 함수
let sum = (a,b) => {
    return a+b;
}
console.log(sum(1,5));

let abc = (a,b) => a+b;

console.log(abc(5,5));

// 생성자 함수 const ohject  = new Function(); // 뒤 객체편에서 다룸

//IIFE(Immedicately-Invoked Function Expressions)
(function run(){
    console.log('사랑')
})()
