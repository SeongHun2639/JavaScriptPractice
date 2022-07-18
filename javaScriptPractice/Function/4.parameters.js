// 매개변수의 기본값은 무조건 undefinded
// 매개변수의 정보는 함수 내부에서 접근이 가능한 argumnents 객체에 저장
// 매개변수 기본값 Default Parametrs a = 1, b=1
function add(a,b){
    return a+b;
}

// Rest 매개변수 Rest Parameters
function sum(a,b,...numbers){
    console.log(a);
    console.log(b);
    console.log(numbers);
}

sum(1,2,3,4,5,6,7,8,9);

