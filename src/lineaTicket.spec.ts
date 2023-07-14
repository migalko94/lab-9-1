import { LineaTicket, ResultadoLineaTicket } from "./constantes";
import { crearLineaTicket } from "./lineaTicket";

describe("crearLineaTicket", () => {
  it("Crea línea de ticket de producto con su IVA, precio sin IVA, tipo de IVA, IVA y precio con IVA. En este caso, suma el 21% del precio al producto al tener el tipo general. Se muestra que la cantidad de productos es 2", () => {
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
    const resultadoEsperado: ResultadoLineaTicket = {
      nombre: "Legumbres",
      precioSinIva: 2,
      precioConIva: 2.42,
      tipoIva: "general",
      cantidad: 2,
    };

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Crea línea de ticket de producto con el IVA, precio sin IVA, tipo de IVA, IVA y precio con IVA. En este caso, suma el 21% del precio al producto al tener el tipo general. Se muestra que la cantidad de productos es 3", () => {
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
    const resultadoEsperado: ResultadoLineaTicket = {
      nombre: "Perfume",
      precioSinIva: 20,
      precioConIva: 24.2,
      tipoIva: "general",
      cantidad: 3,
    };

    // Assert

    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Crea línea de ticket de producto con IVA, precio sin IVA, tipo de IVA, IVA y precio con IVA. En este caso, al ser el IVA de 0, el precio con y sin IVA es el mismo. Se muestra que la cantidad de productos es 6", () => {
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
    const resultadoEsperado: ResultadoLineaTicket = {
      nombre: "Leche",
      precioSinIva: 1,
      precioConIva: 1,
      tipoIva: "superreducidoC",
      cantidad: 6,
    };

    // Assert

    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
