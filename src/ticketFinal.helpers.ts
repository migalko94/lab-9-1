import { calculoIvaRedondeado } from "./calcularIva";
import {
  LineaTicket,
  ResultadoLineaTicket,
  TotalPorTipoIva,
} from "./constantes";

import { asignarIva, crearLineaTicket } from "./lineaTicket";

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

export const muestraTotalesPorTipoIva = (
  lineasProducto: LineaTicket[]
): TotalPorTipoIva[] =>
  lineasProducto.reduce((totales: TotalPorTipoIva[], linea: LineaTicket) => {
    const tipoIva = linea.producto.tipoIva;
    const totalDeUnTipo = totales.find((total) => total.tipoIva === tipoIva);
    const cuantia = calculoIvaRedondeado(
      linea.producto.precio * linea.cantidad,
      asignarIva(linea.producto)
    );

    totalDeUnTipo
      ? (totalDeUnTipo.cuantia += cuantia)
      : totales.push({ tipoIva, cuantia });

    return totales;
  }, []);
