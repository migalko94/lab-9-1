import { TicketFinal, LineaTicket } from "./constantes";
import { calculaTicket } from "./ticketFinal";

describe("calculaTicket", () => {
  it("Debe devolver un throw si los productos son undefined", () => {
    // Arrange
    const productos: any = undefined;

    // Act
    const result = () => calculaTicket(productos);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver un throw si los productos son null", () => {
    // Arrange
    const productos: any = null;

    // Act
    const result = () => calculaTicket(productos);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver por cada producto el nombre, la cantidad, el precio sin IVA, el tipo de IVA y el precio con IVA. El total sin IVA, el IVA, un desglose del total por tipo de IVA, es decir, la suma de los importes correspondientes a cada tipo de IVA, el total del ticket, incluyendo el IVA. ", () => {
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

    // Act
    const resultadoFuncion = calculaTicket(productos);
    const resultado: TicketFinal = {
      desgloseIva: [
        { tipoIva: "general", cuantia: 13.44 },
        { tipoIva: "superreducidoC", cuantia: 0 },
        { tipoIva: "superreducidoA", cuantia: 0.25 },
      ],
      lineas: [
        {
          cantidad: 2,
          nombre: "Legumbres",
          precioConIva: 2.42,
          precioSinIva: 2,
          tipoIva: "general",
        },
        {
          cantidad: 3,
          nombre: "Perfume",
          precioConIva: 24.2,
          precioSinIva: 20,
          tipoIva: "general",
        },
        {
          cantidad: 6,
          nombre: "Leche",
          precioConIva: 1,
          precioSinIva: 1,
          tipoIva: "superreducidoC",
        },
        {
          cantidad: 1,
          nombre: "Lasaña",
          precioConIva: 5.25,
          precioSinIva: 5,
          tipoIva: "superreducidoA",
        },
      ],
      total: { totalConIva: 88.69, totalIva: 13.69, totalSinIva: 75 },
    };

    // Assert
    expect(resultadoFuncion).toEqual(resultado);
  });
});
