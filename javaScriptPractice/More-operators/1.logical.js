// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = {name:'강아지'};
const obj2 = {name:'여우',owner:"Ellie"};

if(obj1 && obj2){
    console.log("둘다 true!");
}

// 단축평가 -> 조건문 밖에서 쓰면 발동
// 변수에 넣어서 평가를 하게 되면 
// 앞 obj1이 true이기 때문에 뒤에꺼는 평가를 하지 않아도 됨 그래서 obj2의 값이 result에 할당이 됨
let result = obj1 && obj2;
console.log(result);


// OR연산자
// or연산자는 앞에꼐 저장
// true인게 저장
result = obj1 || obj2;
console.log(result);

// 활용예
//  조건이 truthy일때 && 무언가를 해야할 경우
//  조건이 falshy일때 || 무언가를 해야할 경우

// 주인이 있는경우
function changeOwner(animal){
    //주인이 없으면
    if (!animal.owner){
         throw new Error("주인이 없음")
    }
    animal.owner = "바뀐주인!";
}

// 주인이 없는 경우
function makeOwner(animal){
    if (animal.owner){
        throw new Error("주인있음")
   }
    animal.owner ='새로운주인!'
}

console.clear()
obj1.owner &&  changeOwner(obj1);
obj2.owner &&  changeOwner(obj2);
console.log(obj1);
console.log(obj2);



console.clear()
obj1.owner ||  makeOwner(obj1);
obj2.owner ||  makeOwner(obj2);
console.log(obj1);
console.log(obj2);


// null 또는 undefined인 경우를 확인할때
let item //= {price:1};
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter는 null과 undefined인 경우
// || falshy한 경우 설정(할당) 0,-0,null, undefined,''
function print(message) {
    const text =message || 'Hello';
    console.log(text);
}
print("정성훈");