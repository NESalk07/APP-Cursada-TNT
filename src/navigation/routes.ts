import { Href } from "expo-router";

export const ROUTES = {
  HOME: "/", // /(tabs)/index
  TABS_FAVS: "/favoritos",
  TABS_CLASES: "/clases",
  ALIMENTO: "/alimento",
  FORMULARIO_PASO_1: "/formulario/paso1",
  CATEGORIA: "/categorias/[nombre]",
  MARCA: "/marcas/[nombre]",
  ETIQUETA: "/etiquetas/[nombre]",
  FICHA: "/ficha/[id]",
  LISTA_FLATLIST: "/food/catalogo",
  SIMPLE_STATE: "/food/nutrientes-contador",
  INPUT_FILTER: "/food/buscador-filtros",
  FETCH_INDEX: "/food/fetch", 
  IMAGEN_GRADIENTE: "/food/galeria-visual",
} as const;

// Este tipo se construye tomando el objeto ROUTES, obteniendo sus claves con `keyof`
// y luego usando esas claves para formar la union de todos sus valores literales.
export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
type RouteParams = Record<string, string | number | boolean | undefined>;

// Esta función toma una ruta y un objeto de parámetros opcional, y construye un Href que puede 
// ser utilizado para navegar a esa ruta con los parámetros incluidos.
export const buildRoute = (route: AppRoute, params?: RouteParams): Href => {
  if (!params) {
    return route as Href;
  }

  return {
    pathname: route,
    params,
  } as Href;
};

// Función específica para construir la ruta de la ficha, tomando un ID numérico y convirtiéndolo a string
// para que coincida con el tipo esperado en los parámetros de la ruta.
export function fichaShowRoute(id: number) {
  return buildRoute(ROUTES.FICHA, { id: id.toString() });
}
