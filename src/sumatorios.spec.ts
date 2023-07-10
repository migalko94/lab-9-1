import { ResultadoLineaTicket, TipoIva } from "./constantes";
import {
  ivaTotal,
  productoSinIvaPorCantidad,
  productosConIvaPorCantidad,
  sumaTotalesConIva,
  sumaTotalesPorTipoIva,
  sumaTotalesSinIva,
  filtraTipoIva,
  muestraResultadoTotalTicket,
  muestraTotalesPorTipoIva,
} from "./sumatorios";

//Multiplicación productos sin IVA por cantidad:

describe("productoSinIvaPorCantidad", () => {
  it("Debe devolver un throw si el producto introducido es undefined", () => {
    // Arrange
    const producto: any = undefined;

    // Act

    const result = () => productoSinIvaPorCantidad(producto);
    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si el producto introducido es null", () => {
    // Arrange
    const producto: any = null;

    // Act

    const result = () => productoSinIvaPorCantidad(producto);
    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

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

//Multiplicación productos con IVA por cantidad:

describe("productoConIvaPorCantidad", () => {
  it("Debe devolver un throw si el producto introducido es undefined", () => {
    // Arrange
    const producto: any = undefined;

    // Act

    const result = () => productosConIvaPorCantidad(producto);
    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si el producto introducido es null", () => {
    // Arrange
    const producto: any = null;

    // Act

    const result = () => productosConIvaPorCantidad(producto);
    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

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

//Sumatorio totales sin IVA:

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

//Sumatorio totales con IVA:

describe("sumaTotalesConIva", () => {
  it("Debe devolver un throw si los productos introducidos son undefined", () => {
    // Arrange
    const productos: any = undefined;

    // Act

    const result = () => sumaTotalesConIva(productos);
    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si los productos introducidos son null", () => {
    // Arrange
    const productos: any = null;

    // Act

    const result = () => sumaTotalesConIva(productos);
    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

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

describe("filtraTipoIva", () => {
  it("Debe devolver un throw si los productos introducidos son undefined", () => {
    // Arrange
    const productosEjemplo: any = undefined;
    const tipoIva: TipoIva = "general";

    // Act
    const result = () => filtraTipoIva(productosEjemplo, tipoIva);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si el tipo de IVA introducido es undefined", () => {
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
    const tipoIva: any = undefined;

    // Act
    const result = () => filtraTipoIva(productosEjemplo, tipoIva);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si los productos introducidos son null", () => {
    // Arrange
    const productosEjemplo: any = null;
    const tipoIva: TipoIva = "general";

    // Act
    const result = () => filtraTipoIva(productosEjemplo, tipoIva);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si el tipo de IVA introducido es null", () => {
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
    const tipoIva: any = null;

    // Act
    const result = () => filtraTipoIva(productosEjemplo, tipoIva);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Filtra los productos por su tipo de IVA. Debe devolver todos los productos que tengan el tipo general", () => {
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
    const tipoIva: TipoIva = "general";

    // Act:
    const resultadoFuncion = filtraTipoIva(productosEjemplo, tipoIva);
    const resultadoEsperado = [
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
    ];

    // Assert:
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Filtra los productos por su tipo de IVA. Debe devolver todos los productos que tengan el tipo superreducido A", () => {
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
    const tipoIva: TipoIva = "superreducidoA";

    // Act:

    const resultadoFuncion = filtraTipoIva(productosEjemplo, tipoIva);
    const resultadoEsperado = [
      {
        nombre: "Lasaña",
        precioSinIva: 5,
        precioConIva: 5.25,
        tipoIva: "superreducidoA",
        cantidad: 1,
      },
    ];
    // Assert:
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});

//Sumatorio de totales por tipo IVA:

describe("sumaTotalesPorTipoIva", () => {
  it("Debe devolver un throw si los productos introducidos son undefined", () => {
    // Arrange
    const productosEjemplo: any = undefined;
    const tipoIva: TipoIva = "general";

    // Act
    const result = () => sumaTotalesPorTipoIva(productosEjemplo, tipoIva);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si el tipo de IVA introducido es undefined", () => {
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
    const tipoIva: any = undefined;

    // Act
    const result = () => sumaTotalesPorTipoIva(productosEjemplo, tipoIva);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si los productos introducidos son null", () => {
    // Arrange
    const productosEjemplo: any = null;
    const tipoIva: TipoIva = "general";

    // Act
    const result = () => sumaTotalesPorTipoIva(productosEjemplo, tipoIva);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si el tipo de IVA introducido es null", () => {
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
    const tipoIva: any = null;

    // Act
    const result = () => sumaTotalesPorTipoIva(productosEjemplo, tipoIva);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

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

//IVA total:

describe("ivaTotal", () => {
  it("Debe devolver un throw si los productos introducidos son undefined", () => {
    // Arrange
    const productosEjemplo: any = undefined;

    // Act
    const result = () => ivaTotal(productosEjemplo);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si los productos introducidos son null", () => {
    // Arrange
    const productosEjemplo: any = null;

    // Act
    const result = () => ivaTotal(productosEjemplo);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

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

//Muestra resultado total ticket

describe("muestraResultadoTotalTicket", () => {
  it("Debe devolver un throw si los productos introducidos son undefined", () => {
    // Arrange
    const productosEjemplo: any = undefined;

    // Act
    const result = () => muestraResultadoTotalTicket(productosEjemplo);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si los productos introducidos son null", () => {
    // Arrange
    const productosEjemplo: any = null;

    // Act
    const result = () => muestraResultadoTotalTicket(productosEjemplo);

    // Assert

    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Devuelve un objeto con el total del precio de los productos con IVA, sin IVA y el total del IVA", () => {
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
    const resultadoFuncion = muestraResultadoTotalTicket(productosEjemplo);
    const resultadoEsperado = {
      totalSinIva: 75,
      totalConIva: 88.69,
      totalIva: 13.69,
    };
    // Assert:
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});

//Muestra totales por tipo de IVA:

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
    const resultadoFuncion = muestraTotalesPorTipoIva(productosEjemplo);
    const resultadoEsperado = [
      { tipoIva: "general", cuantia: 77.44 },
      { tipoIva: "reducido", cuantia: 0 },
      { tipoIva: "sinIva", cuantia: 0 },
      { tipoIva: "superreducidoA", cuantia: 5.25 },
      { tipoIva: "superreducidoB", cuantia: 0 },
      { tipoIva: "superreducidoC", cuantia: 6 },
    ];

    // Assert:
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
