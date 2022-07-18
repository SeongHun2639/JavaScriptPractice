// runInDelay(2)
// then과 catch는 둘중에 하나만 호출함 
// .then(필요한 일을 수행)
// .catch(에러를 처리)
// finally는 무조건 호출(then, catch 둘중하나 호출되고 난 다음)
// .finally(최종적으로)

function runInDelay(seconds){
    return new Promise((resolve, reject) => {
        if(!seconds || seconds < 0){
            reject(new Error('seconds가 0보다 작음'))
        }
        setTimeout(() => {
            resolve();
        },seconds * 1000)
    });
}

runInDelay(0)
.then(() => {
    console.log('타이머 완료!');
})
.catch(error => console.error(error))
.finally(() => {
    console.log("끝낫다!")
})