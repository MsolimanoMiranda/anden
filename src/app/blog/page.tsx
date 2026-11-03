import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { SiteFrame } from "@/components/SiteFrame";
import { Stamp } from "@/components/Stamp";
import { notas } from "@/content/posts";

export const metadata = { title: "Bitácora — Andén" };

export default function BlogPage() {
  return (
    <SiteFrame>
      <Stamp>SSG</Stamp>
      <Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4.2rem" }, mt: 2, mb: 3 }}>
        Notas de oficio
      </Typography>
      {notas.map((nota) => (
        <NextLink key={nota.slug} href={`/blog/${nota.slug}`} style={{ display: "block", padding: "16px 0", borderTop: "1px solid #e0d3c2", color: "inherit", textDecoration: "none" }}>
          <Typography variant="h3" sx={{ fontSize: 30 }}>{nota.titulo}</Typography>
          <Typography sx={{ color: "text.secondary" }}>{nota.fecha}</Typography>
        </NextLink>
      ))}
    </SiteFrame>
  );
}
