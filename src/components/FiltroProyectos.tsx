"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { useMemo, useState } from "react";
import type { Proyecto } from "@/content/projects";

export function FiltroProyectos({ proyectos }: { proyectos: Proyecto[] }) {
  const [consulta, setConsulta] = useState("");
  const visibles = useMemo(() => {
    const q = consulta.trim().toLowerCase();
    if (!q) return proyectos;
    return proyectos.filter((proyecto) => `${proyecto.nombre} ${proyecto.stack} ${proyecto.resumen}`.toLowerCase().includes(q));
  }, [consulta, proyectos]);

  return (
    <Box>
      <TextField
        label="Buscar por stack o nombre"
        value={consulta}
        onChange={(event) => setConsulta(event.target.value)}
        fullWidth
        sx={{ maxWidth: 480, mb: 3, bgcolor: "background.paper" }}
      />
      {visibles.length === 0 ? (
        <Typography>Ningún proyecto coincide con esa búsqueda.</Typography>
      ) : (
        <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
          {visibles.map((proyecto) => (
            <Box component="li" key={proyecto.slug} sx={{ py: 2, borderTop: "1px solid", borderColor: "divider" }}>
              <Link component={NextLink} href={`/proyectos/${proyecto.slug}`} underline="hover" color="text.primary">
                <Typography variant="h3" sx={{ fontSize: 28 }}>{proyecto.indice} {proyecto.nombre}</Typography>
              </Link>
              <Typography sx={{ color: "text.secondary" }}>{proyecto.stack}</Typography>
              <Typography sx={{ mt: 0.5, maxWidth: 640 }}>{proyecto.resumen}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
