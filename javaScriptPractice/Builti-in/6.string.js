const textObj = new String('Hello World!');
const text = "Hello World!"

console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('l')); // 찾는 문자가 몇번째 인덱스에있는지 찾아서 반환
console.log(text.lastIndexOf('l')); // 찾는 문자열이 몇번째 인덱스에서 마지막으로 썻는지 찾아서 반환
console.log(text.includes('H')); // 이 문자열에 내가찾는 문자가 포함이 되어있는지 아닌지 찾아서 있으면 Ture, 없으면 False
console.log(text.startsWith('He')); // 이 문자로 시작하는 안하는지 확인
console.log(text.endsWith('!')); // 이 문자로 끝나는지 안하는지 확인

console.log(text.toUpperCase()); // 대문자로 반환
console.log(text.toLowerCase()); // 소문자로 반환

console.log(text.substring(0,2));// 부분적으로 가져올수도 있ㅇ므
console.log(text.slice(2)); // 문자열을 삭제해서 가져오기
console.log(text.slice(-2)); 


const space= '                    space           ';
console.log(space.trim()); // 공백을 삭제

const longText = "Get to the point";
console.log(longText.split(' ')); // 내가 원하는 문자열로 끊어서 배열에 저장
console.log(longText.split(' ',2)); // 앞에서 몇개만 받고싶으면 