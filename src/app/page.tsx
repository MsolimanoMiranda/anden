import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { SiteFrame } from "@/components/SiteFrame";
import { Stamp } from "@/components/Stamp";
import { proyectos } from "@/content/projects";

export default function Home() {
  return (
    <SiteFrame>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
          gap: { xs: 5, md: 8 },
          alignItems: "start",
        }}
      >
        <Box sx={{ position: { md: "sticky" }, top: 32 }}>
          <Stamp>SSG · índice</Stamp>
          <Typography variant="h1" sx={{ fontSize: { xs: "3.1rem", md: "5.3rem" }, mt: 2 }}>
            Arquitectura que se puede abrir.
          </Typography>
          <Typography sx={{ mt: 3, maxWidth: 460, fontSize: 18, lineHeight: 1.5 }}>
            Diecisiete piezas. Dieciséis cubren un stack. La última pone al modelo bajo contrato: lista de herramientas, presupuesto de pasos, veto y traza.
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 460 }}>
            <NextLink href="/proyectos/oficio-ia" style={{ color: "inherit" }}>
              Oficio de la IA
            </NextLink>
          </Typography>
          <Typography sx={{ mt: 3, color: "text.secondary" }}>
            Hecho para fijar en GitHub. La carpeta de cada proyecto se puede partir en su propio repositorio.
          </Typography>
        </Box>
        <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0 }}>
          {proyectos.map((proyecto) => (
            <Box component="li" key={proyecto.slug} sx={{ borderTop: "1px solid", borderColor: "divider" }}>
              <NextLink
                href={`/proyectos/${proyecto.slug}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3.2rem 1fr",
                  gap: 16,
                  padding: "12px 0",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Typography sx={{ fontVariantNumeric: "tabular-nums", color: "primary.main", pt: 0.4 }}>{proyecto.indice}</Typography>
                <Box>
                  <Typography sx={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: { xs: 26, md: 32 }, lineHeight: 1 }}>
                    {proyecto.nombre}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 0.4 }}>{proyecto.stack}</Typography>
                </Box>
              </NextLink>
            </Box>
          ))}
        </Box>
      </Box>
    </SiteFrame>
  );
}
