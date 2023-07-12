import { LineaTicket, ResultadoLineaTicket, TipoIva } from "./constantes";

export const controlErroresLineaProducto = (lineasProducto: LineaTicket[]) => {
  if (!lineasProducto) {
    throw new Error("El parámetro introducido no es correcto");
  }
};

export const controlErrorResultadoLineaTicket = (
  lineaProducto: ResultadoLineaTicket
) => {
  if (!lineaProducto) {
    throw new Error("El parámetro introducido no es correcto");
  }
};

export const controlErroresResultadoLineasTicket = (
  lineasProducto: LineaTicket[]
) => {
  if (!lineasProducto) {
    throw new Error("El parámetro introducido no es correcto");
  }
};

export const controlErroresFiltro = (
  lineasProducto: LineaTicket[],
  tipoIva: TipoIva
) => {
  if (!lineasProducto || !tipoIva) {
    throw new Error("El parámetro introducido no es correcto");
  }
};
