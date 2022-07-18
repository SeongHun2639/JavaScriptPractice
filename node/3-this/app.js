// 함수안에서 this 호출하면 글로벌

function hello(){
    console.log(this);
    console.log(this ===global);
}
hello()

class A {
    constructor(num){
        this.num = num;
    }
    memberFunction(){
        console.log('------ class')
        console.log(this)
        console.log(this ===global);
    }
}

const a = new A(1);
a.memberFunction();
//  class 안에있는 함수는 class를 가르키고있음 즉 glboal이 아님

console.log('---- global scope-----')
console.log(this);
console.log(this === module.exports);
// 밖에서 쓰이는 this는 glboal 을 가르키지만  node this 는  module.export 와 같다
// this는 어디에서 쓰이는지 문맥에 따라서 다 다름

