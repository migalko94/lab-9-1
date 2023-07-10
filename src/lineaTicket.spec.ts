import { LineaTicket, Producto, ResultadoLineaTicket } from "./constantes";
import { imprimeLineasTicket } from "./imprimirLineasProductos";
import { crearLineaTicket, asignarIva } from "./lineaTicket";

describe("asignarIva", () => {
  it("Debe devolver un throw si producto es undefined", () => {
    // Arrange
    const producto: any = undefined;

    // Act
    const result = () => asignarIva(producto);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si producto es null", () => {
    // Arrange
    const producto: any = null;

    // Act
    const result = () => asignarIva(producto);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver el porcentaje de IVA", () => {
    // Arrange
    const productoEjemplo: Producto = {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    };

    const resultadoEsperado = 21;
    // Act
    const resultadoFuncion = asignarIva(productoEjemplo);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el porcentaje de IVA", () => {
    // Arrange
    const productoEjemplo: Producto = {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    };

    const resultadoEsperado = 0;
    // Act
    const resultadoFuncion = asignarIva(productoEjemplo);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el porcentaje de IVA", () => {
    // Arrange
    const productoEjemplo: Producto = {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    };

    const resultadoEsperado = 5;
    // Act
    const resultadoFuncion = asignarIva(productoEjemplo);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
});

describe("crearLineaTicket", () => {
  it("Debe devolver un throw si productos es undefined", () => {
    // Arrange
    const productos: any = undefined;

    // Act
    const result = () => crearLineaTicket(productos);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si productos es null", () => {
    // Arrange
    const productos: any = null;

    // Act
    const result = () => crearLineaTicket(productos);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

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
