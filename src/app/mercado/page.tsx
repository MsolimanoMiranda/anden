import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { cookies } from "next/headers";
import { SiteFrame } from "@/components/SiteFrame";
import { Stamp } from "@/components/Stamp";
import { cotizar, puestoDesdeCookie } from "@/lib/cotizacion";

export const dynamic = "force-dynamic";
export const metadata = { title: "Mercado — Andén" };

export default async function MercadoPage() {
  const jar = await cookies();
  const cotizacion = cotizar(puestoDesdeCookie(jar.get("anden-puesto")?.value));
  const hora = new Intl.DateTimeFormat("es-PE", {
    timeZone: "America/Lima",
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date());

  return (
    <SiteFrame>
      <Stamp>SSR · cookie</Stamp>
      <Typography variant="h1" sx={{ fontSize: { xs: "2.6rem", md: "4rem" }, mt: 2 }}>
        {cotizacion.etiqueta}
      </Typography>
      <Typography sx={{ mt: 1, color: "text.secondary" }}>
        Esta página se arma en el servidor en cada visita. Hora de Lima: {hora}.
      </Typography>
      <Box component="form" action="/api/puesto" method="post" sx={{ display: "flex", gap: 1, mt: 3, flexWrap: "wrap" }}>
        <Button type="submit" name="puesto" value="central" variant={cotizacion.puesto === "central" ? "contained" : "outlined"}>
          Mercado Central
        </Button>
        <Button type="submit" name="puesto" value="surquillo" variant={cotizacion.puesto === "surquillo" ? "contained" : "outlined"}>
          Surquillo
        </Button>
      </Box>
      <Box component="ul" sx={{ listStyle: "none", p: 0, mt: 3, maxWidth: 480 }}>
        {cotizacion.productos.map((producto) => (
          <Box component="li" key={producto.nombre} sx={{ display: "flex", justifyContent: "space-between", py: 1.2, borderTop: "1px solid", borderColor: "divider" }}>
            <span>{producto.nombre}</span>
            <span>S/ {producto.soles.toFixed(2)} / {producto.unidad}</span>
          </Box>
        ))}
      </Box>
    </SiteFrame>
  );
}
