import { calcularIva, calculoIvaRedondeado } from "./calcularIva";

//Calcular el IVA:

describe("calcularIva", () => {
  it("Debe devolver un throw si precioProducto es undefined", () => {
    // Arrange
    const precioProducto: any = undefined;
    const tipoIva: number = 21;

    // Act
    const result = () => calcularIva(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si tipoIva es undefined", () => {
    // Arrange
    const precioProducto: number = 1000;
    const tipoIva: any = undefined;

    // Act
    const result = () => calcularIva(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si precioProducto no es un número", () => {
    // Arrange
    const precioProducto: any = "Hola, mundo";
    const tipoIva: number = 21;

    // Act
    const result = () => calcularIva(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si tipoIva no es un número", () => {
    // Arrange
    const precioProducto: number = 1000;
    const tipoIva: any = { hola: "soy un objeto", adios: 24 };

    // Act
    const result = () => calcularIva(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si precioProducto es null", () => {
    // Arrange
    const precioProducto: any = null;
    const tipoIva: number = 21;

    // Act
    const result = () => calcularIva(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si tipoIva es null", () => {
    // Arrange
    const precioProducto: number = 1000;
    const tipoIva: any = null;
    // Act
    const result = () => calcularIva(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver el IVA del producto", () => {
    // Arrange
    const precioProducto: number = 1000;
    const tipoIva: number = 21;
    const resultadoEsperado = 210;
    // Act
    const resultadoFuncion = calcularIva(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el IVA del producto", () => {
    // Arrange
    const precioProducto: number = 200;
    const tipoIva: number = 4;
    const resultadoEsperado = 8;
    // Act
    const resultadoFuncion = calcularIva(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el IVA del producto", () => {
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
  it("Debe devolver un throw si precioProducto es undefined", () => {
    // Arrange
    const precioProducto: any = undefined;
    const tipoIva: number = 21;
    // Act
    const result = () => calculoIvaRedondeado(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si tipoIva es undefined", () => {
    // Arrange
    const precioProducto: number = 1000;
    const tipoIva: any = undefined;
    // Act
    const result = () => calculoIvaRedondeado(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si precioProducto no es un número", () => {
    // Arrange
    const precioProducto: any = "Hola, mundo";
    const tipoIva: number = 21;

    // Act
    const result = () => calculoIvaRedondeado(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si tipoIva no es un número", () => {
    // Arrange
    const precioProducto: number = 1000;
    const tipoIva: any = { hola: "soy un objeto", adios: 24 };

    // Act
    const result = () => calculoIvaRedondeado(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si precioProducto es null", () => {
    // Arrange
    const precioProducto: any = null;
    const tipoIva: number = 21;
    // Act
    const result = () => calculoIvaRedondeado(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si tipoIva es null", () => {
    // Arrange
    const precioProducto: number = 1000;
    const tipoIva: any = null;
    // Act
    const result = () => calculoIvaRedondeado(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver el IVA redondeado con dos decimales", () => {
    // Arrange
    const precioProducto: number = 73.7;
    const tipoIva: number = 21;
    const resultadoEsperado = 15.48;
    // Act
    const resultadoFuncion = calculoIvaRedondeado(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el IVA redondeado con dos decimales", () => {
    // Arrange
    const precioProducto: number = 21.36;
    const tipoIva: number = 5;
    const resultadoEsperado = 1.07;
    // Act
    const resultadoFuncion = calculoIvaRedondeado(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el IVA redondeado con dos decimales", () => {
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
