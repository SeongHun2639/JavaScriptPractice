// 정직원과 파트타임직원을 나타낼 수 있는 클래스 만들어 봦
// 직원들의 정보: 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 지구언은 시간당 8000원


// class inforMation{
//     #name;
//     #department;
//     #time;
//     constructor(name,department,time){
//         this.#name = name;
//         this.#department = department;
//         this.#time = time;
//     }
// }

// class fulltimeEmployee extends inforMation{
//     #value
//     constructor(name,department,time,money){
//         super(name,department,time);
//         this.money = money;
//         this.#value = 0;
//     }
//     get value(){
//         return this.#value; 
//     }
//     calcuator(){
//        this.#value = money*time; 
//     }
// }


// const abc= new fulltimeEmployee('정성훈','서버',9,1000);


// abc.calcuator();
// abc.value();

class Employee{
    constructor(name, department, hoursPerMonth, payRate){
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    calcuatePay(){
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee{
    static PAY_RATE = 10000;
    constructor(name, department,hoursPerMonth){
        super(name, department, hoursPerMonth,FullTimeEmployee.PAY_RATE);
    }
}

class PartTimeEmployee extends Employee{
    static PAY_RATE =8000
    constructor(name, department,hoursPerMonth){
        super(name, department, hoursPerMonth,PartTimeEmployee.PAY_RATE);
    }
}
const ellie = new FullTimeEmployee('엘리','s/w',30);
const bob = new PartTimeEmployee('밥','s/w',20);

console.log(ellie.calcuatePay());
console.log(bob.calcuatePay());