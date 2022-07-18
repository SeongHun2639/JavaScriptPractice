//Set  -> 중복 불가

const set = new Set([1,2,3]);

console.log(set)

// 사이즈 확인
console.log(set.size);

// 값이 있는지 없는지확인  있으면 true 없으면 false
console.log(set.has(2));
console.log(set.has(6));

// 순회가 가능(iterable)
set.forEach((item) => console.log(item));
for (const value of set.values()) {
    console.log(value);
}

// 새로운 객체 추가
set.add(6);
console.log(set);
// set은 중복 x
set.add(6);
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = {name:'사과',price:8};
const obj2 = {name:'바나나',price:5};
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// 퀴즈
const obj3 = {name:'바나나',price:5};
objs.add(obj3);
console.log(objs);
