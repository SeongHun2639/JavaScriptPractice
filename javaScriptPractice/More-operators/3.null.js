// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefinded
// || falshy한 경우 설정(할당) 0 -0 ''

let num =0;
console.log(num || "-1");
// ?? null과 undefinded일 경우에만 실행하고 싶을 경우  ?? 연산자 사용 
// || 이것은 False일 경우 다 실행하는데 자바스크립트는 0도 False로 간주하기땨문
console.log(num ?? "-1");
