//Función auxiliar para calcular el IVA:

import { controlErroresCalculoIva } from "./constantes";

export const calcularIva = (
  precioProducto: number,
  tipoIva: number
): number => {
  controlErroresCalculoIva(precioProducto, tipoIva);
  return (precioProducto * tipoIva) / 100;
};

export const calculoIvaRedondeado = (
  precioProducto: number,
  tipoIva: number
): number => {
  controlErroresCalculoIva(precioProducto, tipoIva);
  return Number(calcularIva(precioProducto, tipoIva).toFixed(2));
};
