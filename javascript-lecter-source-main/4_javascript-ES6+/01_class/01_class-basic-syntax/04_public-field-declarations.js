// 클래스 필드 정의 제안
class Book {

    // 클래스를 정의할 때 '프로퍼티 이름 = 값'을 써주면 클래스 필드를 만들 수 있다.
    // 최신 브라우저(chrome 72 이상) 또는 최신 Node.js(버전 12 이상)에서만 실행 가능하다.
    // 원래 쓰던 방법 cunstructor() {this.name =""}

    // 고정된 값을 줄 때 편리하다.
    name = "모던JavaScript";
    // this.는 constructor 내부 또는 메소드 내부에서 작성해야 한다.
    // this.pricce = 35000;

    // 프로토타입 메소드
    introduce() {
        console.log(`${this.name}(이)가 그렇게 재밌죠~`);
    }
}

const book = new Book();
console.log(book.name);
book.introduce();
// Book.prototype이 아닌 개별 객체에만 클래스 필드가 설정
console.log(Book.prototype.name);
// Book.prorotype에 메소드가 설정
console.log(Book.prototype.introduce);

