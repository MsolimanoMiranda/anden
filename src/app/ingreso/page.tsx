import Typography from "@mui/material/Typography";
import { SiteFrame } from "@/components/SiteFrame";
import { Stamp } from "@/components/Stamp";
import { IngresoForm } from "@/components/IngresoForm";
import { DEMO_EMAIL, DEMO_PASSWORD } from "@/auth";

export const metadata = { title: "Ingreso — Andén" };

export default function IngresoPage() {
  return (
    <SiteFrame>
      <Stamp>NextAuth</Stamp>
      <Typography variant="h1" sx={{ fontSize: { xs: "2.6rem", md: "4rem" }, mt: 2 }}>
        Entrar al panel
      </Typography>
      <Typography sx={{ mt: 2, maxWidth: 520 }}>
        La sesión es un JWT de demostración. Correo {DEMO_EMAIL} y clave {DEMO_PASSWORD}.
      </Typography>
      <IngresoForm />
    </SiteFrame>
  );
}
