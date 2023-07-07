import { LineaTicket, ResultadoLineaTicket } from "./constantes";
import { crearLineaTicket } from "./lineaTicket";

export const imprimeLineasTicket = (
  lineaTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  const imprimeLinea = lineaTicket.map((producto: LineaTicket) =>
    crearLineaTicket(producto)
  );

  return imprimeLinea;
};
