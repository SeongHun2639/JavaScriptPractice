console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);




eval('const num = 2; console.log(num)')
console.log(isFinite(1)); // 숫자가 유한인지 무한인지 판별하는거 유한이면 True 무한이면 False
console.log(isFinite(Infinity));

console.log(parseFloat('12.43 정성훈')); // 문자열이지만 안에 숫자가있다면 숫자로 나타탤수있음
console.log(parseInt('12.43'));  // 문자열이지만 실수를 정수로 변환
console.log(parseInt('13'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특스문자는 이스케이프 처리 해야 한다
const URL = 'https://드림코딩.com'
const encoded = encodeURI(URL);
console.log(encoded);

const decded = decodeURI(encoded);
console.log(decded);

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = "드림코딩.com";
console.log(encodeURIComponent(part))
