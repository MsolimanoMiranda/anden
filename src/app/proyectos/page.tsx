import Typography from "@mui/material/Typography";
import { SiteFrame } from "@/components/SiteFrame";
import { Stamp } from "@/components/Stamp";
import { FiltroProyectos } from "@/components/FiltroProyectos";
import { proyectos } from "@/content/projects";

export const metadata = { title: "Proyectos — Andén" };

export default function ProyectosPage() {
  return (
    <SiteFrame>
      <Stamp>SSG · filtro en el cliente</Stamp>
      <Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4.2rem" }, mt: 2, mb: 3 }}>
        El índice, con filtro.
      </Typography>
      <FiltroProyectos proyectos={proyectos} />
    </SiteFrame>
  );
}
