import { LineaTicket, TipoIva } from "./constantes";
import { filtraTipoIva } from "./muestraTotalesPorTipoIva.helper";

describe("filtraTipoIva", () => {
  it("Debe devolver un array con los productos que tengan un tipo de IVA determinado: el general", () => {
    // Arrange
    const productosEjemplo: LineaTicket[] = [
      {
        producto: {
          nombre: "Legumbres",
          precio: 2,
          tipoIva: "general",
        },
        cantidad: 2,
      },
      {
        producto: {
          nombre: "Perfume",
          precio: 20,
          tipoIva: "general",
        },
        cantidad: 3,
      },
      {
        producto: {
          nombre: "Leche",
          precio: 1,
          tipoIva: "superreducidoC",
        },
        cantidad: 6,
      },
      {
        producto: {
          nombre: "Lasaña",
          precio: 5,
          tipoIva: "superreducidoA",
        },
        cantidad: 1,
      },
    ];
    const tipoIva: TipoIva = "general";
    // Act
    const resultadoFuncion = filtraTipoIva(productosEjemplo, tipoIva);
    const resultadoEsperado: LineaTicket[] = [
      {
        producto: {
          nombre: "Legumbres",
          precio: 2,
          tipoIva: "general",
        },
        cantidad: 2,
      },
      {
        producto: {
          nombre: "Perfume",
          precio: 20,
          tipoIva: "general",
        },
        cantidad: 3,
      },
    ];
    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Debe devolver un array con los productos que tengan un tipo de IVA determinado: el superreducido C", () => {
    // Arrange
    const productosEjemplo: LineaTicket[] = [
      {
        producto: {
          nombre: "Legumbres",
          precio: 2,
          tipoIva: "general",
        },
        cantidad: 2,
      },
      {
        producto: {
          nombre: "Perfume",
          precio: 20,
          tipoIva: "general",
        },
        cantidad: 3,
      },
      {
        producto: {
          nombre: "Leche",
          precio: 1,
          tipoIva: "superreducidoC",
        },
        cantidad: 6,
      },
      {
        producto: {
          nombre: "Lasaña",
          precio: 5,
          tipoIva: "superreducidoA",
        },
        cantidad: 1,
      },
    ];
    const tipoIva: TipoIva = "superreducidoC";
    // Act
    const resultadoFuncion = filtraTipoIva(productosEjemplo, tipoIva);
    const resultadoEsperado: LineaTicket[] = [
      {
        producto: {
          nombre: "Leche",
          precio: 1,
          tipoIva: "superreducidoC",
        },
        cantidad: 6,
      },
    ];
    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
