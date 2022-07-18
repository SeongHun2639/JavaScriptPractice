const num1 = 123; // number
const num2 = new Number(123); //object
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE); // 정수에서 사용가능한 가장 큰 숫자
console.log(Number.MIN_VALUE);// 사용가능한 최솟값
console.log(Number.MAX_SAFE_INTEGER); // 안전하게 사용할수있는 최대값
console.log(Number.MIN_SAFE_INTEGER); // 안전하게 사용할수있는 최소값
console.log(Number.NaN); // 숫자아님
console.log(Number.NEGATIVE_INFINITY);  // 무한
console.log(Number.POSITIVE_INFINITY); // 무한

if(num1 === Number.MAX_SAFE_INTEGER){

}
if (Number.isNaN(num1)){

}

// 지수 표기법(매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // e+2 === 10^2

// 반올림해서 문장열로 변환
const num4= 1234.12;
console.log(num4.toFixed()); // 정수로 변환해서 문자열로 반환

console.log(num4.toString());// 숫자열을 문자열로 반환
console.log(num4.toLocaleString('ar-EG')) // 그 나라에 맞는 문자열로 바꾸고싶을때

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법으로 반환

if(Number.EPSILON > 0 && Number.EPSILON < 1 ){
    console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}

const num = 0.1+ 0.2 -0.2;; // 0.1
console.log(num);

function isEqual(original, expected){
    return Math.abs(original-expected) < Number.EPSILON;
}
console.log(isEqual(1,1));
console.log(isEqual(0.1,0.1));
console.log(isEqual(num,0.1));