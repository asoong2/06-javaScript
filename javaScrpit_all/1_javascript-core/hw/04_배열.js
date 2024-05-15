const str = '사과,바나나,당근,김밥,치즈,떡볶이,햄버거,환타,사이다,콜라,고양이,강아지';

console.log(findWord(str, '고양이'));
console.log(findWord(str, '샌드위치'));
console.log(findWord(str));

function findWord(str, word) {
    var arr = str.split(',');
    var index = arr.indexOf(word);
    
    if (index > 0) {
       return `${word}는 배열 index의 ${index}번째에 있습니다.`
    } else if (word) {
        return `${word}는 배열에 존재하지 않습니다.`
    } else {
        return `결과를 확인할 수 없습니다.`
    }
};

console.log(`2번 ------------------------------------------`);
// // 배열(arr)의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수
// // filterRange(arr, a, b)를 작성한다.

// function filterRange(arr, a, b) {
//     arr.slice(arr, a, b);
//   }
  
//   const arr = [5, 3, 8, 1, 10, 4];
  
//   filterRange(arr, 1, 5);
  
//   console.log(arr);
  

console.log(`3번 ------------------------------------------`);
// 오름차순 정렬, 내림차순 정렬
let numbers = [20, 100, 37, 54, 88, 9];
let strings = ['wow', 'js', 'party', 'hello'];

// 내림차순
numbers.sort((a,b) => b-a);
console.log(numbers);
strings.sort((a,b) => b-a);
console.log(strings);

// 오름차순
numbers.sort((a,b) => a-b);
console.log(numbers);
strings.sort();
console.log(strings);


console.log(`4번 ------------------------------------------`);
function Student(firstName, lastName, score) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = score;
}

const studentList = [
    new Student('길동', '홍', 60),
    new Student('보고', '장', 70),
    new Student('관순', '유', 80)
];

sortFromScore(studentList);
console.log(studentList);
console.log(makeFullName(studentList));

function sortFromScore(arr) {
    // score 내림차순 기준 정렬
    studentList.sort((a,b)=>b.score-a.score);
}

function makeFullName(arr) {
    // 코드 작성
    const name = [firstName, lastName, score]
console.log(types);
}
