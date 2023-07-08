import { LineaTicket, TicketFinal } from "./constantes";
import { imprimeLineasTicket } from "./imprimirLineasProductos";
import {
  muestraResultadoTotalTicket,
  muestraTotalesPorTipoIva,
} from "./sumatorios";

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  return {
    lineas: imprimeLineasTicket(lineasTicket),
    total: muestraResultadoTotalTicket(imprimeLineasTicket(lineasTicket)),
    desgloseIva: muestraTotalesPorTipoIva(imprimeLineasTicket(lineasTicket)),
  };
};
