// 다양한 사용법

let pants = {
    productName : '배기팬츠',
    color : '검정색',
    price : 30000
};

// 프로퍼티가 많은 복잡한 객체에서 원하는 정보만 뽑아오고 싶을 때 사용
let { productName } = pants;
console.log(`productName : ${productName}`);

// 객체에 존재하지 않는 프로퍼티는 기본 값을 설정해서 사용할 수 있다.
let shirts = {
    productName : '베이직 셔츠'
};
// 해당 프로퍼티가 없을 때 기본값 담는 방법
// pn에 기본 값을 추가하더라도 '베이직 셔츠'가 출력된다.
let { productName : pn, color : co = '어떤 색상', price : pr = 0 } = shirts;
console.log(pn);
console.log(co);
console.log(pr);

// rest parameter ... 로 나머지 요소를 한 번에 가져올 수 있다.
let { productName : productName2, ...rest } = pants;
console.log(productName2);
console.log(rest);

// let 키워드 없이 사용할 시 유의할 점
let productName3, color3, price3;

// 중괄호를 코드블럭으로 인식하여 오류 발생
// { productName : productName3, color : color3, price : price3 } = pants;
// 소괄호로 감싸주면 오류 발생하지 않음
({ productName : productName3, color : color3, price : price3 } = pants);
console.log(productName3);
console.log(color3);
console.log(price3);
