//Función auxiliar para calcular el IVA
export const calcularIva = (precioProducto: number, tipoIva: number): number =>
  (precioProducto * tipoIva) / 100;

export const calculoIvaRedondeado = (
  precioProducto: number,
  tipoIva: number
): number => Number(calcularIva(precioProducto, tipoIva).toFixed(2));
