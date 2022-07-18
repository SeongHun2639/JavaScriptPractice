// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수(오래된 고정적인 방법)
// 생성자 함수
// function Fruit(name,emoji){
//     this.name = name;
//     this.emoji = emoji;
//     this.display = () => {
//         console.log(console.log(`${this.name}:${this.emoji}`))
//     };
//     return this; // 생략가능
// }

// const apple = new Fruit('apple','🍎');
// const orange = new Fruit('orange','🍊');

// console.log(apple);
// console.log(orange);

// console.log(apple.name);
// console.log(apple.emoji);
// console.log(orange.name);
// console.log(orange.emoji);



// 2. 클래스
class Fruit {
    // 생성자 : new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name,emoji){
        this.name = name;
        this.emoji = emoji;
    }
    // this키워드가 필요없음 function을 만들때
    display = () =>{
        console.log(`${this.name}:${this.emoji}`)
    }
}




// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','🍎');
// orange Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange','🍊');

apple.display();

//obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj ={name:'ellie'};