const calculator = {
    a : 10,
    b : 20,
    sum(a,b) {
        return `합 : ${this.a + this.b};`
    },
    multi(a,b){
        return `곱 : ${this.a * this.b};`
    }
};
console.log(calculator.sum());
console.log(calculator.multi());

console.log();
console.log(`2번 ----------------------------------------`);
function Calculator() {
    this.a = 10;
    this.b = 20;

    this.sum = function () {
        return `합 : ${this.a + this.b};`
    }
    this.multi = function () {
        return `곱 : ${this.a * this.b};`
    }
};

const cal = new Calculator();
console.log(cal.sum());
console.log(cal.multi());
