"use client";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

type Resumen = { proyectos: number; notas: number; visita: string };

export function PanelClient() {
  const [resumen, setResumen] = useState<Resumen | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let vivo = true;
    fetch("/api/panel/resumen")
      .then(async (respuesta) => {
        if (!respuesta.ok) throw new Error("La sesión no alcanzó al API.");
        return respuesta.json() as Promise<Resumen>;
      })
      .then((datos) => {
        if (vivo) setResumen(datos);
      })
      .catch((motivo: Error) => {
        if (vivo) setError(motivo.message);
      });
    return () => {
      vivo = false;
    };
  }, []);

  if (error) return <Alert severity="error">{error}</Alert>;
  if (!resumen) return <Typography>Cargando el resumen…</Typography>;

  return (
    <Box>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" }, gap: 2 }}>
        {[
          ["Proyectos", String(resumen.proyectos)],
          ["Notas", String(resumen.notas)],
          ["Visita", resumen.visita],
        ].map(([etiqueta, valor]) => (
          <Box key={etiqueta} sx={{ bgcolor: "background.paper", border: "1px solid", borderColor: "divider", p: 2 }}>
            <Typography sx={{ color: "text.secondary", fontSize: 13 }}>{etiqueta}</Typography>
            <Typography sx={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: 28 }}>{valor}</Typography>
          </Box>
        ))}
      </Box>
      <Button sx={{ mt: 3 }} variant="outlined" onClick={() => signOut({ callbackUrl: "/" })}>
        Cerrar sesión
      </Button>
    </Box>
  );
}
