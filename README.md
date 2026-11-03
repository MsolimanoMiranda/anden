# Andén

El sitio que presenta el oficio. Cada página declara cómo se construye: una vez en el build, en cada visita, en el navegador o cada treinta segundos.

## Concepto

Un visitante recorre los proyectos, cambia el puesto del mercado y, si entra, ve el panel. La cookie recuerda si mira el Mercado Central o Surquillo. La sesión es un JWT de demostración. El borde (`proxy.ts`, el middleware de Next 16) pone la cookie y frena `/panel` cuando no hay sesión.

## Stack

| Pieza | Para qué |
| --- | --- |
| Next.js 16 | App Router. |
| SSR | `/mercado` con `force-dynamic`. Lee la cookie en el servidor. |
| SSG | `/`, `/proyectos`, `/blog` y sus fichas, con `generateStaticParams`. |
| CSR | `/panel` pide `/api/panel/resumen` en el cliente. |
| ISR | `/bitacora` revalida cada 30 segundos, o al dejar un apunte. |
| Middleware | `src/proxy.ts` pone `anden-puesto` y redirige `/panel`. |
| Rutas dinámicas | `/proyectos/[slug]` y `/blog/[slug]`. |
| Route Handlers | `/api/puesto`, `/api/contacto`, `/api/panel/resumen`. |
| NextAuth | Credenciales. Correo `demo@anden.local`, clave `oficio`. |
| Material UI | Componentes y el tema. |
| Cookies | `anden-puesto` elige la lista de precios. |
| Docker | `Dockerfile` con salida `standalone`. |

## Flujo

```mermaid
flowchart TD
  visita[Visita]
  proxy[proxy.ts]
  cookie[Cookie anden-puesto]
  ssg[Páginas estáticas]
  ssr[Mercado en cada request]
  isr[Bitácora revalidada]
  panel{Ruta /panel}
  ingreso[Pantalla de ingreso]
  csr[Panel en el cliente]
  visita --> proxy
  proxy --> cookie
  proxy --> ssg
  proxy --> ssr
  proxy --> isr
  proxy --> panel
  panel -->|sin sesión| ingreso
  panel -->|con sesión| csr
  ingreso -->|demo@anden.local| csr
```

## Correr

Desde esta carpeta:

```bash
npm ci
npm run dev
```

Abre [http://127.0.0.1:43123](http://127.0.0.1:43123). Las variables de ejemplo están en `.env.example`. Si no hay `.env`, el código usa el secreto y la clave de demostración.
