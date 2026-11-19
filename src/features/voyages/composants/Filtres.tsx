import { Pressable, View } from "react-native";
import { Texte } from "@/composants/Texte";
import { useTheme } from "@/theme/useTheme";
import type { FiltreCategorie } from "../hooks/useDeparts";

const options: FiltreCategorie[] = ["Tous", "Bus", "Avion", "Train"];

type Props = {
  actif: FiltreCategorie;
  onChoisir: (filtre: FiltreCategorie) => void;
};

// Pastilles de filtre par type de transport.
export function Filtres({ actif, onChoisir }: Props) {
  const { palette, espacements, rayons } = useTheme();

  return (
    <View style={{ flexDirection: "row", gap: espacements.s, flexWrap: "wrap" }}>
      {options.map((option) => {
        const selectionne = option === actif;
        return (
          <Pressable
            key={option}
            onPress={() => onChoisir(option)}
            hitSlop={4}
            accessibilityRole="button"
            accessibilityLabel={`Filtrer : ${option}`}
            accessibilityState={{ selected: selectionne }}
            style={{
              height: 40,
              paddingHorizontal: espacements.m,
              borderRadius: rayons.pilule,
              borderWidth: 1,
              borderColor: selectionne ? palette.primaire : palette.bordure,
              backgroundColor: selectionne ? palette.primaire : palette.surface,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Texte variante="libelle" couleur={selectionne ? "surPrimaire" : "texte"}>
              {option}
            </Texte>
          </Pressable>
        );
      })}
    </View>
  );
}
