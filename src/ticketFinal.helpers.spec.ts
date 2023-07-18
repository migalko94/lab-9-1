import { LineaTicket, ResultadoLineaTicket, tiposIva } from "./constantes";
import {
  sumaTotalesSinIva,
  ivaTotal,
  imprimeLineasTicket,
  muestraTotalesPorTipoIva,
} from "./ticketFinal.helpers";

describe("sumaTotalesSinIva", () => {
  it("Suma los precios de los productos por su cantidad sin el IVA. Son 4 tipos de productos y 12 unidades", () => {
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

    // Act:
    const resultadoFuncion = sumaTotalesSinIva(productosEjemplo);
    const resultadoEsperado = 75;
    // Assert:
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});

describe("ivaTotal", () => {
  it("Devuelve el importe total de los productos correspondiente al IVA. El IVA de cada tipo de producto se calcula en función del porcentaje correspondiente a su tipo. Por ejemplo, el perfume al 21%, pero la lasaña el 5%", () => {
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
        cantidad: 1,
      },
    ];

    // Act:
    const resultadoFuncion = ivaTotal(productosEjemplo);
    const resultadoEsperado = 13.69;
    // Assert:
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});

describe("muestraTotalesPorTipoIva", () => {
  it("Devuelve un array de objetos con la suma total del importe filtrado por tipo de IVA y el tipo de IVA correspondiente. En este caso, se divide entre general, superreducido A y C", () => {
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
    const resultadoFuncion = muestraTotalesPorTipoIva(
      tiposIva,
      productosEjemplo
    );
    const resultadoEsperado = [
      { tipoIva: "general", cuantia: 13.44 },
      { tipoIva: "superreducidoA", cuantia: 1.25 },
      { tipoIva: "superreducidoC", cuantia: 0 },
    ];

    // Assert:
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Devuelve un array de objetos con la suma total del importe filtrado por tipo de IVA y el tipo de IVA correspondiente. En este caso, se reparte entre superreducido A, B y general", () => {
    // Arrange:
    const productosEjemplo: LineaTicket[] = [
      {
        producto: {
          nombre: "Libros",
          precio: 12,
          tipoIva: "superreducidoB",
        },
        cantidad: 6,
      },
      {
        producto: {
          nombre: "Medicamento",
          precio: 6,
          tipoIva: "superreducidoB",
        },
        cantidad: 1,
      },
      {
        producto: {
          nombre: "Aceite de oliva",
          precio: 5.3,
          tipoIva: "superreducidoA",
        },
        cantidad: 2,
      },

      {
        producto: {
          nombre: "Lasaña",
          precio: 5,
          tipoIva: "superreducidoA",
        },
        cantidad: 3,
      },

      {
        producto: {
          nombre: "Vaqueros",
          precio: 35,
          tipoIva: "general",
        },
        cantidad: 2,
      },
    ];

    // Act:
    const resultadoFuncion = muestraTotalesPorTipoIva(
      tiposIva,
      productosEjemplo
    );
    const resultadoEsperado = [
      { tipoIva: "general", cuantia: 14.7 },
      { tipoIva: "superreducidoA", cuantia: 1.28 },
      { tipoIva: "superreducidoB", cuantia: 3.12 },
    ];

    // Assert:
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});

describe("imprimeLineasTicket", () => {
  it("Imprime una línea de ticket del producto con el IVA que le toque, indicando el precio sin IVA, el tipo de IVA, el IVA y el precio con IVA por cada uno de los productos que le pasemos. En este caso, le pasamos dos productos y realiza el cambio en ambos", () => {
    // Arrange
    const productos: LineaTicket[] = [
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
          nombre: "Leche",
          precio: 1,
          tipoIva: "superreducidoC",
        },
        cantidad: 6,
      },
    ];

    // Act
    const resultadoFuncion = imprimeLineasTicket(productos);
    const resultadoEsperado: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        precioSinIva: 2,
        precioConIva: 2.42,
        tipoIva: "general",
        cantidad: 2,
      },
      {
        nombre: "Leche",
        precioSinIva: 1,
        precioConIva: 1,
        tipoIva: "superreducidoC",
        cantidad: 6,
      },
    ];

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Imprime una línea de ticket del producto con el IVA que le toque, indicando el precio sin IVA, el tipo de IVA, el IVA y el precio con IVA por cada uno de los productos que le pasemos. En este caso, le pasamos un único producto", () => {
    // Arrange

    const productos: LineaTicket[] = [
      {
        producto: {
          nombre: "Perfume",
          precio: 20,
          tipoIva: "general",
        },
        cantidad: 3,
      },
    ];

    // Act

    const resultadoFuncion = imprimeLineasTicket(productos);
    const resultadoEsperado: ResultadoLineaTicket[] = [
      {
        nombre: "Perfume",
        precioSinIva: 20,
        precioConIva: 24.2,
        tipoIva: "general",
        cantidad: 3,
      },
    ];

    // Assert

    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
