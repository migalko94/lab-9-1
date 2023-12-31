import { calcularIva, calculoIvaRedondeado } from "./calcularIva";

//Calcular el IVA:

describe("calcularIva", () => {
  it("Debe devolver el IVA del producto. En este caso, el 21% del precio del producto", () => {
    // Arrange
    const precioProducto: number = 1000;
    const tipoIva: number = 21;
    const resultadoEsperado = 210;
    // Act
    const resultadoFuncion = calcularIva(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el IVA del producto. En este caso, el 4 % del precio del producto", () => {
    // Arrange
    const precioProducto: number = 200;
    const tipoIva: number = 4;
    const resultadoEsperado = 8;
    // Act
    const resultadoFuncion = calcularIva(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el IVA del producto. En este caso, el 0% del precio del producto", () => {
    // Arrange
    const precioProducto: number = 20;
    const tipoIva: number = 0;
    const resultadoEsperado = 0;
    // Act
    const resultadoFuncion = calcularIva(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
});

//Calcular el IVA redondeado:

describe("calculoIvaRedondeado", () => {
  it("Debe devolver el IVA redondeado con dos decimales. En este caso, el 21 % redondeado del precio del producto", () => {
    // Arrange
    const precioProducto: number = 73.7;
    const tipoIva: number = 21;
    const resultadoEsperado = 15.48;
    // Act
    const resultadoFuncion = calculoIvaRedondeado(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el IVA redondeado con dos decimales. En este caso, el 5% redondeado del precio del producto", () => {
    // Arrange
    const precioProducto: number = 21.36;
    const tipoIva: number = 5;
    const resultadoEsperado = 1.07;
    // Act
    const resultadoFuncion = calculoIvaRedondeado(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el IVA redondeado con dos decimales. En este caso, el 10% redondeado del precio del producto", () => {
    // Arrange
    const precioProducto: number = 2.75;
    const tipoIva: number = 10;
    const resultadoEsperado = 0.28;
    // Act
    const resultadoFuncion = calculoIvaRedondeado(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
});
