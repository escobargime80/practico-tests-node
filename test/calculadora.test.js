import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sumar } from '../src/calculadora.js';

test('sumar -4 + -1 devuelve -3', () => {
  const resultado = sumar(-4, 1);
  assert.equal(resultado, -3);
});