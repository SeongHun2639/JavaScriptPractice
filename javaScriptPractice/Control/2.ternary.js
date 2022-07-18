// 삼향 조건 연산자 Ternary Operator
// 조건식? 참인경우 : 거짓인 경우

let fruit = 'orange';
if (fruit === 'apple'){
    console.log ('사과');
} else if( fruit === 'orange'){
    console.log('오렌지')
} else{
    console.log('둘다아님')
}


fruit ==='apple' ?  console.log('사과') : console.log("아님")



let emoji = fruit === 'apple' ? '사과': '아님';
console.log(emoji);