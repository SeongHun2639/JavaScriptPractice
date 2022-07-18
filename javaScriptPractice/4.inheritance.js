// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji){
    this.name = name;
    this.emoji = emoji;
};

Animal.prototype.printName = function (){
    console.log(`${this.name} ${this.emoji}`);
}

function Dog(name, emoji, owner){
    // super(name, emoji)
    Animal.call(this, name, emoji);
};
// Dog.prototype = Object.create(Object.prototype)
Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.play = () =>{
    console.log('같이 놀자옹!')
};


const dog1 = new Dog('멍멍','시바견','엘리')

dog1.play();
dog1.printName();
