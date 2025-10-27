const Car = require('./car');

function foo () {
    return 'the foo'
}

// Test away!
describe('our first test', () => {
    test('sanity', () => {
        expect(true).toBe(true);
        expect(false).toBe(false);
        expect(0).toBeFalsy();
        expect(5).toBeGreaterThan(3);
    })
    test('objects', () => {
        const o = { a: 1 }
        const oo = { a: 1 }
        const ooo = oo
        expect(o).toBe(o);
        expect(oo).toBe(ooo);
        expect(o).toEqual(oo);
    })
    test('objects agian', () => {
        expect({ a: 1 }).toEqual({ a: 1 });
    })
})
describe('foo function', () => {
    test('foo returns the foo', () => {
        expect(foo()).toBe('the foo');
        expect(foo()).toHaveLength(7);
    })
})
describe('Car class', () => {
    let prius
    beforeEach(() => {
        prius = new Car('Toyota', 'Prius')
    })
    test('car is defined', () => {
        expect(Car).toBeDefined();
        expect(Car).toBeInstanceOf(Function);
    })
    test('car has model and make', () => {
        expect(prius).toHaveProperty('make','Toyota');
        expect(prius).toHaveProperty('model','Prius');
        expect(prius).toHaveProperty('odometer', 0)
        expect(prius.make).toBeDefined();
        expect(prius.model).toBeDefined();
        expect(prius.make).toBe('Toyota');
        expect(prius.model).toBe('Prius');
        expect(prius).toMatchObject({ make: 'Toyota', model: 'Prius' })
    })
    test('New cars start with the odometer at 0', () => {
        expect(new Car).toHaveProperty('odometer', 0)
    })
    test('Cars have a drive method', () => {
        expect(prius.drive).toBeDefined();
        expect(prius.drive).toBe(Car.prototype.drive)
    })
    test('Drive method takes distance and increases odometer by that distance', () => {
        prius.drive(10)
        expect(prius.odometer).toBe(10)
        prius.drive(50)
        expect(prius.odometer).toBe(60)
    })
    test('driveAsync method resolves the updated odometer', async () => {
        let updatedOdometer = await prius.driveAsync(7)
        expect(updatedOdometer).toBe(7)
        updatedOdometer = await prius.driveAsync(6)
        expect(updatedOdometer).toBe(13)
    })
})
