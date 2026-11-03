import Box from "@mui/material/Box";

export function Stamp({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        border: "1px solid",
        borderColor: "primary.main",
        color: "primary.main",
        px: 1,
        py: 0.25,
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        fontWeight: 700,
      }}
    >
      {children}
    </Box>
  );
}
