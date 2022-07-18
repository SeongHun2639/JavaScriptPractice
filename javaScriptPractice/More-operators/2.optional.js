// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.

// null 또는 undefined을 확인할때
let item = {price:1};
const price = item?.price;
console.log(price);


let obj = {name:'강아지',owner:{name:'엘리'}};
function printName(obj){
    const ownerName = obj?.owner?.name;
    //obj && obj.owner && obj.owner.name;
    console.log(ownerName);
}
printName(obj)