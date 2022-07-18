// Symbol 심벌
// 유일한 키를 생성할 수 있음
const map = new Map();
const key1 ='key';
const key2 ='key';
map.set(key1,'Hello');
console.log(map.get(key2));
console.log(key1 === key2);
console.clear()

// Symbol을 생성해서 키를 만들면 이름은 똑같아도 서로다른 키를 만들수 있음
const map2= new Map();
const key3 = Symbol('key');
const key4 = 'key';
map2.set(key3,'Hello');
console.log(map2.get(key4));
console.log(key3 === key4);

// 동일한 이름으로 하나의 키를 사요하고 싶다면, Symbol.for
// 전역적으로 심벌을 관리하는 곳 =>전역 심벌 레지스트리(Global Symbol Registry)
console.clear()
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

// 해당 심볼에 대한 정보를 알고 싶으면
// keyFor이라는 함수 사용
// 중요한게 for을 이용해서 만들지 않은 Symbol은 전역 심벌 레지스트리(Global Symbol Registry)에 저장이 되지 않기때문에 확인 불가능
console.log(Symbol.keyFor(k1));

const obj ={[k1]:'Hello', [Symbol('key')]:1};
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);