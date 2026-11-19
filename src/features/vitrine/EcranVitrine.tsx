import { View } from "react-native";
import { Bouton } from "@/composants/Bouton";
import { ChampSaisie } from "@/composants/ChampSaisie";
import { Ecran } from "@/composants/Ecran";
import { Lien } from "@/composants/Lien";
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

        <Texte variante="titre">Boutons</Texte>
        <Bouton titre="Primaire" onPress={() => undefined} />
        <Bouton titre="Secondaire" type="secondaire" onPress={() => undefined} />
        <Bouton titre="Tertiaire" type="tertiaire" onPress={() => undefined} />
        <Bouton titre="Danger" type="danger" onPress={() => undefined} />
        <Bouton titre="Primaire désactivé" desactive onPress={() => undefined} />
        <Bouton titre="Secondaire désactivé" type="secondaire" desactive onPress={() => undefined} />

        <Texte variante="titre">Champs et lien</Texte>
        <ChampSaisie etiquette="Repos" valeur="" onChangeText={() => undefined} placeholder="vous@exemple.com" />
        <ChampSaisie etiquette="Rempli" valeur="alyssa@exemple.com" onChangeText={() => undefined} />
        <ChampSaisie
          etiquette="Erreur"
          valeur="1234"
          onChangeText={() => undefined}
          erreur="Le mot de passe doit contenir au moins 8 caractères"
        />
        <ChampSaisie etiquette="Désactivé" valeur="Non modifiable" onChangeText={() => undefined} desactive />
        <Lien titre="Pas de compte ? Créer un compte" onPress={() => undefined} />
      </View>
    </Ecran>
  );
}
