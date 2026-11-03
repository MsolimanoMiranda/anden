import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const DEMO_EMAIL = "demo@anden.local";
export const DEMO_PASSWORD = process.env.DEMO_PASSWORD ?? "oficio";
export const AUTH_SECRET = process.env.NEXTAUTH_SECRET ?? "anden-demo-secret-cambia-esto-en-produccion";

export const authOptions: NextAuthOptions = {
  secret: AUTH_SECRET,
  session: { strategy: "jwt" },
  pages: { signIn: "/ingreso" },
  providers: [
    Credentials({
      name: "Demo",
      credentials: {
        email: { label: "Correo", type: "email" },
        password: { label: "Clave", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.email === DEMO_EMAIL && credentials?.password === DEMO_PASSWORD) {
          return { id: "demo", name: "Visita de oficio", email: DEMO_EMAIL };
        }
        return null;
      },
    }),
  ],
};
