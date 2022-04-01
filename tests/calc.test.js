

import { Add, Substract, Multiply } from './calc.mjs';
import { getAll } from "./../server/products.mjs";
import products from "./../server/products.json"

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
// Mauvaise maniere
/*test('Fonction getAll()', () => {
    expect(getAll()).toMatchObject(products);
});*/