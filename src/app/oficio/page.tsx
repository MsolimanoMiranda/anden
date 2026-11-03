import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { SiteFrame } from "@/components/SiteFrame";
import { Stamp } from "@/components/Stamp";

export const metadata = { title: "Oficio — Andén" };

export default function OficioPage() {
  return (
    <SiteFrame>
      <Stamp>API · contacto</Stamp>
      <Typography variant="h1" sx={{ fontSize: { xs: "2.6rem", md: "4.2rem" }, mt: 2, maxWidth: 720 }}>
        Un proyecto por stack, no cincuenta carpetas iguales.
      </Typography>
      <Typography sx={{ mt: 3, maxWidth: 680, fontSize: 18, lineHeight: 1.6 }}>
        El pedido era una vitrina de cincuenta repositorios. Una vitrina llena de clones se nota, y un perfil se lee mejor con piezas que se pueden clonar y correr. Aquí hay diecisiete. Dieciséis cubren cada stack de la lista. La última maneja un modelo: herramientas permitidas, presupuesto de pasos, veto y un respaldo local. Donde el sistema no tiene iPhone, Android SDK o una cuenta de AWS, el código del borde está escrito y la prueba corre en la parte que sí existe.
      </Typography>
      <Typography sx={{ mt: 2, maxWidth: 680, lineHeight: 1.6 }}>
        Firebase, NATS, Postgres, Mongo y el emisor OAuth quedan como puertos. El adaptador local permite la prueba. La variable de entorno enciende el adaptador real.
      </Typography>
      <Box component="form" action="/api/contacto" method="post" sx={{ display: "grid", gap: 2, maxWidth: 480, mt: 4 }}>
        <TextField name="nombre" label="Nombre" required />
        <TextField name="mensaje" label="Mensaje" required multiline minRows={3} />
        <Button type="submit" variant="contained" sx={{ justifySelf: "start" }}>Enviar</Button>
      </Box>
    </SiteFrame>
  );
}
