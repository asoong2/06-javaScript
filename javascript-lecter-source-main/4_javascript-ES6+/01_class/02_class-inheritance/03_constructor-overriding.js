// 03. 생성자 오버라이딩

/*
클래스가 다른 클래스를 상속 받고 constructor가 없는 경우에는 비어있는 constructor가 만들어진다.
class Tiger extends Animal {
    constructor(...args) {
        super(...agrs);
    }
}
*/

// Animal 클래스 선언
class Animal {

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat(foodWeight){
        this.weight += foodWeight;
        console.log(`${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
    }

    move(lostWeight) {
        if(this.weight > lostWeight)
        this.weight -= lostWeight;
        console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`);
    }

}

// Animal 클래스를 상속한 Deer 클래스
class Deer extends Animal {
    
    constructor(name, weight, legLength) {
        // this.name = name;
        // this.weight = weight;
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        // 상속 클래스의 생성자에서는 반드시 super(...)를 호출해야 하는데 호출하지 않아 발생하는 에러
        super(name, weight);    
        // 부모 생성자에 전달해줘야 하는 값은 super를 통해 전달한다
        // super는 this를 호출하기 전에 반드시 호출해야 한다(부모 클래스의 생성자가 처리해주길 기대한다)
        this.lengLength = legLength;
    }

    hide(place) {
        console.log(`${this.name}(은)는 ${place}에 숨습니다.`);
    }
}

let deer = new Deer('슬픈 눈망울의 사슴', 40, 1);
deer.hide('동굴 안');