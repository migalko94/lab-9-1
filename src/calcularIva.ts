//Función auxiliar para calcular el IVA

export const calcularIva = (
  precioProducto: number,
  tipoIva: number
): number => {
  const ivaProducto = (precioProducto * tipoIva) / 100;
  return ivaProducto;
};

export const calculoIvaRedondeado = (
  precioProducto: number,
  tipoIva: number
): number => {
  const ivaProducto = calcularIva(precioProducto, tipoIva);
  const ivaRedondeado = Number(ivaProducto.toFixed(2));
  return ivaRedondeado;
};
