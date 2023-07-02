import { calculoIvaRedondeado } from "./calcularIva";

export const calcularPrecioConIva = (
  precioProducto: number,
  tipoIva: number
) => {
  const ivaProducto: number = calculoIvaRedondeado(precioProducto, tipoIva);
  const precioConIva = precioProducto + ivaProducto;
  return precioConIva;
};
