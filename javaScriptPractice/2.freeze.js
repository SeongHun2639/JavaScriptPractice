// 동결! Object.freeze 추가, 삭제 ,쓰기 ,속성 재정의 아무것다 안됨
// (단, 얕은 꽁꽁 얼림!)  객체 안에 객체가 있으면 그것까지는 얼릴수가 없음
const ellie = {name:'엘리'};
const dog = {name:'와우',emoji:"강아지",owner:ellie};
Object.freeze(dog);
dog.name = "멍멍";
console.log(dog);
dog.age =4;
console.log(dog);
delete dog.name
console.log(dog);
ellie.name ='엘리얌'
console.log(dog);
console.clear()


// 밀봉! Object.seal -> 값읫 수정 가능
// 하지만 추가 삭제 속성 재정의 다 불가능
const cat = {...dog};
// Object.assign(cat,dog);
Object.seal(cat);
console.log(cat);
cat.name = "냐옹";
console.log(cat);
delete cat.emoji;
console.log(cat);

// 갹체가 얼려저있는지 아닌지 확인 가능
console.log(Object.isFrozen(dog));
// 객체가 밀봉이 되어있는지 아닌지 확인 가능
console.log(Object.isSealed(cat));


// 확장 금지 preventExtensions
const tiger = {name:'어흥'};
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name ='어흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1 ;
console.log(tiger);
