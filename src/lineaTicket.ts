import { LineaTicket, Producto, ResultadoLineaTicket } from "./constantes";
import { calcularPrecioConIva } from "./precioConIva";

export const asignarIva = (producto: Producto) => {
  controlErrorAsignacionIva(producto);
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

const controlErrorAsignacionIva = (producto: Producto) => {
  if (!producto) {
    throw new Error("El parámetro introducido no es correcto");
  }
};

const controlErrorLineaTicket = (lineaTicket: LineaTicket) => {
  if (!lineaTicket) {
    throw new Error("El parámetro introducido no es correcto");
  }
};

export const crearLineaTicket = (
  lineaTicket: LineaTicket
): ResultadoLineaTicket => {
  controlErrorLineaTicket(lineaTicket);
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
