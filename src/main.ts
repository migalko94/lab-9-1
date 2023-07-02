import { LineaTicket } from "./constantes";
import { imprimeLineasTicket } from "./imprimirLineasProductos";

import "./style.css";
import { muestraTotales } from "./sumatorios";

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

const calculaTicket = (lineasTicket: LineaTicket[]) => {
  const lineasIndividuales = imprimeLineasTicket(lineasTicket);
  const totalesTicket = muestraTotales(lineasIndividuales);

  return {
    lineasIndividuales,
    totalesTicket,
  };
};

console.log(calculaTicket(productos));
