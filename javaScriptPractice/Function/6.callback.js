// 콜백함수
const add = (a,b) => a+b;
const multiply = (a,b) => a*b;

// 고차함수
// 전달된 action은  콜백함수이다.
// 전달된 당시에 함수를 바로 호출해서 반한된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 래퍼런스(참조값)이 전달된다.
// 그래서 함수는 고차함수 안에서 필요한 숙낭네 호출이 나중에 됨
function calcuator(a,b, action){
    let result = action(a,b);
    console.log(result);
    return result;
}

calcuator(1,2, add);
calcuator(1,4 ,multiply);