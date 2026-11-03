import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { notFound } from "next/navigation";
import { SiteFrame } from "@/components/SiteFrame";
import { Stamp } from "@/components/Stamp";
import { proyectoPorSlug, proyectos } from "@/content/projects";

export function generateStaticParams() {
  return proyectos.map((proyecto) => ({ slug: proyecto.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((valor) => {
    const proyecto = proyectoPorSlug(valor.slug);
    return { title: proyecto ? `${proyecto.nombre} — Andén` : "Andén" };
  });
}

export default async function ProyectoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const proyecto = proyectoPorSlug(slug);
  if (!proyecto) notFound();

  return (
    <SiteFrame>
      <Stamp>SSG · ruta dinámica</Stamp>
      <Typography sx={{ color: "primary.main", mt: 2 }}>{proyecto.indice}</Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4.6rem" }, maxWidth: 760 }}>
        {proyecto.nombre}
      </Typography>
      <Typography sx={{ mt: 1, color: "text.secondary" }}>{proyecto.stack}</Typography>
      <Typography sx={{ mt: 3, fontSize: 20, maxWidth: 680 }}>{proyecto.problema}</Typography>
      <Typography sx={{ mt: 2, maxWidth: 680, lineHeight: 1.6 }}>{proyecto.arquitectura}</Typography>
      <Box
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: 2,
        }}
      >
        {proyecto.capas.map((capa) => (
          <Box key={capa.nombre} sx={{ bgcolor: "background.paper", border: "1px solid", borderColor: "divider", p: 2 }}>
            <Typography sx={{ fontWeight: 700 }}>{capa.nombre}</Typography>
            <Typography sx={{ mt: 1 }}>{capa.detalle}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ mt: 4, bgcolor: "#1c1612", color: "#f3ecdf", p: 2, overflow: "auto" }}>
        <Typography sx={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e7b5a2" }}>
          {proyecto.modo}
        </Typography>
        <Typography component="pre" sx={{ fontFamily: "ui-monospace, monospace", fontSize: 14, mt: 1, whiteSpace: "pre-wrap" }}>
          {proyecto.correr}
        </Typography>
        <Typography sx={{ mt: 1, color: "#d9cbb8" }}>{proyecto.ruta}</Typography>
      </Box>
    </SiteFrame>
  );
}
