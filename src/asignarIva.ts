import { Producto } from "./constantes";

export const asignarIva = (producto: Producto) => {
  switch (producto.tipoIva) {
    case "general":
      return 21;

    case "reducido":
      return 10;

    case "superreducidoA":
      return 5;

    case "superreducidoB":
      return 4;

    case "superreducidoC":
      return 0;

    case "sinIva":
      return 0;
  }
};
