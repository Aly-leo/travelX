import { FlatList, View } from "react-native";
import { Ecran } from "@/composants/Ecran";
import { Texte } from "@/composants/Texte";
import { Carte } from "@/composants/Carte";
import { ChampSaisie } from "@/composants/ChampSaisie";
import { useSalutation } from "@/hooks/useSalutation";
import { useTheme } from "@/theme/useTheme";
import { Filtres } from "../composants/Filtres";
import { useDeparts } from "../hooks/useDeparts";

// Écran 4. Accueil
export function EcranAccueil() {
  const { espacements } = useTheme();
  const salutation = useSalutation();
  const { departsAffiches, villeDepart, setVilleDepart, destination, setDestination, date, setDate, categorie, setCategorie } =
    useDeparts();

  return (
    <Ecran>
      <FlatList
        data={departsAffiches}
        keyExtractor={(depart) => depart.id}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ gap: espacements.m, paddingBottom: espacements.l }}
        ListHeaderComponent={
          <View style={{ gap: espacements.m, paddingBottom: espacements.s }}>
            <Texte variante="titre" accessibilityRole="header">
              {salutation} !
            </Texte>
            <Texte variante="sousTitre" couleur="texteSecondaire">
              Prochains départs
            </Texte>
            <ChampSaisie
              etiquette="Départ"
              valeur={villeDepart}
              onChangeText={setVilleDepart}
              placeholder="Ville de départ"
              autoCapitalize="words"
            />
            <ChampSaisie
              etiquette="Destination"
              valeur={destination}
              onChangeText={setDestination}
              placeholder="Ville d'arrivée"
              autoCapitalize="words"
            />
            <ChampSaisie
              etiquette="Date"
              valeur={date}
              onChangeText={setDate}
              placeholder="jj/mm/aaaa"
              keyboardType="numbers-and-punctuation"
            />
            <Filtres actif={categorie} onChoisir={setCategorie} />
          </View>
        }
        ListEmptyComponent={
          <View style={{ paddingVertical: espacements.xl, alignItems: "center" }}>
            <Texte variante="corps" couleur="texteSecondaire" style={{ textAlign: "center" }}>
              Aucun départ ne correspond à votre recherche
            </Texte>
          </View>
        }
        renderItem={({ item }) => (
          <Carte
            horizontale
            titre={item.titre}
            sousTitre={`${item.categorie} · ${item.heure}`}
            info="Places disponibles"
            prix={item.prix}
            actionTitre="Réserver"
            onAction={() => undefined}
          />
        )}
      />
    </Ecran>
  );
}
