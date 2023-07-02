import { asignarIva } from "./asignarIva";
import { calculoIvaRedondeado } from "./calcularIva";
import { LineaTicket, LineaTicketProducto } from "./constantes";
import { calcularPrecioConIva } from "./precioConIva";

export const crearLineaTicket = (
  lineaTicket: LineaTicket
): LineaTicketProducto => {
  const porcentajeIva = asignarIva(lineaTicket.producto);
  const productoIva = calculoIvaRedondeado(
    lineaTicket.producto.precio,
    porcentajeIva
  );
  const precioConIva = calcularPrecioConIva(
    lineaTicket.producto.precio,
    porcentajeIva
  );

  return {
    nombre: lineaTicket.producto.nombre,
    precioSinIva: lineaTicket.producto.precio,
    tipoIva: lineaTicket.producto.tipoIva,
    productoIvaPorcentaje: porcentajeIva,
    productoIva: productoIva,
    productoIvaIncluido: precioConIva,
    cantidad: lineaTicket.cantidad,
  };
};
