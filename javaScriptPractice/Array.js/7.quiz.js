// 퀴즈1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input['바나나','딸기','포도','키위']
// output['바나나','키위','포도','키위']


// function replace(array,from,to){
//     return array.map(item => {
//         return item===from ? to :item
//     });
//             // if(item ===from) {
//         //  return to;   
//         //} else{
//         // return item;
//         //}  
// }
// const fruits = ['바나나','딸기','포도','키위'];
// const result = replace(fruits,'딸기','키위')
// console.log(result);

// 퀴즈 2 
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input = ['바나나','키위','포도','키위']
// let store = ['바나나','키위','포도','키위']

// function check(array,item){
//     return array.filter((value)=> value === item).length;
//     // return  array.reduce((count,value) =>{
//     //     if(value === item){
//     //         count++;
//     //     }
//     //     return count;
//     // },0)
// }

// console.log(check(store,'키위'))


//  퀴즈3: 배열 1, 배열2, 두개의 배열을 전달받아
// 배열1 아이템중 배열2에 존재하는 아이템만 담고있는 배열 반환
// input['바나나','키위','포도'],['바나나','딸기','포도','딸기']
// output['바나나','포도']

// let a= ['바나나','키위','포도']
// let b=['바나나','딸기','포도','딸기']

// function Fruit(input,search){
//     return input.filter((item) => search.includes(item))
// }
// console.clear()
// console.log(Fruit(a,b));

// 퀴즈4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3,16,5,25,4,34,21];

const result2 = nums//
    .filter((num) => num>5) // [16,25,34,21];
    .reduce((avg, num, _, array) => {
     avg += num / array.length
    return avg;
    },0);

console.log(result2);