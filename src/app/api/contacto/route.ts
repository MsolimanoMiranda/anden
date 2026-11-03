import { NextResponse } from "next/server";
import { urlPublica } from "@/lib/urlPublica";

export async function POST(request: Request) {
  const tipo = request.headers.get("content-type") ?? "";
  let nombre = "";
  let mensaje = "";
  if (tipo.includes("application/json")) {
    const body = (await request.json()) as { nombre?: string; mensaje?: string };
    nombre = body.nombre ?? "";
    mensaje = body.mensaje ?? "";
  } else {
    const form = await request.formData();
    nombre = String(form.get("nombre") ?? "");
    mensaje = String(form.get("mensaje") ?? "");
  }
  if (nombre.trim().length < 2 || mensaje.trim().length < 4) {
    return NextResponse.json({ error: "Nombre y mensaje son obligatorios" }, { status: 422 });
  }
  const aceptaHtml = request.headers.get("accept")?.includes("text/html");
  if (aceptaHtml) {
    return NextResponse.redirect(urlPublica(request, "/oficio?enviado=1"), 303);
  }
  return NextResponse.json({ ok: true, nombre: nombre.trim() });
}
