import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { revalidatePath } from "next/cache";
import { SiteFrame } from "@/components/SiteFrame";
import { Stamp } from "@/components/Stamp";
import { agregarApunte, leerApuntes } from "@/lib/notas";

export const revalidate = 30;
export const metadata = { title: "Bitácora viva — Andén" };

async function publicar(formData: FormData) {
  "use server";
  const texto = String(formData.get("texto") ?? "");
  agregarApunte(texto);
  revalidatePath("/bitacora");
}

export default function BitacoraPage() {
  const apuntes = leerApuntes();
  const generado = new Intl.DateTimeFormat("es-PE", {
    timeZone: "America/Lima",
    timeStyle: "medium",
  }).format(new Date());

  return (
    <SiteFrame>
      <Stamp>ISR · 30 s</Stamp>
      <Typography variant="h1" sx={{ fontSize: { xs: "2.6rem", md: "4rem" }, mt: 2 }}>
        Bitácora que se queda quieta
      </Typography>
      <Typography sx={{ mt: 1, color: "text.secondary", maxWidth: 640 }}>
        Esta hora se calculó en el servidor y se reutiliza hasta que pasan 30 segundos o alguien deja un apunte: {generado}.
      </Typography>
      <Box component="form" action={publicar} sx={{ display: "grid", gap: 2, maxWidth: 560, mt: 3 }}>
        <TextField name="texto" label="Apunte" required placeholder="Una línea sobre el oficio" />
        <Button type="submit" variant="contained" sx={{ justifySelf: "start" }}>Dejar apunte</Button>
      </Box>
      <Box component="ul" sx={{ listStyle: "none", p: 0, mt: 4, maxWidth: 680 }}>
        {apuntes.map((apunte) => (
          <Box component="li" key={apunte.id} sx={{ py: 2, borderTop: "1px solid", borderColor: "divider" }}>
            <Typography>{apunte.texto}</Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 14 }}>{apunte.en}</Typography>
          </Box>
        ))}
      </Box>
    </SiteFrame>
  );
}
