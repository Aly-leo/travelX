import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/theme/useTheme";
import { clair, sombre } from "@/theme/tokens";

// Vitrine temporaire : nuancier et composants (à supprimer à l'étape 10).
export function EcranVitrine() {
  const { palette, espacements, rayons } = useTheme();
  const noms = Object.keys(clair) as (keyof typeof clair)[];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: palette.fond }}>
      <ScrollView contentContainerStyle={{ padding: espacements.m, gap: espacements.s }}>
        <Text style={{ color: palette.texte, fontSize: 24 }}>Nuancier TravelX</Text>
        {noms.map((nom) => (
          <View key={nom} style={{ flexDirection: "row", alignItems: "center", gap: espacements.s }}>
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: rayons.petit,
                backgroundColor: palette[nom],
                borderWidth: 1,
                borderColor: palette.bordure,
              }}
            />
            <Text style={{ color: palette.texte }}>
              {nom} — {clair[nom]} / {sombre[nom]}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
