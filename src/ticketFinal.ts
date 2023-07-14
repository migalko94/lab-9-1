import { LineaTicket, TicketFinal } from "./constantes";

import {
  ivaTotal,
  sumaTotalesSinIva,
  imprimeLineasTicket,
  muestraTotalesPorTipoIva,
} from "./ticketFinal.helpers";

const controlErroresLineaTicket = (lineasTicket: LineaTicket[]) => {
  if (!lineasTicket) {
    throw new Error("El parámetro introducido no es correcto");
  }
};

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  controlErroresLineaTicket(lineasTicket);
  const subtotal = sumaTotalesSinIva(lineasTicket);
  const totalIva = ivaTotal(lineasTicket);
  return {
    lineas: imprimeLineasTicket(lineasTicket),
    total: {
      totalSinIva: subtotal,
      totalConIva: subtotal + totalIva,
      totalIva: totalIva,
    },
    desgloseIva: muestraTotalesPorTipoIva(lineasTicket),
  };
};
