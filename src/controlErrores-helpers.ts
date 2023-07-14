import { LineaTicket, TipoIva } from "./constantes";

export const controlErroresFiltro = (
  lineasProducto: LineaTicket[],
  tipoIva: TipoIva
) => {
  if (!lineasProducto || !tipoIva) {
    throw new Error("El parámetro introducido no es correcto");
  }
};
