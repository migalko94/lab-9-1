import { calcularPrecioConIva } from "./precioConIva";

describe("calcularPrecioConIva", () => {
  it("Debe devolver un throw si precioProducto no es un número", () => {
    // Arrange
    const precioProducto: any = "Hola, mundo";
    const tipoIva: number = 21;

    // Act
    const result = () => calcularPrecioConIva(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si tipoIva no es un número", () => {
    // Arrange
    const precioProducto: number = 1000;
    const tipoIva: any = { hola: "soy un objeto", adios: 24 };

    // Act
    const result = () => calcularPrecioConIva(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si precioProducto es undefined", () => {
    // Arrange
    const precioProducto: any = undefined;
    const tipoIva: number = 21;
    // Act
    const result = () => calcularPrecioConIva(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si tipoIva es undefined", () => {
    // Arrange
    const precioProducto: number = 1000;
    const tipoIva: any = undefined;
    // Act
    const result = () => calcularPrecioConIva(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si precioProducto es null", () => {
    // Arrange
    const precioProducto: any = null;
    const tipoIva: number = 21;
    // Act
    const result = () => calcularPrecioConIva(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si tipoIva es null", () => {
    // Arrange
    const precioProducto: number = 1000;
    const tipoIva: any = null;
    // Act
    const result = () => calcularPrecioConIva(precioProducto, tipoIva);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver el precio con IVA del producto", () => {
    // Arrange
    const precioProducto: number = 1000;
    const tipoIva: number = 21;
    const resultadoEsperado = 1210;
    // Act
    const resultadoFuncion = calcularPrecioConIva(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el precio con IVA del producto", () => {
    // Arrange
    const precioProducto: number = 100;
    const tipoIva: number = 4;
    const resultadoEsperado = 104;
    // Act
    const resultadoFuncion = calcularPrecioConIva(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el precio con IVA del producto", () => {
    // Arrange
    const precioProducto: number = 8;
    const tipoIva: number = 0;
    const resultadoEsperado = 8;
    // Act
    const resultadoFuncion = calcularPrecioConIva(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
});
