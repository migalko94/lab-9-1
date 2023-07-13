import { calculoIvaRedondeado } from "./calcularIva";
import {
  TotalPorTipoIva,
  tiposIva,
  LineaTicket,
  ResultadoLineaTicket,
} from "./constantes";
import { controlErroresLineaProducto } from "./controlErrores-helpers";
import { asignarIva, crearLineaTicket } from "./lineaTicket";
import { filtraTipoIva } from "./muestraTotalesPorTipoIva.helper";

//***1***

export const sumaTotalesSinIva = (lineasProducto: LineaTicket[]): number => {
  controlErroresLineaProducto(lineasProducto);
  return Number(
    lineasProducto
      .reduce(
        (acc, lineaProducto) =>
          acc + lineaProducto.producto.precio * lineaProducto.cantidad,
        0
      )
      .toFixed(2)
  );
};

//***2***

export const ivaTotal = (lineasProducto: LineaTicket[]): number => {
  controlErroresLineaProducto(lineasProducto);
  return lineasProducto.reduce(
    (acc, lineaProducto) =>
      acc +
      calculoIvaRedondeado(
        lineaProducto.producto.precio * lineaProducto.cantidad,
        asignarIva(lineaProducto.producto)
      ),
    0
  );
};

//***3***

export const muestraTotalesPorTipoIva = (
  lineasProducto: LineaTicket[]
): TotalPorTipoIva[] => {
  controlErroresLineaProducto(lineasProducto);
  return tiposIva.map((tipoIva) => ({
    tipoIva,
    cuantia: ivaTotal(filtraTipoIva(lineasProducto, tipoIva)),
  }));
};

//***4***

export const imprimeLineasTicket = (
  lineaTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  controlErroresLineasTicket(lineaTicket);
  return lineaTicket.map((producto: LineaTicket) => crearLineaTicket(producto));
};

const controlErroresLineasTicket = (lineaTicket: LineaTicket[]) => {
  if (!lineaTicket) {
    throw new Error("El parámetro introducido no es correcto");
  }
};
