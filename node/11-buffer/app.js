// 버퍼(buffer)란? 
// Fixed-size chuck of memory(고정된 사이즈의 메모리 덩어리)
// array of integers, byte of data(숫자의 배열의 형태, 메모리에 들어있는 데이터 자체를 가르킴)


const buf = Buffer.from('Hi');
console.log(buf); // 그냥 출력하면 유니코드형태로 출력
console.log(buf.length);
console.log(buf[0]);  // 배열을 이용해 접근하면 아스키 코드로 출력
console.log(buf[1]);
console.log(buf.toString()); // 우리에게 친숙한 문자열로 보고싶으면 toString 메서드 사용


// create 우리가 만들수도 있음
const buf2 = Buffer.alloc(2); // 초기화를 진행하고 함 지정한사이즈 버퍼를 만듬
const buf3 = Buffer.allocUnsafe(2); // 빠르긴 하지만 초기화를 진행하지 않고 함
console.log(buf2);
console.log(buf3);

// concat  버퍼를 모을수가 있음
const newBuf = Buffer.concat([buf, buf2, buf3])
console.log(newBuf)