class Dog {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log('This is' + this._name + ' !');
    }

    static bark() {
        console.log('Woof!');
    }
}

const myDog = new Dog('Buddy');
myDog.introduce(); // This is Buddy !
Dog.bark(); // Woof!