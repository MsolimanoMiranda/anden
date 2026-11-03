import { NextResponse } from "next/server";
import { urlPublica } from "@/lib/urlPublica";

export async function POST(request: Request) {
  const form = await request.formData();
  const puesto = form.get("puesto") === "surquillo" ? "surquillo" : "central";
  const respuesta = NextResponse.redirect(urlPublica(request, "/mercado"), 303);
  respuesta.cookies.set("anden-puesto", puesto, { path: "/", sameSite: "lax" });
  return respuesta;
}
