//Función auxiliar para calcular el IVA
export const calcularIva = (precioProducto: number, tipoIva: number): number =>
  (precioProducto * tipoIva) / 100;

export const calculoIvaRedondeado = (
  precioProducto: number,
  tipoIva: number
): number => {
  const ivaProducto = calcularIva(precioProducto, tipoIva);
  return Number(ivaProducto.toFixed(2));
};
