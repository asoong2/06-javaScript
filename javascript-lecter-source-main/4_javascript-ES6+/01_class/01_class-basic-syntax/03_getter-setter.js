// getter, setter
class Product {

    constructor(name, price) {
        // setter 메소드를 호출한다.
        this.name = name;
        this.price = price;
    }

    /* getter, setter 내부에서는 _name, _price로 실제 값에 접근한다.
    그냥 name, price를 사용하게 되면 해당 코드는 getter, setter 메소드를 호출하는 의미가 된다. */

    // getter 함수
    get name() {
        console.log('get name 동작');
        return this._name;
        // this.name 이라고 작성하면 name의 getter를 호출하게 되어 stack over flow가 발생한다.
        // RangeError: Maximum call stack size exceeded
        // this.(get) name() 함수 계속 호출한다고 생각하면 됨! => get name 동작이 무한 반복됨
    }
    get price() {
        console.log('get price 동작');
        return this._price;
    }

    //setter 함수
    set name(value) {
        console.log('set name 동작');
        this._name = value;
    }
    set price(value) {
        console.log('set price 동작');
        if (value <= 0) {
            console.log('가격은 음수일 수 없습니다.');
            this._price = 0;
            return;
        }
        this._price = value;
    }
}

let phone = new Product('전화기', 23000);
console.log(phone.name, phone.price);

let computer = new Product('컴퓨터', -1500000);
console.log(phone.name, computer.price);

// 객체를 생성할 때 constructor 호출 (setter 메소드 호출)
// (가격이 음수기 때문에) 가격은 음수일 수 없습니다 호출
// getter 메소드 호출
// let computer 출력

