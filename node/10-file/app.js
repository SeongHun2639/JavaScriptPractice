const fs = require('fs');

// 모든 api는 3가지 형태로 제공을 해준다
// rename(....., callback(error, data))  -> 비동기  error가 발생하거나 성공해서 data를 받아왔는지 확인
// renameSync(....)  --> 블록킹   따로 error가 된 상황을 전달해주지 않음 error가 떠서 node가 죽으면 안되기 때문에  try와 catch문으로 감싸줘야함
// promise.rename().then().catch(0) --> promise 형태로 사용 가능


// fs.renameSync('./file.txt','./file-new.txt');  // ->이렇게 없는 파일을 바꿀려고 시도하면 바꿀수가 없어서 error가  뜨면서 node 가 죽음
// 여기서 죽는다는건  error 가 발생한 시점에 뒤에 다른걸 수행하는 코드가 있어도 수행을 안하고 종료가 된다는 것을 의미
// 위처럼 error가 발생할수도 있는 사항은 try  catch문으로 감싸줘야함

try {
    fs.renameSync('./file-new.txt','./text-new.txt');
} catch(error){
    console.log(error);
}

// rename 비동기적으로 실행하기 때문에 callback 함수를 전달
fs.rename('./text-new.txt','./text.txt',(error) =>{
    console.log('error');
})

fs.promises.rename('./text2.txt','./text-new.txt')
.then(() => console.log('Done!'))    // 잘 실행됐을때 이걸 실행하고
.catch(console.error); // 에러가 나면 이걸 실행

//  rename 이랑 promise는 둘다 비동기적으로 실행하기 때문에 어느게 먼저 실행될지 알수가 없음
