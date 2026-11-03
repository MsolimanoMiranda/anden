import Typography from "@mui/material/Typography";
import { SiteFrame } from "@/components/SiteFrame";
import { Stamp } from "@/components/Stamp";
import { PanelClient } from "@/components/PanelClient";

export const metadata = { title: "Panel — Andén" };

export default function PanelPage() {
  return (
    <SiteFrame>
      <Stamp>CSR · sesión</Stamp>
      <Typography variant="h1" sx={{ fontSize: { xs: "2.6rem", md: "4rem" }, mt: 2 }}>
        Panel
      </Typography>
      <Typography sx={{ mt: 1, mb: 3, maxWidth: 560 }}>
        El proxy dejó pasar esta ruta porque hay sesión. Los números de abajo los pide el navegador.
      </Typography>
      <PanelClient />
    </SiteFrame>
  );
}
