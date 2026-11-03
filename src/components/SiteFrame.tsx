import Box from "@mui/material/Box";
import NextLink from "next/link";

const enlaces = [
  { href: "/oficio", label: "Oficio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/blog", label: "Bitácora" },
  { href: "/mercado", label: "Mercado" },
  { href: "/panel", label: "Panel" },
];

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box
        component="header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2,
          flexWrap: "wrap",
          px: { xs: 2, md: 5 },
          py: 2.5,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <NextLink href="/" style={{ fontWeight: 750, letterSpacing: "0.18em", fontSize: 14, color: "inherit", textDecoration: "none" }}>
          ANDÉN
        </NextLink>
        <Box sx={{ display: "flex", gap: { xs: 1.5, md: 3 }, flexWrap: "wrap" }}>
          {enlaces.map((enlace) => (
            <NextLink key={enlace.href} href={enlace.href} style={{ fontSize: 15, color: "inherit" }}>
              {enlace.label}
            </NextLink>
          ))}
        </Box>
      </Box>
      <Box component="main" sx={{ flex: 1, px: { xs: 2, md: 5 }, py: { xs: 4, md: 6 } }}>
        {children}
      </Box>
      <Box component="footer" sx={{ px: { xs: 2, md: 5 }, py: 3, borderTop: "1px solid", borderColor: "divider", color: "text.secondary", fontSize: 14 }}>
        Portafolio de oficio. Cada carpeta tiene dominio, una prueba y una forma de correrla.
      </Box>
    </Box>
  );
}
