export interface Producto {
  nombre: string;
  precio: number;
  tipoIva:
    | "general"
    | "reducido"
    | "superreducidoA"
    | "superreducidoB"
    | "superreducidoC"
    | "sinIva";
}

export interface LineaTicket {
  producto: Producto;
  cantidad: number;
}

export interface LineaTicketProducto {
  nombre: string;
  precioSinIva: number;
  tipoIva: string;
  productoIvaPorcentaje: number;
  productoIva: number;
  productoIvaIncluido: number;
  cantidad: number;
}

export interface Sumatorios {
  totalSinIva: number;
  ivaTotal: number;
  totalConIva: number;
  general: number;
  reducido: number;
  superreducidoA: number;
  superreducidoB: number;
  superreducidoC: number;
  sinIva: number;
}
