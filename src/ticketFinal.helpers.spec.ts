import { LineaTicket, ResultadoLineaTicket } from "./constantes";
import {
  sumaTotalesSinIva,
  muestraTotalesPorTipoIva,
  ivaTotal,
  imprimeLineasTicket,
} from "./ticketFinal.helpers";

//***1***

describe("sumaTotalesSinIva", () => {
  it("Debe devolver un throw si los productos introducidos son undefined", () => {
    // Arrange
    const productos: any = undefined;

    // Act

    const result = () => sumaTotalesSinIva(productos);
    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si los productos introducidos son null", () => {
    // Arrange
    const productos: any = null;

    // Act

    const result = () => sumaTotalesSinIva(productos);
    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Suma los precios de los productos por su cantidad sin el IVA", () => {
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

//***2***

describe("ivaTotal", () => {
  it("Debe devolver un throw si los productos introducidos son undefined", () => {
    // Arrange
    const productos: any = undefined;

    // Act

    const result = () => ivaTotal(productos);
    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si los productos introducidos son null", () => {
    // Arrange
    const productos: any = null;

    // Act

    const result = () => ivaTotal(productos);
    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Devuelve el importe total de los productos correspondiente al IVA", () => {
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

//***3***

describe("muestraTotalesPorTipoIva", () => {
  it("Debe devolver un throw si los productos introducidos son undefined", () => {
    // Arrange
    const productosEjemplo: any = undefined;

    // Act
    const result = () => muestraTotalesPorTipoIva(productosEjemplo);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si los productos introducidos son null", () => {
    // Arrange
    const productosEjemplo: any = null;

    // Act
    const result = () => muestraTotalesPorTipoIva(productosEjemplo);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Devuelve un array de objetos con la suma total del importe filtrado por tipo de IVA y el tipo de IVA correspondiente", () => {
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
    const resultadoFuncion = muestraTotalesPorTipoIva(productosEjemplo);
    const resultadoEsperado = [
      { tipoIva: "general", cuantia: 13.44 },
      { tipoIva: "reducido", cuantia: 0 },
      { tipoIva: "sinIva", cuantia: 0 },
      { tipoIva: "superreducidoA", cuantia: 1.25 },
      { tipoIva: "superreducidoB", cuantia: 0 },
      { tipoIva: "superreducidoC", cuantia: 0 },
    ];

    // Assert:
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});

it("Devuelve un array de objetos con la suma total del importe filtrado por tipo de IVA y el tipo de IVA correspondiente", () => {
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
  const resultadoFuncion = muestraTotalesPorTipoIva(productosEjemplo);
  const resultadoEsperado = [
    { tipoIva: "general", cuantia: 14.7 },
    { tipoIva: "reducido", cuantia: 0 },
    { tipoIva: "sinIva", cuantia: 0 },
    { tipoIva: "superreducidoA", cuantia: 1.28 },
    { tipoIva: "superreducidoB", cuantia: 3.12 },
    { tipoIva: "superreducidoC", cuantia: 0 },
  ];

  // Assert:
  expect(resultadoFuncion).toEqual(resultadoEsperado);
});

//***4***

describe("imprimeLineasTicket", () => {
  it("Debe devolver un throw si productos es undefined", () => {
    // Arrange
    const productos: any = undefined;

    // Act
    const result = () => imprimeLineasTicket(productos);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si productos es null", () => {
    // Arrange
    const productos: any = null;

    // Act
    const result = () => imprimeLineasTicket(productos);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Imprime una línea de ticket del producto con el IVA que le toque, indicando el precio sin IVA, el tipo de IVA, el IVA y el precio con IVA por cada uno de los productos que le pasemos", () => {
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

  it("Imprime una línea de ticket del producto con el IVA que le toque, indicando el precio sin IVA, el tipo de IVA, el IVA y el precio con IVA por cada uno de los productos que le pasemos", () => {
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
