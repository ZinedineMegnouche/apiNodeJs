
//const calc = require('Add')
import { Add, Substract, Multiply } from './calc.mjs';

//Test de la fonction Add()
test('Additione 2 nombre: (1+2)', () => {
    expect(Add(1, 2)).toBe(3);
});

//Test de la fonction Substract()
test('Soustrait 2 nombre: (10-4)', () => {
    expect(Substract(10, 4)).toBe(6);
});

//Test de la fonction Multiply()
test('Multiplie 2 nombre: (4x5)', () => {
    expect(Multiply(4, 5)).toBe(20);
});