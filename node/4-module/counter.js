let count = 0;

function increase(){
    count++;
}

function getCount(){
    return count;
}


// node에서 export해서 쓰는 방법
module.exports.getCount = getCount;
module.exports.increase = increase;
// exports.increase = increase 이런식으로 module을 생략해서 적는것도 가능
// exports는 module.exports를 가지고 있는 참조값을 가지고 있는 아이기때문에 가능
// 하지만 exports를 새로운 값을 등록을 해버리면 등록 할 수가없음
