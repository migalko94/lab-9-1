import { LineaTicket, TicketFinal } from "./constantes";

import {
  muestraTotalesPorTipoIva,
  ivaTotal,
  sumaTotalesSinIva,
  imprimeLineasTicket,
} from "./ticketFinal.helpers";

const controlErroresFinal = (lineasTicket: LineaTicket[]) => {
  if (!lineasTicket) {
    throw new Error("El parámetro introducido no es correcto");
  }
};

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  controlErroresFinal(lineasTicket);
  return {
    lineas: imprimeLineasTicket(lineasTicket),
    total: {
      totalSinIva: sumaTotalesSinIva(lineasTicket),
      totalConIva: sumaTotalesSinIva(lineasTicket) + ivaTotal(lineasTicket),
      totalIva: ivaTotal(lineasTicket),
    },
    desgloseIva: muestraTotalesPorTipoIva(lineasTicket),
  };
};
