import Typography from "@mui/material/Typography";
import { SiteFrame } from "@/components/SiteFrame";

export default function NoEncontrado() {
  return (
    <SiteFrame>
      <Typography variant="h1" sx={{ fontSize: "3rem" }}>Esa ruta no está en el índice.</Typography>
    </SiteFrame>
  );
}
