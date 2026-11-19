import { Pressable } from "react-native";
import { tailleTactileMin } from "@/theme/tokens";
import { Texte } from "./Texte";

type Props = {
  titre: string;
  onPress: () => void;
};

// Lien texte (couleur primaire), zone tactile d'au moins 48 dp.
export function Lien({ titre, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="link"
      accessibilityLabel={titre}
      style={({ pressed }) => ({
        minHeight: tailleTactileMin,
        alignItems: "center",
        justifyContent: "center",
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Texte variante="libelle" couleur="primaire">
        {titre}
      </Texte>
    </Pressable>
  );
}
