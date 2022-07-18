let integer = 1213; // 정수
let negative = -123 // 음수
let double = 1.23 // 실수

console.log(integer);
console.log(negative);
console.log(double);


console.log(0/123); //0
console.log(123/0) // Infinity
console.log(123/-0) // -Infity
console.log(123/'text') // NaN (Not a Number)

let bigInt = 123456789133232566548123n; // 큰숫자를 쓸때는 뒤에 n 을 붙여서 사용하는게 안정적
console.log(bigInt)