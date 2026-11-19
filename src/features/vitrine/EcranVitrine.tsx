import { View } from "react-native";
import { Ecran } from "@/composants/Ecran";
import { Texte } from "@/composants/Texte";
import { useTheme } from "@/theme/useTheme";
import { clair, sombre } from "@/theme/tokens";

// Vitrine temporaire : nuancier et composants (à supprimer à l'étape 10).
export function EcranVitrine() {
  const { palette, espacements, rayons } = useTheme();
  const noms = Object.keys(clair) as (keyof typeof clair)[];

  return (
    <Ecran defilement>
      <View style={{ gap: espacements.m }}>
        <Texte variante="titre">Nuancier TravelX</Texte>
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
            <Texte variante="legende">
              {nom} — {clair[nom]} / {sombre[nom]}
            </Texte>
          </View>
        ))}

        <Texte variante="titre">Titre (24, 700)</Texte>
        <Texte variante="sousTitre">Sous-titre (18, 600)</Texte>
        <Texte variante="corps">Corps (16, 400)</Texte>
        <Texte variante="legende" couleur="texteSecondaire">
          Légende (13, 400)
        </Texte>
        <Texte variante="libelle">Libellé (16, 700)</Texte>
      </View>
    </Ecran>
  );
}
