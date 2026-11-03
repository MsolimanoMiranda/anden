export type Nota = {
  slug: string;
  titulo: string;
  fecha: string;
  cuerpo: string[];
};

export const notas: Nota[] = [
  {
    slug: "hexagonal-y-clean",
    titulo: "Hexagonal y clean no son dos religiones",
    fecha: "2 de noviembre de 2026",
    cuerpo: [
      "En los avisos de Lima aparecen las dos palabras, a veces en la misma línea. En este repositorio quieren decir lo mismo en la práctica: el dominio no importa el framework, los casos de uso dependen de puertos, y el framework vive en un adaptador.",
      "Go, FastAPI, Express, PHP y los tres Spring lo muestran con carpetas distintas y la misma costura. El nombre cambia. La prueba es la misma: se puede ejercitar la regla sin levantar el servidor.",
      "Clean Architecture agrega una opinión sobre quién puede importar a quién. Hexagonal insiste en los puertos. Si el dominio no conoce Gin, PDO ni Firestore, las dos etiquetas ya están cumplidas.",
    ],
  },
  {
    slug: "sin-iphone",
    titulo: "Qué se prueba cuando no hay iPhone",
    fecha: "2 de noviembre de 2026",
    cuerpo: [
      "Cuentas claras corre swift test en Linux. La vista SwiftUI queda detrás de canImport(SwiftUI), así que no finjo un simulador de iOS en un servidor.",
      "Bodega de barrio prueba dominio, datos y presenter con Gradle. El módulo androidApp —Compose, Hilt, Firestore— se abre en Android Studio. Puesto vivo prueba el view model y el tiempo real en memoria; la pantalla de React Native está escrita para el CLI.",
      "Taller de fotos sí corre flutter test, incluido un widget. La imagen es un puerto. La cámara entra el día que el teléfono está sobre la mesa.",
    ],
  },
  {
    slug: "oauth-de-demo",
    titulo: "Un JWT de demo no es un IdP",
    fecha: "2 de noviembre de 2026",
    cuerpo: [
      "Banco Pacífico y Ruta de pagos exigen un bearer token. El endpoint /auth/token firma un JWT con una clave simétrica si el cliente demo acierta. Spring Security lo valida como resource server.",
      "Eso enseña el borde: qué ruta es pública, qué claim viaja, qué pasa con un token ausente. No enseña un tenant de Auth0 ni rotación de llaves.",
      "Para enchufar un emisor real se reemplaza el decoder local por issuer-uri. El dominio de la cuenta no se entera.",
    ],
  },
];

export function notaPorSlug(slug: string) {
  return notas.find((nota) => nota.slug === slug);
}
