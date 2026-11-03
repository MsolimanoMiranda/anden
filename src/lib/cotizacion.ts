export type Puesto = "central" | "surquillo";

export type Cotizacion = {
  puesto: Puesto;
  etiqueta: string;
  productos: { nombre: string; unidad: string; soles: number }[];
};

const listas: Record<Puesto, Cotizacion["productos"]> = {
  central: [
    { nombre: "Ají amarillo", unidad: "kg", soles: 7.4 },
    { nombre: "Papa canchán", unidad: "kg", soles: 2.8 },
    { nombre: "Limón", unidad: "kg", soles: 5.5 },
  ],
  surquillo: [
    { nombre: "Ají amarillo", unidad: "kg", soles: 8.5 },
    { nombre: "Papa canchán", unidad: "kg", soles: 3.2 },
    { nombre: "Limón", unidad: "kg", soles: 6 },
  ],
};

export function puestoDesdeCookie(valor: string | undefined): Puesto {
  return valor === "surquillo" ? "surquillo" : "central";
}

export function cotizar(puesto: Puesto): Cotizacion {
  return {
    puesto,
    etiqueta: puesto === "surquillo" ? "Mercado de Surquillo" : "Mercado Central",
    productos: listas[puesto],
  };
}
