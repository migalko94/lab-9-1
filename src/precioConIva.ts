import { calculoIvaRedondeado } from "./calcularIva";

export const calcularPrecioConIva = (precioProducto: number, tipoIva: number) =>
  precioProducto + calculoIvaRedondeado(precioProducto, tipoIva);
