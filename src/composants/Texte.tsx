import { Text, type TextProps } from "react-native";
import { useTheme } from "@/theme/useTheme";
import { policeSelonGraisse } from "@/theme/polices";
import type { VarianteTexte } from "@/theme/tokens";

type Props = TextProps & {
  variante?: VarianteTexte;
  couleur?: "texte" | "texteSecondaire" | "primaire" | "erreur" | "surPrimaire";
};

// Texte de l'application : seule source de police, taille et graisse.
export function Texte({ variante = "corps", couleur = "texte", style, ...reste }: Props) {
  const { palette, typographie } = useTheme();
  const t = typographie[variante];

  return (
    <Text
      {...reste}
      style={[
        {
          color: palette[couleur],
          fontFamily: policeSelonGraisse[t.graisse],
          fontSize: t.taille,
          lineHeight: t.hauteur,
        },
        style,
      ]}
    />
  );
}
