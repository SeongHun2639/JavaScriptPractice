const name = "홍길동";// 전역 변수,전역 스코프(글로벌 변수,글로벌 스코프)
{const name = "이순신"; // 지역 변수(로컬변수), 지역 스코프(로컬 스코프)
    {
        console.log(name);
    }
}