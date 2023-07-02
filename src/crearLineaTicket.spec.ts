import { LineaTicket, LineaTicketProducto } from "./constantes";
import { crearLineaTicket } from "./lineaTicket";

describe("crearLineaTicket", () => {
  it("Crea línea de ticket de producto con el IVA que le toque, indicando el precio sin IVA, el tipo de IVA, el IVA y el precio con IVA", () => {
    // Arrange
    const productoEjemplo: LineaTicket = {
      producto: {
        nombre: "Legumbres",
        precio: 2,
        tipoIva: "general",
      },
      cantidad: 2,
    };

    // Act

    const resultadoFuncion = crearLineaTicket(productoEjemplo);
    const resultadoEsperado: LineaTicketProducto = {
      nombre: "Legumbres",
      precioSinIva: 2,
      productoIva: 0.42,
      productoIvaIncluido: 2.42,
      productoIvaPorcentaje: 21,
      tipoIva: "general",
      cantidad: 2,
    };
    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Crea línea de ticket de producto con el IVA que le toque, indicando el precio sin IVA, el tipo de IVA, el IVA y el precio con IVA", () => {
    // Arrange
    const productoEjemplo: LineaTicket = {
      producto: {
        nombre: "Perfume",
        precio: 20,
        tipoIva: "general",
      },
      cantidad: 3,
    };

    // Act

    const resultadoFuncion = crearLineaTicket(productoEjemplo);
    const resultadoEsperado: LineaTicketProducto = {
      nombre: "Perfume",
      precioSinIva: 20,
      productoIva: 4.2,
      productoIvaIncluido: 24.2,
      productoIvaPorcentaje: 21,
      tipoIva: "general",
      cantidad: 3,
    };
    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Crea línea de ticket de producto con el IVA que le toque, indicando el precio sin IVA, el tipo de IVA, el IVA y el precio con IVA", () => {
    // Arrange
    const productoEjemplo: LineaTicket = {
      producto: {
        nombre: "Leche",
        precio: 1,
        tipoIva: "superreducidoC",
      },
      cantidad: 6,
    };

    // Act

    const resultadoFuncion = crearLineaTicket(productoEjemplo);
    const resultadoEsperado: LineaTicketProducto = {
      nombre: "Leche",
      precioSinIva: 1,
      productoIva: 0,
      productoIvaIncluido: 1,
      productoIvaPorcentaje: 0,
      tipoIva: "superreducidoC",
      cantidad: 6,
    };
    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
