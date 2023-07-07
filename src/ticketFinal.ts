import { LineaTicket, TicketFinal } from "./constantes";
import { imprimeLineasTicket } from "./imprimirLineasProductos";
import {
  muestraResultadoTotalTicket,
  muestraTotalesPorTipoIva,
} from "./sumatorios";

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const lineas = imprimeLineasTicket(lineasTicket);
  const total = muestraResultadoTotalTicket(lineas);
  const desgloseIva = muestraTotalesPorTipoIva(lineas);
  return {
    lineas: lineas,
    total: total,
    desgloseIva: desgloseIva,
  };
};
