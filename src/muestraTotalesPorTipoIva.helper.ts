import { LineaTicket, TipoIva } from "./constantes";

export const filtraTipoIva = (
  lineasProducto: LineaTicket[],
  tipoIva: TipoIva
): LineaTicket[] =>
  lineasProducto.filter(
    (lineaProducto) => lineaProducto.producto.tipoIva === tipoIva
  );
