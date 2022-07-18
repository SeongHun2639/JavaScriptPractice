let num = 1;

const interval = setInterval(() =>{
    console.log(num++)
},1000)

setInterval(() => {
    console.log('시간종료');
    clearInterval(interval);
},6000)