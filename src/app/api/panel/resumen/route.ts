import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/auth";
import { notas } from "@/content/posts";
import { proyectos } from "@/content/projects";

export async function GET() {
  const sesion = await getServerSession(authOptions);
  if (!sesion) {
    return NextResponse.json({ error: "sin sesión" }, { status: 401 });
  }
  return NextResponse.json({
    proyectos: proyectos.length,
    notas: notas.length,
    visita: sesion.user?.name ?? "visita",
  });
}
