// 1. min, max function
function min(num1, num2) {
    var minnum = (num1>num2)? num2 : num1;
    return `최소값 : ${minnum}`;
}

function max(num1, num2) {
    var maxnum = (num1>num2)? num1 : num2;
    return `최대값 : ${maxnum}`
}

console.log(min(2,3));
console.log(max(2,3));

console.log();
console.log(`2번 -----------------------------------------------------`);

// 2. pow function
function pow(x, n) {
    var result = 1;
    if(n >= 1) {
        for(i = 0; i < n; i++ ) {
            result *=  x
        }
        return result;
    } else {
        console.log(`${n}은 양의 정수여야 합니다.`);
    }
}

console.log(pow(2,5));


console.log();
console.log(`3번 -----------------------------------------------------`);
// 3. min, max fuction 화살표 함수

min = (num1, num2) => {minnum = (num1>num2)? num2 : num1; return `최소값 : ${minnum}`;
}
console.log(min(2,3));

max = (num1, num2) => {maxnum = (num1>num2)? num1 : num2; return `최대값 : ${maxnum}`
}
console.log(max(2,3));

