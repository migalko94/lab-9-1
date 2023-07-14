import { calculoIvaRedondeado } from "./calcularIva";
import {
  TotalPorTipoIva,
  tiposIva,
  LineaTicket,
  ResultadoLineaTicket,
} from "./constantes";

import { asignarIva, crearLineaTicket } from "./lineaTicket";
import { filtraTipoIva } from "./muestraTotalesPorTipoIva.helper";

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

export const muestraTotalesPorTipoIva = (
  lineasProducto: LineaTicket[]
): TotalPorTipoIva[] =>
  tiposIva.map((tipoIva) => ({
    tipoIva,
    cuantia: ivaTotal(filtraTipoIva(lineasProducto, tipoIva)),
  }));

export const imprimeLineasTicket = (
  lineaTicket: LineaTicket[]
): ResultadoLineaTicket[] =>
  lineaTicket.map((producto: LineaTicket) => crearLineaTicket(producto));
