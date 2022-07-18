// Iterable 하다는건 ! 순회가 가능하다는 거지
// [Symbol.iterator]() : Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는걸 알 수있음
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread 사용가능
const array = [1,2,3];
// 배열은 순회가 그낭하면 for(const 변수이름 of 배열)이용하면 하나씩 순회가 가능
for(const item of array){
    console.log(item);
}

// obj는 이터레이션 규격상을 따라가지 않기때문에 불가능
// const obj ={0:1,1:2};
// for( const item of obj){
//     console.log(item);
// }
// 하지만 for in은 사용가능
const obj ={0:1,1:2};
for( const item in obj){ // key를 출력
    console.log(item);
}

console.clear()
const iterator = array.values();
while(true){
    const item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}