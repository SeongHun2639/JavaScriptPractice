
const  fs  = require('fs');
const os = require('os');
const path = require('path')
// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아옴
// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다
// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4|mov(video) , png/aae(capturaed), IMG_1234 (IMG_E1234) -> duplicated
// fs.existsSync(name)    -> 내가 지정한 경로에  name이라는 폴더가 있는지 없는지 확인해주는 것

const folder = process.argv[2];
const workingDir = path.join(os.homedir(),'Pictures',folder)
if(!folder || !fs.existsSync(workingDir)){
    console.error("폴더이름을 입력해주세요");
    return;
}


console.log(workingDir)
console.log(fs.existsSync(workingDir))
