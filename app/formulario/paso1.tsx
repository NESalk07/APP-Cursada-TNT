import { useState } from "react";
import { Alert, Button, Platform, StyleSheet, Text, TextInput, View } from "react-native";

export default function FormularioUnicoScreen() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const handleEnviar = () => {
    const mensaje = `¡Datos recibidos!\nNombre: ${nombre}\nCorreo: ${correo}`;
    
    if (Platform.OS === 'web') {
      alert(mensaje);
    } else {
      Alert.alert("Formulario Completado", mensaje);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formCard}>
        <Text style={styles.title}>Registro Único</Text>
        <Text style={styles.subtitle}>Completá tus datos en un solo paso</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombre Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Juan Pérez"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo Electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: juan@untdf.edu.ar"
            keyboardType="email-address"
            autoCapitalize="none"
            value={correo}
            onChangeText={setCorreo}
          />
        </View>

        <Button 
          title="Enviar Datos" 
          color="#1d4ed8" 
          onPress={handleEnviar}
          disabled={!nombre || !correo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#eff6ff", padding: 20 },
  formCard: { backgroundColor: "#fff", width: "100%", maxWidth: 360, padding: 24, borderRadius: 16, gap: 16, borderWidth: 1, borderColor: "#bfdbfe" },
  title: { fontSize: 26, fontWeight: "700", color: "#1e3a8a", textAlign: "center" },
  subtitle: { fontSize: 14, color: "#64748b", textAlign: "center", marginBottom: 8 },
  inputGroup: { gap: 6 },
  label: { fontSize: 14, fontWeight: "600", color: "#334155" },
  input: { borderWidth: 1, borderColor: "#cbd5e1", padding: 12, borderRadius: 8, fontSize: 16, backgroundColor: "#f8fafc" }
});