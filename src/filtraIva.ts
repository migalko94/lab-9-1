import { LineaTicket, TipoIva, TotalPorTipoIva } from "./constantes";

export const estaTipoIva = (
  totalPorTipoIva: TotalPorTipoIva,
  lineasTicket: LineaTicket[]
): boolean =>
  lineasTicket.some(
    (linea) => linea.producto.tipoIva === totalPorTipoIva.tipoIva
  );

export const filtraTipoIva = (
  lineasProducto: LineaTicket[],
  tipoIva: TipoIva
): LineaTicket[] =>
  lineasProducto.filter(
    (lineaProducto) => lineaProducto.producto.tipoIva === tipoIva
  );
