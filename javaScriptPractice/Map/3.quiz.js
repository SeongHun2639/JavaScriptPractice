// 주어진 배열에서 중복을 제거하라
const fruits = ['바나나','사과','포도','바나나','사과','복숭아']

const setFruits = new Set(fruits);
console.log(setFruits);
// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1,2,3,4,5]);
const set2 = new Set([1,2,3]);


function findIntersection(obj1,obj2){
    const set3 = new Set([])
    for (const value of obj1.values()){
        if(obj2.has(value)){
            set3.add(value);
        }
    }
    return set3
}
console.log(findIntersection(set1,set2));