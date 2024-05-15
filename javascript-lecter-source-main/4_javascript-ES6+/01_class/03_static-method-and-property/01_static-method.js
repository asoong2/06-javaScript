// 정적 메서드
// : 특정 클래스 인스턴스가 아닌 클래스 '전체'에 필요한 기능을 만들 때 사용한다.

class Student {

    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    // 클래스 선언부 안에 위치하고 앞에 static이라는 키워드를 붙이면 정적 메서드가 선언된다.
    // 1) 처음 선언
    static compare(studentA, StudentB) {
        // 인스턴스끼리 비교해주는 메서드 (신장 오름차순)
        return studentA.height - StudentB.height;
    }
}

let students = [
    new Student('유관순', 165.5),
    new Student('홍길동', 180.5),
    new Student('선덕여왕', 159.5)
];

// 정적 메서드로 선언한 compare를 전달하여 신장 오름차순으로 배열을 정렬한다.
students.sort(Student.compare); 
// compare는 student라는 인스턴스가 아니라 전체에 필요한 메서드기 때문에 static으로 지정
// Student.prototype이 아닌, Student에 직접 정의되어 있는 것
console.log(students);

Student.staticMethod = function() {
    console.log('staticMethod는 메서드 프로퍼티 형태로 직접 할당하는 것과 동일하다.');
}
// 2) 추후 동적 추가

Student.staticMethod();

// 조건에 맞는 객체를 만들어야 할 때 생성자도 사용 가능하지만
// 클래스에 정적 메서드를 만들어 팩토리 메서드를 구현할 수 있다.
class User {

    constructor(id, registDate) {
        this.id = id;
        this.registDate = registDate;   // 등록일자
    }

    static registerUser(id) {
        return new this(id, new Date());
    }
}

let user01 = User.registerUser('user01');
console.log(user01);


