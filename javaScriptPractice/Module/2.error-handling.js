// try catch finally

function readFile(path) {
    // throw new Error('파일 경로를 찾을 수 없음');
    return "파일의내용"
}

function processFile(path) {
    let content;
    // try 문에서 시도를 해보고
     try {
        content = readFile(path);
     }// error가 난다면 catch 부분에서 처리 
     catch(error){
        console.log(error);
        content = "기본내용"
     } finally{
        console.log('성공하든 실패하든 마지막으로 리소스를 정리할 수 있음');
     }
    const result = 'hi' + content;
    return result;
}

const result = processFile('경로');
console.log(result);