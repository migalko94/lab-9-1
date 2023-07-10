import { LineaTicket, TicketFinal } from "./constantes";
import { imprimeLineasTicket } from "./imprimirLineasProductos";
import {
  muestraResultadoTotalTicket,
  muestraTotalesPorTipoIva,
} from "./sumatorios";

const controlErroresFinal = (lineasTicket: LineaTicket[]) => {
  if (!lineasTicket) {
    throw new Error("El parámetro introducido no es correcto");
  }
};

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  controlErroresFinal(lineasTicket);
  return {
    lineas: imprimeLineasTicket(lineasTicket),
    total: muestraResultadoTotalTicket(imprimeLineasTicket(lineasTicket)),
    desgloseIva: muestraTotalesPorTipoIva(imprimeLineasTicket(lineasTicket)),
  };
};
