import { test } from 'node:test';
import assert from 'node:assert/strict';
import { aplicarDescuento } from '../src/tienda.js';

test('un total de 40000 no tiene descuento y devuelve 40000', () => {
  assert.equal(aplicarDescuento(40000), 40000);
});

test('un total de 50000 aplica 10% de descuento y devuelve 45000', () => {
  assert.equal(aplicarDescuento(50000), 45000);
});

test('un total de 60000 aplica 10% de descuento y devuelve 54000', () => {
  assert.equal(aplicarDescuento(60000), 54000);
});