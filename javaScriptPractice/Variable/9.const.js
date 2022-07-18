// let 재할당이 가능
let a = 1;
a=2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수

const text = 'hello';
// text  = 'hi' 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
    name:'apple',
    color:'red'
};

// apple ={};

console.log(apple);
apple.name = 'orange';
apple.color = 'ORANGE';
console.log(apple);
// 객체(object)를 저장하게 되면 힙 이라는 공간의 메모리 주소에 객체가 저장되고  에플이라는 변수는 객체가 저장된 메모리 주소만 가르킴
// 그래서 에플안에있는 주소를 바꾸거나 추가를 못하고, 힙에 저장되어있는 것은 변경 가능
