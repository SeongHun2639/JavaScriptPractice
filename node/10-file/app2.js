const  fs = require('fs').promises; //-> fs 안에있는 promise를 가르키고 있음

// read a file  (파일 읽어오기)
fs.readFile('./text.txt','utf8')//
.then(data => console.log(data))  //-> text안에 있는 data를 buffer형태로 읽어옴(뒤에 아무옵션도 주지않으면 기본 형태가 buffer 형태임)
.catch(console.error);

// writing  a file (파일쓰기)   기존에 데이터가 있으면 덮어쓰기가 됨
fs.writeFile('./file.txt','안녕 반가워 :)')
.catch(console.error);   // ->항상 error가 발생할수 있기때문에 catch문은 항상! 해줘야함  매우 중요!~!

// 기존 데이터를 유지하면서 뒤에 추가를 하고 싶다면
// appendFile
fs.appendFile('./file.txt','만나서 반가워 :)')
.then(()=>{
    fs.copyFile('./file.txt','file2.txt')
.catch(console.error);
})
.catch(console.error); 

// copy   파일 복사하는거
// 이렇게 복사를 하게되면 모든일들이 비동기 적으로 진행이 되기 때문에 안에 내용이 추가가 안됨
// fs.copyFile('./file.txt','file2.txt')
// .catch(console.error);


// folder 만들기
fs.mkdir('sub-folder')
.catch(console.error);

//  파일 경로 읽어오기
fs.readdir('./')
.then(console.log)
.catch(console.error);
