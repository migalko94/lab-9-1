import { LineaTicketProducto, Sumatorios } from "./constantes";

//Multiplicación de productos sin IVA por su cantidad

export const productoSinIvaPorCantidad = (
  lineaProducto: LineaTicketProducto
): number => {
  const productoPorUnidades = Number(
    (lineaProducto.precioSinIva * lineaProducto.cantidad).toFixed(2)
  );
  return productoPorUnidades;
};

//Multiplicación de productos con IVA por su cantidad

export const productosConIvaPorCantidad = (
  lineaProducto: LineaTicketProducto
): number => {
  const productoPorUnidades = Number(
    (lineaProducto.productoIvaIncluido * lineaProducto.cantidad).toFixed(2)
  );
  return productoPorUnidades;
};

//Sumatorio de totales sin IVA

export const sumaTotalesSinIva = (
  lineasProducto: LineaTicketProducto[]
): number => {
  const sumaProductosSinIva = lineasProducto.reduce(
    (acc, lineaProducto) => acc + productoSinIvaPorCantidad(lineaProducto),
    0
  );

  return sumaProductosSinIva;
};

//Sumatorio de totales con IVA

export const sumaTotalesConIva = (
  lineasProducto: LineaTicketProducto[]
): number => {
  const sumaProductosConIva = lineasProducto.reduce(
    (acc, lineaProducto) => acc + productosConIvaPorCantidad(lineaProducto),
    0
  );

  return sumaProductosConIva;
};

//Filtro por tipo de IVA

const filtraTipoIva = (
  lineasProducto: LineaTicketProducto[],
  tipoIva: string
): LineaTicketProducto[] => {
  const productosFiltradosPorTipoIva = lineasProducto.filter(
    (lineaProducto) => lineaProducto.tipoIva === tipoIva
  );

  return productosFiltradosPorTipoIva;
};

//Filtro por tipo de IVA

export const sumaTotalesPorTipoIva = (
  lineasProducto: LineaTicketProducto[],
  tipoIva: string
) => {
  return filtraTipoIva(lineasProducto, tipoIva).reduce(
    (acc, lineaProducto) => acc + productosConIvaPorCantidad(lineaProducto),
    0
  );
};

//IVA total:

export const ivaTotal = (lineasProducto: LineaTicketProducto[]): number => {
  return Number(
    (
      sumaTotalesConIva(lineasProducto) - sumaTotalesSinIva(lineasProducto)
    ).toFixed(2)
  );
};

//muestra de los Sumatorios

export const muestraTotales = (
  lineasProducto: LineaTicketProducto[]
): Sumatorios => {
  return {
    totalSinIva: sumaTotalesSinIva(lineasProducto),
    ivaTotal: ivaTotal(lineasProducto),
    totalConIva: sumaTotalesConIva(lineasProducto),
    general: sumaTotalesPorTipoIva(lineasProducto, "general"),
    reducido: sumaTotalesPorTipoIva(lineasProducto, "reducido"),
    superreducidoA: sumaTotalesPorTipoIva(lineasProducto, "superreducidoA"),
    superreducidoB: sumaTotalesPorTipoIva(lineasProducto, "superreducidoB"),
    superreducidoC: sumaTotalesPorTipoIva(lineasProducto, "superreducidoC"),
    sinIva: sumaTotalesPorTipoIva(lineasProducto, "sinIva"),
  };
};
