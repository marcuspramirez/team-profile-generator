const {Animal, Zebra} = require('../../sample');

describe('Sample file test', () => {
    describe('Animal', () => {
        test('should correctly set name', () => {
            const name=  'Bob';
            const a = new Animal(name, null);
            expect(a.name).toEqual(name);
        })

        test('should correctly set age', () => {
            const age=  15;
            const a = new Animal(null, age);
            expect(a.age).toEqual(age);
        })

        test('should correctly return name when greetinge', () => {
            const name = 'Bob';
            const age=  15;
            const a = new Animal(name, age);
            const results = a.greet();
            expect(results).toEqual(name);
        })
    })
    describe('Zebra', () => {
        test('should correctly set name', () => {
            const name=  'Bob';
            const a = new Zebra(name, null);
            expect(a.name).toEqual(name);
        })

        test('should correctly set age', () => {
            const age=  15;
            const a = new Zebra(null, age);
            expect(a.age).toEqual(age);
        })

        test('should correctly return name when greetinge', () => {
            const name = 'Bob';
            const age=  15;
            const a = new Zebra(name, age);
            const results = a.greet();
            expect(results).toEqual(name);
        })
    })
})