
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet() {
        return this.name + '-' + this.age;
    }

    // greet(){
    //     console.log(this.name);
    // }
}

class Zebra extends Animal {
    constructor(name, age, spots){
        super(name, age)
        this.spots = spots
    }
}

exports.Animal = Animal;
exports.Zebra = Zebra;






