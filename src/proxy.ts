import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_SECRET } from "@/auth";

export async function proxy(request: NextRequest) {
  const respuesta = NextResponse.next();
  if (!request.cookies.get("anden-puesto")) {
    respuesta.cookies.set("anden-puesto", "central", { path: "/", sameSite: "lax" });
  }
  respuesta.headers.set("x-anden-proxy", "1");

  if (request.nextUrl.pathname.startsWith("/panel")) {
    const token = await getToken({ req: request, secret: AUTH_SECRET });
    if (!token) {
      const destino = request.nextUrl.clone();
      destino.pathname = "/ingreso";
      destino.searchParams.set("from", request.nextUrl.pathname);
      return NextResponse.redirect(destino);
    }
  }
  return respuesta;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon).*)"],
};
