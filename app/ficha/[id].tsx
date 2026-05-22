import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function FichaDetalleScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visualizando Ficha</Text>
      <Text style={styles.badge}>Nro. Registro: #{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0fdf4", gap: 12 },
  title: { fontSize: 26, fontWeight: "bold", color: "#166534" },
  badge: { backgroundColor: "#bbf7d0", paddingVertical: 8, paddingHorizontal: 16, borderRadius: 999, fontSize: 18, fontWeight: "700", color: "#166534" }
});