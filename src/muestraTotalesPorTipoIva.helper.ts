import { LineaTicket, TipoIva } from "./constantes";
import { controlErroresFiltro } from "./controlErrores-helpers";

export const filtraTipoIva = (
  lineasProducto: LineaTicket[],
  tipoIva: TipoIva
): LineaTicket[] => {
  controlErroresFiltro(lineasProducto, tipoIva);
  return lineasProducto.filter(
    (lineaProducto) => lineaProducto.producto.tipoIva === tipoIva
  );
};
