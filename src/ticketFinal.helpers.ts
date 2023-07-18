import { calculoIvaRedondeado } from "./calcularIva";
import { TipoIva } from "./constantes";
import {
  LineaTicket,
  ResultadoLineaTicket,
  TotalPorTipoIva,
} from "./constantes";

import { asignarIva, crearLineaTicket } from "./lineaTicket";
import { estaTipoIva, filtraTipoIva } from "./filtraIva";

export const sumaTotalesSinIva = (lineasProducto: LineaTicket[]): number =>
  Number(
    lineasProducto
      .reduce(
        (acc, lineaProducto) =>
          acc + lineaProducto.producto.precio * lineaProducto.cantidad,
        0
      )
      .toFixed(2)
  );

export const ivaTotal = (lineasProducto: LineaTicket[]): number =>
  lineasProducto.reduce(
    (acc, lineaProducto) =>
      acc +
      calculoIvaRedondeado(
        lineaProducto.producto.precio * lineaProducto.cantidad,
        asignarIva(lineaProducto.producto)
      ),
    0
  );

export const imprimeLineasTicket = (
  lineaTicket: LineaTicket[]
): ResultadoLineaTicket[] =>
  lineaTicket.map((producto: LineaTicket) => crearLineaTicket(producto));

export const mapeaATotalPorTipoIva = (
  tipoIva: TipoIva,
  lineasTicket: LineaTicket[]
): TotalPorTipoIva => {
  return {
    tipoIva,
    cuantia: ivaTotal(filtraTipoIva(lineasTicket, tipoIva)),
  };
};

export const muestraTotalesPorTipoIva = (
  tiposIva: TipoIva[],
  lineasTicket: LineaTicket[]
): TotalPorTipoIva[] =>
  tiposIva
    .map((tipoIva) => mapeaATotalPorTipoIva(tipoIva, lineasTicket))
    .filter((totalPorTipoIva) => estaTipoIva(totalPorTipoIva, lineasTicket));
