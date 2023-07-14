import { calcularPrecioConIva } from "./precioConIva";

describe("calcularPrecioConIva", () => {
  it("Debe devolver el precio con IVA del producto: el precio del producto más el 21% de IVA", () => {
    // Arrange
    const precioProducto: number = 1000;
    const tipoIva: number = 21;
    const resultadoEsperado = 1210;
    // Act
    const resultadoFuncion = calcularPrecioConIva(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el precio con IVA del producto: el precio del producto más el 4% de IVA", () => {
    // Arrange
    const precioProducto: number = 100;
    const tipoIva: number = 4;
    const resultadoEsperado = 104;
    // Act
    const resultadoFuncion = calcularPrecioConIva(precioProducto, tipoIva);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver el precio con IVA del producto: el precio del producto directamente al ser el IVA del 0%", () => {
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
