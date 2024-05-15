// 클래스 표현식

// 1. 익명 클래스 표현식
let Tutor = class {
    teach() {
        console.log('이해하셨나요~?');
    }
};

// 식별자를 이용해 호출, 기본적으로 constructor 생성
new Tutor().teach();

// 2. 기명 클래스 표현식
let Tutee = class MyTutee {
    learn() {
        console.log('우와~ 이해했어요!');
        // MyTutee 라는 클래스명은 오직 클래스 내에서만 사용할 수 있다.
        // 그렇기 때문에 굳이 기명 클래스 표현식을 사용할 이유는 없다.
        console.log(MyTutee); // [class MyTutee]
    }
};

new Tutee().learn();
// new MyTutee().learn(); ReferenceError: MyTutee is not defined

// 3. 클래스 동적 생성
function makeTutee(message) {

    return class {
        feedback() {
            console.log(message);
        }
    };
}

let SecondTutee = makeTutee("10점 만점에 10점~!");
new SecondTutee().feedback();


