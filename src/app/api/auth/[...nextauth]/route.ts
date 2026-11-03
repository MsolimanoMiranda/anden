import NextAuth from "next-auth";
import type { NextRequest } from "next/server";
import { authOptions } from "@/auth";

const auth = NextAuth(authOptions);

function conOrigen(req: NextRequest, context: { params: Promise<{ nextauth: string[] }> }) {
  if (!process.env.NEXTAUTH_URL) {
    const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
    const proto = req.headers.get("x-forwarded-proto") ?? "http";
    if (host) process.env.NEXTAUTH_URL = `${proto}://${host}`;
  }
  return auth(req, context);
}

export { conOrigen as GET, conOrigen as POST };
