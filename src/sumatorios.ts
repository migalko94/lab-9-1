import {
  ResultadoLineaTicket,
  ResultadoTotalTicket,
  TotalPorTipoIva,
  TipoIva,
  tiposIva,
} from "./constantes";

//Multiplicación de productos sin IVA por su cantidad:
export const productoSinIvaPorCantidad = (
  lineaProducto: ResultadoLineaTicket
): number =>
  Number((lineaProducto.precioSinIva * lineaProducto.cantidad).toFixed(2));

//Multiplicación de productos con IVA por su cantidad:
export const productosConIvaPorCantidad = (
  lineaProducto: ResultadoLineaTicket
): number =>
  Number((lineaProducto.precioConIva * lineaProducto.cantidad).toFixed(2));

//Sumatorio de totales sin IVA:
export const sumaTotalesSinIva = (
  lineasProducto: ResultadoLineaTicket[]
): number =>
  Number(
    lineasProducto
      .reduce(
        (acc, lineaProducto) => acc + productoSinIvaPorCantidad(lineaProducto),
        0
      )
      .toFixed(2)
  );

//Sumatorio de totales con IVA:
export const sumaTotalesConIva = (
  lineasProducto: ResultadoLineaTicket[]
): number =>
  Number(
    lineasProducto
      .reduce(
        (acc, lineaProducto) => acc + productosConIvaPorCantidad(lineaProducto),
        0
      )
      .toFixed(2)
  );

//Filtro por tipo de IVA:
const filtraTipoIva = (
  lineasProducto: ResultadoLineaTicket[],
  tipoIva: TipoIva
): ResultadoLineaTicket[] =>
  lineasProducto.filter((lineaProducto) => lineaProducto.tipoIva === tipoIva);

export const sumaTotalesPorTipoIva = (
  lineasProducto: ResultadoLineaTicket[],
  tipoIva: TipoIva
) =>
  Number(
    filtraTipoIva(lineasProducto, tipoIva)
      .reduce(
        (acc, lineaProducto) => acc + productosConIvaPorCantidad(lineaProducto),
        0
      )
      .toFixed(2)
  );

//IVA total:
export const ivaTotal = (lineasProducto: ResultadoLineaTicket[]): number =>
  Number(
    (
      sumaTotalesConIva(lineasProducto) - sumaTotalesSinIva(lineasProducto)
    ).toFixed(2)
  );

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

export const muestraTotalesPorTipoIva = (
  lineasProducto: ResultadoLineaTicket[]
): TotalPorTipoIva[] =>
  tiposIva.map((tipoIva) => ({
    tipoIva: tipoIva,
    cuantia: sumaTotalesPorTipoIva(lineasProducto, tipoIva),
  }));
