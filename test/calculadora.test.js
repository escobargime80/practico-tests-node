import { test } from 'node:test';
import assert from 'node:assert/strict';

import { sumar, dividir } from '../src/calculadora.js'; // <--- Acá sumá dividir

test('sumar -4 + -1 devuelve -3', () => {
  const resultado = sumar(-4, 1);
  assert.equal(resultado, -3);
});

test('dividir 10 / 2 devuelve 5', () => {
  assert.equal(dividir(10, 2), 5);
});

test('dividir por cero lanza error', () => {
  assert.throws(() => dividir(10, 0), { message: 'No se puede dividir por cero' });
});