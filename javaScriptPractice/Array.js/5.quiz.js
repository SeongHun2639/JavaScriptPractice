// 퀴즈1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input['바나나','딸기','포도','키위']
// output['바나나','키위','포도','키위']

// let fruits = ['바나나','딸기','포도','키위'];
// function replace(array){
//     const  reple = Array.from(array);
//     for(let i =0; i < fruits.length; i++){
//         if(reple[i] === "딸기"){
//             reple[i] = "키위"
//         }
//     }
//     return reple;
// }
// replace(fruits);


// console.clear()
// 퀴즈 2 
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input = ['바나나','키위','포도','키위']
// let store = ['바나나','키위','포도','키위']

// function check(fruitlist,fruit){
//     let value = 0;
//     for (i = 0; i < fruitlist.length;  i++ ){
//         if(fruitlist[i] === fruit){
//             value++;
//         }
        
//     }
//     return value; 
// }

// console.log(check(store,'키위'))
// check(store,'키위')
// const fruits =['바나나','사과','망고']
// console.log(fruits.includes("사과"));


//  퀴즈3: 배열 1, 배열2, 두개의 배열을 전달받아
// 배열1 아이템중 배열2에 존재하는 아이템만 담고있는 배열 반환
// input['바나나','키위','포도'],['바나나','딸기','포도','딸기']
// output['바나나','포도']

// let a= ['바나나','키위','포도']
// let b=['바나나','딸기','포도','딸기']

// function Fruit(check1,check2){
//     let value = [];
//     for(i=0; i < check1.length; i++){
//         let checkFruit = check1[i];
//         if(check2.includes(checkFruit)){
//             value.push(checkFruit)
//         } 
//     }
//     return value;
// }
// console.log(Fruit(a,b));