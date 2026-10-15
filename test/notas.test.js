import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { clasificar } from '../src/notas.js';

describe('clasificar', () => {
  test('3.99 da LIBRE', () => {
    assert.equal(clasificar(3.99), 'LIBRE');
  });
  test('4 da REGULAR', () => {
    assert.equal(clasificar(4), 'REGULAR');
  });
  test('5.99 da REGULAR', () => {
    assert.equal(clasificar(5.99), 'REGULAR');
  });
  test('6 da PROMOCIONA', () => {
    assert.equal(clasificar(6), 'PROMOCIONA');
  });
  test('10 da PROMOCIONA', () => {
    assert.equal(clasificar(10), 'PROMOCIONA');
  });
  test('11 lanza RangeError', () => {
    assert.throws(() => clasificar(11), RangeError);
  });
});