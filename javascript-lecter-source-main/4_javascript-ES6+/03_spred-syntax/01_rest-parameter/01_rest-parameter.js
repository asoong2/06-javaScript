// 나머지 매개변수
function merge(msg1, msg2) {
    return msg1 + msg2;
}

console.log(merge('안녕하세요.'));
console.log(merge('안녕하세요.', '반갑습니다.'));
console.log(merge('안녕하세요.', '반갑습니다.','제 이름은 홍길동입니다.'));
// 전달되는 매개변수 외의 매개변수는 arguments 객체에 담긴다.

/* 이 상황에서 나머지 매개변수 ... 를 사용하면 매개변수를 한데 모아 배열에 담을 수 있다. */
function mergeAll(...args) {
    let message = '';

    for(let arg of args) message += arg;
    
    return message;
}

console.log(mergeAll('안녕하세요.'));
console.log(mergeAll('안녕하세요.', '반갑습니다.'));
console.log(mergeAll('안녕하세요.', '반갑습니다.','제 이름은 홍길동입니다.'));

/* 유의할 점은 나머지 매개변수는 항상 마지막에 있어야 한다. */
// function func(arg1, ...args, arg) {} -> (X)
// function func(arg1, arg2, ...args) {} -> (O)



