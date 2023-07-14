import { LineaTicket, Producto, ResultadoLineaTicket } from "./constantes";
import { calcularPrecioConIva } from "./precioConIva";

export const asignarIva = (producto: Producto) => {
  switch (producto.tipoIva) {
    case "general":
      return 21;

    case "reducido":
      return 10;

    case "superreducidoA":
      return 5;

    case "superreducidoB":
      return 4;

    case "superreducidoC":
    case "sinIva":
      return 0;
  }
};

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
