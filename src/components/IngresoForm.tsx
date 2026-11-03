"use client";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { signIn } from "next-auth/react";
import { useState } from "react";

export function IngresoForm() {
  const [error, setError] = useState<string | null>(null);
  const [ocupado, setOcupado] = useState(false);

  async function entrar(formulario: HTMLFormElement) {
    setOcupado(true);
    setError(null);
    const datos = new FormData(formulario);
    const resultado = await signIn("credentials", {
      email: String(datos.get("email") ?? ""),
      password: String(datos.get("password") ?? ""),
      redirect: false,
    });
    setOcupado(false);
    if (!resultado || resultado.error) {
      setError("Correo o clave incorrectos.");
      return;
    }
    window.location.href = "/panel";
  }

  return (
    <Box
      component="form"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        void entrar(event.currentTarget);
      }}
      sx={{ mt: 3, display: "grid", gap: 2, maxWidth: 420 }}
    >
      <TextField name="email" type="email" label="Correo" required autoComplete="username" defaultValue="demo@anden.local" />
      <TextField name="password" type="password" label="Clave" required autoComplete="current-password" defaultValue="oficio" />
      {error ? <Alert severity="error">{error}</Alert> : null}
      <Button
        type="button"
        variant="contained"
        disabled={ocupado}
        onClick={(event) => {
          const formulario = event.currentTarget.closest("form");
          if (formulario) void entrar(formulario);
        }}
      >
        {ocupado ? "Entrando…" : "Entrar"}
      </Button>
    </Box>
  );
}
