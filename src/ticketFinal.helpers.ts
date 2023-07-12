import { calculoIvaRedondeado } from "./calcularIva";
import {
  TotalPorTipoIva,
  tiposIva,
  LineaTicket,
  ResultadoLineaTicket,
} from "./constantes";
import {
  controlErroresLineaProducto,
  controlErroresResultadoLineasTicket,
} from "./controlErroresSumatorios";
import { asignarIva, crearLineaTicket } from "./lineaTicket";

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
  controlErroresResultadoLineasTicket(lineasProducto);
  return tiposIva.map((tipoIva) => ({
    tipoIva,
    cuantia: Number(
      lineasProducto
        .filter((lineaProducto) => lineaProducto.producto.tipoIva === tipoIva)
        .reduce(
          (acc, lineaProducto) =>
            acc +
            (lineaProducto.producto.precio +
              calculoIvaRedondeado(
                lineaProducto.producto.precio,
                asignarIva(lineaProducto.producto)
              )) *
              lineaProducto.cantidad,
          0
        )
        .toFixed(2)
    ),
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
