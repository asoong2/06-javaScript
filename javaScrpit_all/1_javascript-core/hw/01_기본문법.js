
// if 문
var grade = '운영자';     // 일반회원, 운영자로 변경해서 테스트
if (grade == '손님'){
    authority = '글 읽기';
} else if (grade == '일반 회원'){
    authority = '글 읽기, 글 쓰기'; 
} else if(grade == '운영자'){
    authority = '글 읽기, 글 쓰기, 글 삭제';
}
console.log(`${grade}의 경우 ${authority}가 가능합니다.`);


console.log();
console.log(`2번 -----------------------------------------------------`);

// 3항 연산자
var grade = '운영자';
var authority = (grade == '손님')? "글 읽기" : (grade == '일반 회원')? "글 읽기, 글 쓰기" : "글 읽기, 글 쓰기, 글 삭제";
console.log(`${grade}의 경우 ${authority}가 가능합니다.`);


console.log();
console.log(`3번 -----------------------------------------------------`);

// switch문
var browser = 'Opra';   // 'Chrome', 'Firefox' 등으로 변경해서 테스트
switch (browser) {
    case 'Edge': console.log(`${browser}를 사용하고 계시네요!`);
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Oprera': console.log(`저희 서비스가 지원하는 브라우저를 사용하고 계시네요.`);
        break;
    default : console.log(`현재 페이지가 괜찮아 보이길 바랍니다!`);
}


console.log();
console.log(`4번 -----------------------------------------------------`);

// 반복문
// for (var i = 0; i < 10; i++) {
//     console.log('number' + (i+1));
// } 

var i = 0;
while(i < 10) {
    console.log('number' + (i+1));
    i++;
}


