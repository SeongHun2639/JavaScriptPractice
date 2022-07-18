//  노드가 동작하는 프로세스 정보도 가져올수 있음
const process = require('process');

// 노드가 실행되고 있는 위치
console.log(process.execPath);
// 프로세스 버전
console.log(process.version);
// 프로세스 아이디
console.log(process.pid);
// 프로세스 부모 아이디
console.log(process.ppid);
// 플랫폼 정보
console.log(process.platform);
// 컴퓨터에 저장된 환경변수에 대한 모든것
console.log(process.env);
// 얼마나 실행이 됬는지
console.log(process.uptime());
// 현재 노드가 실행되고있는 경로
console.log(process.cwd());
// 현재 cpu가사용되고 있는 양
console.log(process.cpuUsage());

console.clear()
setTimeout(()=>{
console.log('setTimeout')
},0)
// 지금은 아닌데 현재 수행되고있는 코드가 다 완료되고 나면, 내가 등록한 콜백함수를 Taskqueue에 넣어덜라고 하는 메서드
// Taskqueue에 이미 함수가 있어도 순서를 무시하고 젤 앞부분에 넣어서 실행을 함
process.nextTick(() => {
     console.log('nextTick')
})