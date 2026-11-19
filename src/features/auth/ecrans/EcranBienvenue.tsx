import { View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Ecran } from "@/composants/Ecran";
import { Texte } from "@/composants/Texte";
import { Bouton } from "@/composants/Bouton";
import { useTheme } from "@/theme/useTheme";

// Écran 1. Bienvenue
export function EcranBienvenue() {
  const router = useRouter();
  const { palette, espacements } = useTheme();

  return (
    <Ecran>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: espacements.m }}>
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: palette.teinte,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="bus" size={56} color={palette.primaire} />
        </View>
        <Texte variante="titre" accessibilityRole="header">
          TravelX
        </Texte>
        <Texte variante="corps" couleur="texteSecondaire" style={{ textAlign: "center" }}>
          Réservez vos voyages en quelques gestes
        </Texte>
      </View>
      <View style={{ gap: espacements.s }}>
        <Bouton titre="Se connecter" onPress={() => router.push("/connexion")} />
        <Bouton titre="Créer un compte" type="secondaire" onPress={() => router.push("/inscription")} />
      </View>
    </Ecran>
  );
}
