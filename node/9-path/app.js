// path? -> 경로를 말함 파일에 경로를 접근하거나 경로에 대해서 무언가를 처리할때 사용하는 모델
const path = require('path');


// 현재 작업을 수행하고있는 디렉토리 이름(폴더)
console.log(__dirname);
// 현재 작업을 수행하고있는 파일 이름
console.log(__filename);

// 운영체제마다 파일 경로가 다름
// 그래서 path을 이용해서 운영체자가 달라져도 잘 수행되게 만드는게 목표
console.log(path.sep); //-> 경로 구분자
console.log(path.delimiter); //-> 환경변수 구분자

// basename
console.log(path.basename(__filename)); //-> 파일 정보 불러오기
console.log(path.basename(__filename,'.js'));  //-> 뒤에 확장자 제거


// dirname
console.log(path.dirname(__filename)); //-> 디렉토리 이름 가져오기

// extension
console.log(path.extname(__filename)); //-> 확장자 이름 가져오기

// parse  전체 경로를 하나하나씩 분리하는거
const parsed = path.parse(__filename);
console.log(parsed);


const str = path.format(parsed);
console.log(str);

// isAbsolute  절대경로인지 아닌지 알수있는 메서드
// 절대 경로라면 true 상대경로라면 false
// 절대경로? 이 파일에 현재 위치까지 다 알려주는 경로
// 상대경로? 지금 이 파일기준에서 어떤 경로로 이동하는 것
console.log('isAbsolute?',path.isAbsolute(__dirname));   
console.log('isAbsolute?',path.isAbsolute('../'));


// normalize    -> 잘못된경로가 있으면 경로 수정해주는 것
console.log(path.normalize('./folder/////sub'))

// join   -> 내가 직접 경로를 추가하는 api
console.log(__dirname + path.sep+ 'image');
console.log(path.join(__dirname,'image'));