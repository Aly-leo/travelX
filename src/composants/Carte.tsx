import { View } from "react-native";
import { useTheme } from "@/theme/useTheme";
import { formaterPrix } from "@/utils/formaterPrix";
import { Bouton } from "./Bouton";
import { Texte } from "./Texte";

type Props = {
  titre: string;
  sousTitre: string;
  info: string;
  prix: number;
  actionTitre: string;
  onAction: () => void;
  actionDesactivee?: boolean;
  horizontale?: boolean;
};

// Carte : titre, sous-titre, info, prix formaté et bouton d'action. Variante horizontale pour l'Accueil.
export function Carte({
  titre,
  sousTitre,
  info,
  prix,
  actionTitre,
  onAction,
  actionDesactivee = false,
  horizontale = false,
}: Props) {
  const { palette, espacements, rayons } = useTheme();

  const textes = (
    <View style={{ flex: 1, gap: espacements.xs }}>
      <Texte variante="sousTitre">{titre}</Texte>
      <Texte variante="corps" couleur="texteSecondaire">
        {sousTitre}
      </Texte>
      <Texte variante="legende" couleur={actionDesactivee ? "erreur" : "texteSecondaire"}>
        {info}
      </Texte>
    </View>
  );

  const action = (
    <View style={{ gap: espacements.s, alignItems: horizontale ? "flex-end" : "stretch" }}>
      <Texte variante="libelle" couleur="primaire">
        {formaterPrix(prix)}
      </Texte>
      <Bouton titre={actionTitre} onPress={onAction} desactive={actionDesactivee} />
    </View>
  );

  return (
    <View
      style={{
        padding: espacements.m,
        borderRadius: rayons.moyen,
        borderWidth: 1,
        borderColor: palette.bordure,
        backgroundColor: palette.surface,
        gap: espacements.m,
        flexDirection: horizontale ? "row" : "column",
        alignItems: horizontale ? "center" : "stretch",
      }}
    >
      {textes}
      {action}
    </View>
  );
}
