import { ScrollViewStyleReset } from 'expo-router/html';

// This file is web-only and used to configure the root HTML for every
// pagina en la aplicación. Puedes personalizar el título, meta tags, etc. Aquí también es
// donde puedes agregar estilos globales para la aplicación web. Ten en cuenta que este archivo no se 
// ejecutará en plataformas nativas, por lo que cualquier código aquí solo afectará a la versión web de tu aplicación.
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Título de la aplicación que se muestra en la pestaña del navegador */}
        <title>Mi App de Cursada</title>
        <ScrollViewStyleReset />
        
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        
      </head>
      <body>{children}</body>
    </html>
  );
}

const responsiveBackground = `
body {
  background-color: #fff;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}`;
