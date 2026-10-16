export function aplicarDescuento(total) {
  if (total >= 50000) { // <--- Cambiado de > a >=
    return total * 0.9;
  }
  return total;
}