import { LineaTicket, ResultadoLineaTicket } from "./constantes";
import { crearLineaTicket } from "./lineaTicket";

export const imprimeLineasTicket = (
  lineaTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  return lineaTicket.map((producto: LineaTicket) => crearLineaTicket(producto));
};
