import {
  ResultadoLineaTicket,
  ResultadoTotalTicket,
  TotalPorTipoIva,
  TipoIva,
  tiposIva,
} from "./constantes";

//Control de errores:
const controlErrorResultadoLineaTicket = (
  lineaProducto: ResultadoLineaTicket
) => {
  if (!lineaProducto) {
    throw new Error("El parámetro introducido no es correcto");
  }
};

const controlErroresResultadoLineasTicket = (
  lineasProducto: ResultadoLineaTicket[]
) => {
  if (!lineasProducto) {
    throw new Error("El parámetro introducido no es correcto");
  }
};

const controlErroresFiltro = (
  lineasProducto: ResultadoLineaTicket[],
  tipoIva: TipoIva
) => {
  if (!lineasProducto || !tipoIva) {
    throw new Error("El parámetro introducido no es correcto");
  }
};

//Multiplicación de productos sin IVA por su cantidad:
export const productoSinIvaPorCantidad = (
  lineaProducto: ResultadoLineaTicket
): number => {
  controlErrorResultadoLineaTicket(lineaProducto);
  return Number(
    (lineaProducto.precioSinIva * lineaProducto.cantidad).toFixed(2)
  );
};

//Multiplicación de productos con IVA por su cantidad:
export const productosConIvaPorCantidad = (
  lineaProducto: ResultadoLineaTicket
): number => {
  controlErrorResultadoLineaTicket(lineaProducto);
  return Number(
    (lineaProducto.precioConIva * lineaProducto.cantidad).toFixed(2)
  );
};

//Sumatorio de totales sin IVA:
export const sumaTotalesSinIva = (
  lineasProducto: ResultadoLineaTicket[]
): number => {
  controlErroresResultadoLineasTicket(lineasProducto);
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
  controlErroresResultadoLineasTicket(lineasProducto);
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
export const filtraTipoIva = (
  lineasProducto: ResultadoLineaTicket[],
  tipoIva: TipoIva
): ResultadoLineaTicket[] => {
  controlErroresFiltro(lineasProducto, tipoIva);
  return lineasProducto.filter(
    (lineaProducto) => lineaProducto.tipoIva === tipoIva
  );
};

export const sumaTotalesPorTipoIva = (
  lineasProducto: ResultadoLineaTicket[],
  tipoIva: TipoIva
) => {
  controlErroresFiltro(lineasProducto, tipoIva);
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
  controlErroresResultadoLineasTicket(lineasProducto);
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
  controlErroresResultadoLineasTicket(lineasProducto);
  return {
    totalSinIva: sumaTotalesSinIva(lineasProducto),
    totalConIva: sumaTotalesConIva(lineasProducto),
    totalIva: ivaTotal(lineasProducto),
  };
};

export const muestraTotalesPorTipoIva = (
  lineasProducto: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  controlErroresResultadoLineasTicket(lineasProducto);
  return tiposIva.map((tipoIva) => ({
    tipoIva: tipoIva,
    cuantia: sumaTotalesPorTipoIva(lineasProducto, tipoIva),
  }));
};
