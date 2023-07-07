import { asignarIva } from "./asignarIva";
import { LineaTicket, ResultadoLineaTicket } from "./constantes";
import { calcularPrecioConIva } from "./precioConIva";

export const crearLineaTicket = (
  lineaTicket: LineaTicket
): ResultadoLineaTicket => {
  const porcentajeIva = asignarIva(lineaTicket.producto);
  const precioConIva = calcularPrecioConIva(
    lineaTicket.producto.precio,
    porcentajeIva
  );
  return {
    nombre: lineaTicket.producto.nombre,
    cantidad: lineaTicket.cantidad,
    precioSinIva: lineaTicket.producto.precio,
    tipoIva: lineaTicket.producto.tipoIva,
    precioConIva: precioConIva,
  };
};
