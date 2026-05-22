// app/(tabs)/index.tsx
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

// Importamos los datos locales (asegurate que estas rutas sean correctas en tu proyecto)
import { categorias } from "@/src/data/categorias";
import { etiquetas } from "@/src/data/etiquetas";
import { marcas } from "@/src/data/marcas";

// Importamos las rutas y la función para construirlas
import { AppRoute, ROUTES } from "@/src/navigation/routes";

export default function IndexScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>Explorar Alimentos</Text>

      {/* Sección de Categorías */}
      <SeccionList
        title="Categorías"
        items={categorias}
        route={ROUTES.CATEGORIA}
      />

      {/* Sección de Marcas */}
      <SeccionList 
        title="Marcas" 
        items={marcas} 
        route={ROUTES.MARCA} 
      />

      {/* Sección de Etiquetas */}
      <SeccionList
        title="Etiquetas"
        items={etiquetas}
        route={ROUTES.ETIQUETA}
      />
    </ScrollView>
  );
}

// --- COMPONENTE INTERNO PARA LAS LISTAS ---

type ListItem = {
  id: string;
  nombre: string;
};

type SectionListProps = {
  title: string;
  items: ListItem[];
  route: AppRoute;
};

function SeccionList({ title, items, route }: SectionListProps) {
  const navigation: any = useNavigation();

  return (
    <View style={styles.listBlock}>
      <Text style={styles.listTitle}>{title}</Text>
      <View style={styles.itemsContainer}>
        {items.map((it) => (
          <Pressable
            key={it.id}
            style={({ pressed }) => [
              styles.itemButton,
              pressed && styles.itemButtonPressed,
            ]}
            onPress={() => navigation.navigate(route as any, { id: it.id })}
          >
            <Text style={styles.itemText}>{it.nombre}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}


// --- ESTILOS ---

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#f8fafc", // Un gris muy clarito para el fondo
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 24,
    textAlign: "center",
  },
  listBlock: {
    marginBottom: 30,
    width: "100%",
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#1d4ed8", // Azul de tu app
    paddingLeft: 10,
  },
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  itemButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    // Sombra suave
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemButtonPressed: {
    backgroundColor: "#eff6ff",
    borderColor: "#bfdbfe",
  },
  itemText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#475569",
  },
});