const fs = require('fs');

const readStream = fs.createReadStream('./file.txt',{
    highWaterMark: 64,// 64kbytes 기본적인 옵션 설정을 하지 않으면(한번에 얼마만큼의 데이터를 읽어오는지 설정해 주는 값)
    encoding: 'utf-8', // 읽어오는 값 
});

const data= [];
readStream.on('data',chunk => {
    data.push(chunk);
})

readStream.on('end',() => {
    console.log(data.join(''))
})

readStream.on('error',error =>{
    console.log(error);
})
