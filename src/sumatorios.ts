import {
  ResultadoLineaTicket,
  ResultadoTotalTicket,
  TotalPorTipoIva,
  TipoIva,
} from "./constantes";

//Multiplicación de productos sin IVA por su cantidad:
export const productoSinIvaPorCantidad = (
  lineaProducto: ResultadoLineaTicket
): number => {
  return Number(
    (lineaProducto.precioSinIva * lineaProducto.cantidad).toFixed(2)
  );
};

//Multiplicación de productos con IVA por su cantidad:
export const productosConIvaPorCantidad = (
  lineaProducto: ResultadoLineaTicket
): number => {
  return Number(
    (lineaProducto.precioConIva * lineaProducto.cantidad).toFixed(2)
  );
};

//Sumatorio de totales sin IVA:
export const sumaTotalesSinIva = (
  lineasProducto: ResultadoLineaTicket[]
): number => {
  return Number(
    lineasProducto
      .reduce(
        (acc, lineaProducto) => acc + productoSinIvaPorCantidad(lineaProducto),
        0
      )
      .toFixed(2)
  );
};

//Sumatorio de totales con IVA:
export const sumaTotalesConIva = (
  lineasProducto: ResultadoLineaTicket[]
): number => {
  return Number(
    lineasProducto
      .reduce(
        (acc, lineaProducto) => acc + productosConIvaPorCantidad(lineaProducto),
        0
      )
      .toFixed(2)
  );
};

//Filtro por tipo de IVA:
const filtraTipoIva = (
  lineasProducto: ResultadoLineaTicket[],
  tipoIva: TipoIva
): ResultadoLineaTicket[] => {
  return lineasProducto.filter(
    (lineaProducto) => lineaProducto.tipoIva === tipoIva
  );
};

export const sumaTotalesPorTipoIva = (
  lineasProducto: ResultadoLineaTicket[],
  tipoIva: TipoIva
) => {
  return Number(
    filtraTipoIva(lineasProducto, tipoIva)
      .reduce(
        (acc, lineaProducto) => acc + productosConIvaPorCantidad(lineaProducto),
        0
      )
      .toFixed(2)
  );
};

//IVA total:
export const ivaTotal = (lineasProducto: ResultadoLineaTicket[]): number => {
  return Number(
    (
      sumaTotalesConIva(lineasProducto) - sumaTotalesSinIva(lineasProducto)
    ).toFixed(2)
  );
};

//Muestra de los Sumatorios:
export const muestraResultadoTotalTicket = (
  lineasProducto: ResultadoLineaTicket[]
): ResultadoTotalTicket => {
  return {
    totalSinIva: sumaTotalesSinIva(lineasProducto),
    totalConIva: sumaTotalesConIva(lineasProducto),
    totalIva: ivaTotal(lineasProducto),
  };
};

export const muestraTotalPorTipoIva = (
  lineasProducto: ResultadoLineaTicket[],
  tipoIva: TipoIva
): TotalPorTipoIva => {
  return {
    tipoIva: tipoIva,
    cuantia: sumaTotalesPorTipoIva(lineasProducto, tipoIva),
  };
};

export const muestraTotalesPorTipoIva = (
  lineasProducto: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  return [
    muestraTotalPorTipoIva(lineasProducto, "general"),
    muestraTotalPorTipoIva(lineasProducto, "reducido"),
    muestraTotalPorTipoIva(lineasProducto, "sinIva"),
    muestraTotalPorTipoIva(lineasProducto, "superreducidoA"),
    muestraTotalPorTipoIva(lineasProducto, "superreducidoB"),
    muestraTotalPorTipoIva(lineasProducto, "superreducidoC"),
  ];
};
