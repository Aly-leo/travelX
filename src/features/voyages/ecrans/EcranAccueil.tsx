import { FlatList, View } from "react-native";
import { Ecran } from "@/composants/Ecran";
import { Texte } from "@/composants/Texte";
import { Carte } from "@/composants/Carte";
import { useTheme } from "@/theme/useTheme";
import { useDeparts } from "../hooks/useDeparts";

// Écran 4. Accueil
export function EcranAccueil() {
  const { espacements } = useTheme();
  const { departsAffiches } = useDeparts();

  return (
    <Ecran>
      <FlatList
        data={departsAffiches}
        keyExtractor={(depart) => depart.id}
        contentContainerStyle={{ gap: espacements.m, paddingBottom: espacements.l }}
        ListHeaderComponent={
          <View style={{ paddingBottom: espacements.s }}>
            <Texte variante="titre" accessibilityRole="header">
              Prochains départs
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
