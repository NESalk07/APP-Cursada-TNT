import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function MarcaDetalleScreen() {
  const { nombre } = useLocalSearchParams(); // Captura el ID/Nombre seleccionado

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marca Seleccionada</Text>
      <View style={styles.card}>
        <Text style={styles.detailText}>ID de Marca: {nombre}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#eff6ff", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#1d4ed8", marginBottom: 12 },
  card: { backgroundColor: "#fff", padding: 20, borderRadius: 12, width: "100%", maxWidth: 350, alignItems: "center", borderWidth: 1, borderColor: "#bfdbfe" },
  detailText: { fontSize: 18, fontWeight: "600", color: "#1e3a8a" }
});