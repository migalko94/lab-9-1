import { LineaTicket, LineaTicketProducto } from "./constantes";
import { crearLineaTicket } from "./lineaTicket";

export const imprimeLineasTicket = (
  lineaTicket: LineaTicket[]
): LineaTicketProducto[] => {
  const imprimeLinea = lineaTicket.map((producto: LineaTicket) =>
    crearLineaTicket(producto)
  );

  return imprimeLinea;
};
