import { Pressable, type StyleProp, type ViewStyle } from "react-native";
import { useTheme } from "@/theme/useTheme";
import { tailleTactileMin } from "@/theme/tokens";
import { Texte } from "./Texte";

export type TypeBouton = "primaire" | "secondaire" | "tertiaire" | "danger";

type Props = {
  titre: string;
  onPress: () => void;
  type?: TypeBouton;
  desactive?: boolean;
  style?: StyleProp<ViewStyle>;
};

// Bouton : 4 types × états repos / appuyé (opacité) / désactivé. Hauteur minimale 48 dp.
export function Bouton({ titre, onPress, type = "primaire", desactive = false, style }: Props) {
  const { palette, espacements, rayons } = useTheme();

  const fond = type === "primaire" ? palette.primaire : type === "danger" ? palette.erreur : "transparent";
  const couleurTexte = type === "primaire" || type === "danger" ? "surPrimaire" : "primaire";
  const contour = type === "secondaire" ? palette.primaire : "transparent";

  return (
    <Pressable
      onPress={onPress}
      disabled={desactive}
      accessibilityRole="button"
      accessibilityLabel={titre}
      accessibilityState={{ disabled: desactive }}
      style={({ pressed }) => [
        {
          minHeight: tailleTactileMin,
          paddingHorizontal: espacements.m,
          borderRadius: rayons.moyen,
          borderWidth: 1.5,
          borderColor: contour,
          backgroundColor: fond,
          alignItems: "center",
          justifyContent: "center",
          opacity: desactive ? 0.4 : pressed ? 0.7 : 1,
        },
        style,
      ]}
    >
      <Texte variante="libelle" couleur={couleurTexte}>
        {titre}
      </Texte>
    </Pressable>
  );
}
