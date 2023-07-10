import { LineaTicket, ResultadoLineaTicket } from "./constantes";
import { crearLineaTicket } from "./lineaTicket";

export const imprimeLineasTicket = (
  lineaTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  controlErroresLineasTicket(lineaTicket);
  return lineaTicket.map((producto: LineaTicket) => crearLineaTicket(producto));
};

const controlErroresLineasTicket = (lineaTicket: LineaTicket[]) => {
  if (!lineaTicket) {
    throw new Error("El parámetro introducido no es correcto");
  }
};
