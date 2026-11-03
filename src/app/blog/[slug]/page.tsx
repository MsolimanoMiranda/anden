import Typography from "@mui/material/Typography";
import { notFound } from "next/navigation";
import { SiteFrame } from "@/components/SiteFrame";
import { Stamp } from "@/components/Stamp";
import { notaPorSlug, notas } from "@/content/posts";

export function generateStaticParams() {
  return notas.map((nota) => ({ slug: nota.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((valor) => ({ title: notaPorSlug(valor.slug)?.titulo ?? "Andén" }));
}

export default async function NotaPage({ params }: { params: Promise<{ slug: string }> }) {
  const nota = notaPorSlug((await params).slug);
  if (!nota) notFound();
  return (
    <SiteFrame>
      <Stamp>SSG · ruta dinámica</Stamp>
      <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "3.6rem" }, mt: 2, maxWidth: 740 }}>{nota.titulo}</Typography>
      <Typography sx={{ color: "text.secondary", mt: 1 }}>{nota.fecha}</Typography>
      {nota.cuerpo.map((parrafo) => (
        <Typography key={parrafo.slice(0, 24)} sx={{ mt: 2, maxWidth: 680, fontSize: 18, lineHeight: 1.6 }}>{parrafo}</Typography>
      ))}
    </SiteFrame>
  );
}
