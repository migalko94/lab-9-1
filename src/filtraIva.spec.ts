import { LineaTicket, TotalPorTipoIva } from "./constantes";
import { estaTipoIva, filtraTipoIva } from "./filtraIva";

describe("estaTipoIva", () => {
  it("Devuelve true si en el objeto totalPorTipoIva, compuesto por la cuantía de IVA de los productos de un tipo determinado y el tipo de IVA, el tipo de IVA es el mismo que alguno de los del array de productos. En este caso, al haber IVA superreducidoC en las líneas de ticket, debe devolver true", () => {
    // Arrange:
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
        cantidad: 5,
      },
    ];

    const totalTipoIvaSuperreducidoC: TotalPorTipoIva = {
      tipoIva: "superreducidoC",
      cuantia: 27.58,
    };

    // Act:
    const resultadoFuncionSuperreducidoC = estaTipoIva(
      totalTipoIvaSuperreducidoC,
      productosEjemplo
    );

    // Assert:
    expect(resultadoFuncionSuperreducidoC).toBe(true);
  });

  it("Devuelve true si en el objeto totalPorTipoIva, compuesto por la cuantía de IVA de los productos de un tipo determinado y el tipo de IVA, el tipo de IVA es el mismo que alguno de los del array de productos. En este caso, al no haber IVA general en las líneas de ticket, debe devolver false", () => {
    // Arrange:
    const productosEjemplo: LineaTicket[] = [
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
        cantidad: 5,
      },
    ];

    const totalTipoIvaGeneral: TotalPorTipoIva = {
      tipoIva: "general",
      cuantia: 25,
    };

    // Act:
    const resultadoFuncionGeneral = estaTipoIva(
      totalTipoIvaGeneral,
      productosEjemplo
    );

    // Assert:
    expect(resultadoFuncionGeneral).toBe(false);
  });
});

describe("filtraTipoIva", () => {
  it("Devuelve un array de productos del tipo de IVA determinado que se le indica. En este caso, devuelve todos los productos del tipo de IVA general de la cesta de la compra, que son dos", () => {
    // Arrange:
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
        cantidad: 5,
      },
    ];

    // Act:
    const resultadoFuncion = filtraTipoIva(productosEjemplo, "general");
    const resultadoEsperado = [
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

    // Assert:
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Devuelve un array de productos del tipo de IVA determinado que se le indica. En este caso, devuelve todos los productos del tipo de IVA superreducidoA de la cesta de la compra, que es sólo uno", () => {
    // Arrange:
    const productosEjemplo: LineaTicket[] = [
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
        cantidad: 5,
      },
    ];

    // Act:
    const resultadoFuncion = filtraTipoIva(productosEjemplo, "superreducidoA");
    const resultadoEsperado = [
      {
        producto: {
          nombre: "Lasaña",
          precio: 5,
          tipoIva: "superreducidoA",
        },
        cantidad: 5,
      },
    ];

    // Assert:
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
