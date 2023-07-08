import { ResultadoLineaTicket } from "./constantes";
import {
  ivaTotal,
  productoSinIvaPorCantidad,
  productosConIvaPorCantidad,
  sumaTotalesConIva,
  sumaTotalesPorTipoIva,
  sumaTotalesSinIva,
} from "./sumatorios";

//Multiplicación de productos sin IVA por su cantidad:

describe("productoSinIvaPorCantidad", () => {
  it("Multiplica el producto sin el IVA por su cantidad", () => {
    // Arrange
    const productoEjemplo: ResultadoLineaTicket = {
      nombre: "Legumbres",
      precioSinIva: 2,
      precioConIva: 2.42,
      tipoIva: "general",
      cantidad: 2,
    };

    // Act

    const resultadoFuncion = productoSinIvaPorCantidad(productoEjemplo);
    const resultadoEsperado = 4;
    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Multiplica el producto sin el IVA por su cantidad", () => {
    // Arrange
    const productoEjemplo: ResultadoLineaTicket = {
      nombre: "Libro",
      precioSinIva: 24,
      precioConIva: 24.96,
      tipoIva: "superreducidoB",
      cantidad: 5,
    };

    // Act

    const resultadoFuncion = productoSinIvaPorCantidad(productoEjemplo);
    const resultadoEsperado = 120;
    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});

//Multiplicación de productos con IVA por su cantidad:

describe("productoConIvaPorCantidad", () => {
  it("Multiplica el producto con el IVA por su cantidad", () => {
    // Arrange
    const productoEjemplo: ResultadoLineaTicket = {
      nombre: "Legumbres",
      precioSinIva: 2,
      precioConIva: 2.42,
      tipoIva: "general",
      cantidad: 2,
    };

    // Act
    const resultadoFuncion = productosConIvaPorCantidad(productoEjemplo);
    const resultadoEsperado = 4.84;
    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Multiplica el producto con el IVA por su cantidad", () => {
    // Arrange
    const productoEjemplo: ResultadoLineaTicket = {
      nombre: "Libro",
      precioSinIva: 24,
      precioConIva: 24.96,
      tipoIva: "superreducidoB",
      cantidad: 5,
    };
    // Act
    const resultadoFuncion = productosConIvaPorCantidad(productoEjemplo);
    const resultadoEsperado = 124.8;
    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});

//Sumatorio de totales sin IVA:

describe("sumaTotalesSinIva", () => {
  it("Suma los precios de los productos por su cantidad sin el IVA", () => {
    // Arrange
    const productosEjemplo: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        precioSinIva: 2,
        precioConIva: 2.42,
        tipoIva: "general",
        cantidad: 2,
      },
      {
        nombre: "Perfume",
        precioSinIva: 20,
        precioConIva: 24.2,
        tipoIva: "general",
        cantidad: 3,
      },

      {
        nombre: "Leche",
        precioSinIva: 1,
        precioConIva: 1,
        tipoIva: "superreducidoC",
        cantidad: 6,
      },
      {
        nombre: "Lasaña",
        precioSinIva: 5,
        precioConIva: 5.25,
        tipoIva: "superreducidoA",
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

//Sumatorio de totales con IVA:

describe("sumaTotalesConIva", () => {
  it("Suma los precios de los productos por su cantidad con el IVA", () => {
    // Arrange:
    const productosEjemplo: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        precioSinIva: 2,
        precioConIva: 2.42,
        tipoIva: "general",
        cantidad: 2,
      },
      {
        nombre: "Perfume",
        precioSinIva: 20,
        precioConIva: 24.2,
        tipoIva: "general",
        cantidad: 3,
      },
      {
        nombre: "Leche",
        precioSinIva: 1,
        precioConIva: 1,
        tipoIva: "superreducidoC",
        cantidad: 6,
      },
      {
        nombre: "Lasaña",
        precioSinIva: 5,
        precioConIva: 5.25,
        tipoIva: "superreducidoA",
        cantidad: 1,
      },
    ];

    // Act:
    const resultadoFuncion = sumaTotalesConIva(productosEjemplo);
    const resultadoEsperado = 88.69;
    // Assert:
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});

//Filtro por tipo de IVA:

describe("sumaTotalesSinIva", () => {
  it("Suma los precios de los productos por su cantidad sin el IVA", () => {
    // Arrange:
    const productosEjemplo: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        precioSinIva: 2,
        precioConIva: 2.42,
        tipoIva: "general",
        cantidad: 2,
      },
      {
        nombre: "Perfume",
        precioSinIva: 20,
        precioConIva: 24.2,
        tipoIva: "general",
        cantidad: 3,
      },
      {
        nombre: "Leche",
        precioSinIva: 1,
        precioConIva: 1,
        tipoIva: "superreducidoC",
        cantidad: 6,
      },
      {
        nombre: "Lasaña",
        precioSinIva: 5,
        precioConIva: 5.25,
        tipoIva: "superreducidoA",
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

//IVA total:

describe("ivaTotal", () => {
  it("Devuelve la cantidad total de IVA", () => {
    // Arrange:
    const productosEjemplo: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        precioSinIva: 2,
        precioConIva: 2.42,
        tipoIva: "general",
        cantidad: 2,
      },
      {
        nombre: "Perfume",
        precioSinIva: 20,
        precioConIva: 24.2,
        tipoIva: "general",
        cantidad: 3,
      },
      {
        nombre: "Leche",
        precioSinIva: 1,
        precioConIva: 1,
        tipoIva: "superreducidoC",
        cantidad: 6,
      },
      {
        nombre: "Lasaña",
        precioSinIva: 5,
        precioConIva: 5.25,
        tipoIva: "superreducidoA",
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

//Sumatorio de totales con IVA:

describe("sumaTotalesPorTipoIva", () => {
  it("Suma los precios de los productos por su cantidad con el IVA filtrado por el tipo de IVA", () => {
    // Arrange:
    const productosEjemplo: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        precioSinIva: 2,
        precioConIva: 2.42,
        tipoIva: "general",
        cantidad: 2,
      },
      {
        nombre: "Perfume",
        precioSinIva: 20,
        precioConIva: 24.2,
        tipoIva: "general",
        cantidad: 3,
      },
      {
        nombre: "Leche",
        precioSinIva: 1,
        precioConIva: 1,
        tipoIva: "superreducidoC",
        cantidad: 6,
      },
      {
        nombre: "Lasaña",
        precioSinIva: 5,
        precioConIva: 5.25,
        tipoIva: "superreducidoA",
        cantidad: 1,
      },
    ];

    // Act:
    const resultadoFuncionGeneral = sumaTotalesPorTipoIva(
      productosEjemplo,
      "general"
    );

    const resultadoFuncionReducido = sumaTotalesPorTipoIva(
      productosEjemplo,
      "reducido"
    );

    const resultadoFuncionSuperreducidoA = sumaTotalesPorTipoIva(
      productosEjemplo,
      "superreducidoA"
    );

    const resultadoFuncionSuperreducidoB = sumaTotalesPorTipoIva(
      productosEjemplo,
      "superreducidoB"
    );

    const resultadoFuncionSuperreducidoC = sumaTotalesPorTipoIva(
      productosEjemplo,
      "superreducidoC"
    );

    const resultadoFuncionSinIva = sumaTotalesPorTipoIva(
      productosEjemplo,
      "sinIva"
    );

    const resultadoEsperadoGeneral = 77.44;
    const resultadoEsperadoReducido = 0;
    const resultadoEsperadoSuperreducidoA = 5.25;
    const resultadoEsperadoSuperreducidoB = 0;
    const resultadoEsperadoSuperreducidoC = 6;
    const resultadoEsperadoSinIva = 0;

    // Assert:
    expect(resultadoFuncionGeneral).toEqual(resultadoEsperadoGeneral);
    expect(resultadoFuncionReducido).toEqual(resultadoEsperadoReducido);
    expect(resultadoFuncionSuperreducidoA).toEqual(
      resultadoEsperadoSuperreducidoA
    );
    expect(resultadoFuncionSuperreducidoB).toEqual(
      resultadoEsperadoSuperreducidoB
    );
    expect(resultadoFuncionSuperreducidoC).toEqual(
      resultadoEsperadoSuperreducidoC
    );
    expect(resultadoFuncionSinIva).toEqual(resultadoEsperadoSinIva);
  });
});
