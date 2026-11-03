import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";

export type Apunte = { id: string; texto: string; en: string };

const semilla: Apunte[] = [
  {
    id: "semilla-1",
    texto: "El índice de Andén se genera en el build. Esta línea vive en el código.",
    en: "2026-11-02T12:00:00.000Z",
  },
];

function archivo() {
  return path.join(process.cwd(), "var", "apuntes.json");
}

export function leerApuntes(): Apunte[] {
  const ruta = archivo();
  if (!existsSync(ruta)) return semilla;
  const extra = JSON.parse(readFileSync(ruta, "utf8")) as Apunte[];
  return [...semilla, ...extra];
}

export function agregarApunte(texto: string): Apunte {
  const limpio = texto.trim();
  if (limpio.length < 4) {
    throw new Error("El apunte es demasiado corto");
  }
  const ruta = archivo();
  mkdirSync(path.dirname(ruta), { recursive: true });
  const previos = existsSync(ruta) ? (JSON.parse(readFileSync(ruta, "utf8")) as Apunte[]) : [];
  const apunte = { id: crypto.randomUUID(), texto: limpio, en: new Date().toISOString() };
  writeFileSync(ruta, JSON.stringify([...previos, apunte], null, 2));
  return apunte;
}
