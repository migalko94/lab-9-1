import { calculoIvaRedondeado } from "./calcularIva";
import { controlErroresCalculoIva } from "./constantes";

export const calcularPrecioConIva = (
  precioProducto: number,
  tipoIva: number
) => {
  controlErroresCalculoIva(precioProducto, tipoIva);
  return precioProducto + calculoIvaRedondeado(precioProducto, tipoIva);
};
