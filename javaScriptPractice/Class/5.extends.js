// class Tiger {
//     constructor(color){
//         this.color = color;
//     }
//     eat(){
//         console.log('먹자!');
//     }
//     sleep(){
//         console.log('잔다');
//     }   
// }

// class Dog {
//     constructor(color){
//         this.color = color;
//     }
//     eat(){
//         console.log('먹자!');
//     }
//     sleep(){
//         console.log('잔다');
//     }
//     play(){
//         console.log("놀자!");
//     }   
// }


class Animal{
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('먹자!');
    }
    sleep(){
        console.log('잔다');
    }   
}
// 상속
class Tiger extends Animal {
}
const tiger= new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

//추가적으로 필요한게 있다면 추가가 가능
class Dog extends Animal {
        //상속을 받았는데  하나더 속성을 부여하고싶으면 부모에서 상속받은 속성을 다 받아와야함
        constructor(color, ownerName){
            //super은 내가 상속하고있는 부모를 가르킴
            super(color);
            this.ownerName = ownerName;
        }
    play(){
        console.log('놀자!')
    }
    
    // 오버라이딩 overriding
    // 부모클래스에 있는걸 받아와서 자식클래스에서 위에 덮어쒸우는 것
    eat(){
        //부모클래스에서 머 가져오고싶으면 앞에 super를 붙이면 댐
        super.eat();
        console.log('강아지 먹는다!');
    }
}

const dog= new Dog('빨강이','엘리');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
