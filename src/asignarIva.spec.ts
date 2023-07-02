import { asignarIva } from "./asignarIva";
import { Producto } from "./constantes";

describe("asignarIva", () => {
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
