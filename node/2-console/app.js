console.log('loading....');
console.clear(); // --> 현재 출려된 콘솔을 다 지우고 싶을때 사용하는 거


// log level
// 로그 심각성에 따라서(레벨)별로 활용을 하면 나중에 배포했을때 서버의 심각성을 알아차리기 쉬움 또 에러가 있을때 수정하기가 쉬움
// 베포할때는 로그 출력하지 않도록 레벨별로 컨트롤 하기때문에 개발할때부터 레벨별로 다르게 콘솔로그 이용하는게 좋음
console.log('log');  //  개발할때 사용
console.info('info');// 정보남길때 사용 (개발할때)
console.warn('warn');// 경보단계(에러이긴한대 별 상관 없을때)
console.error('error');// 에러(사용자 에러, 시스템 에러)

// assert    첫번째 인자로 입력한 값이 true가 아닐때만 로그로 출력하는 api
console.assert(2 ===  3,'다름!');
console.assert(2 === 2,' 같음!');


// print object 
const profile = {
    name:'홍길동',
    age: 20,
    company:{
        name:"AC"
    }
}
console.log(profile);
console.table(profile); //-> object보기 편하게 테이블 형태로 출력 가능
// showHidden -> true이면  objectkey라는 명령어를 사용했을때 키값들이 안나오게 설정 가능
//  depth -> object가 중첩되어있으면 어느정도 까지 보여줄껀지 설정할수 있는 값
// color -> 색깔 설정
console.dir(profile,{showHidden:true,colors:false,depth:1}); //-> log랑 똑같이 콘솔에 출력이 가능 (단, 추가로 값을 줘서 세밀하게 컨트롤하는게 가능)


// 실행했을때 시간이 얼마나 걸린지 궁감하면
console.time('for loop');
for(let i = 0; i < 10; i++){
    i++;
}
console.timeEnd('for loop')

// counting  함수가 몇번 실행됬는지 알려주는거
function a() {
    console.count('a 함수')
}
a();
console.countReset('a 함수')  //-> 특정 조건일때 카운터 리셋하고싶을때 사용하는 메서드
a();


// 디버깅할때 유용한 trace
// trace 누가이 함수를 호출했는지 궁굼할때 사용하는 메서드
function f1(){
    f2();
}
function f2(){
    f3();
}
function f3(){
    console.log('f3');
    console.trace();
}

f1();