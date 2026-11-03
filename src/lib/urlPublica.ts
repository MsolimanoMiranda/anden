export function urlPublica(request: Request, ruta: string) {
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!host) return new URL(ruta, request.url);
  const proto = request.headers.get("x-forwarded-proto") ?? "http";
  return new URL(ruta, `${proto}://${host}`);
}
