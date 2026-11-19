import { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { Ecran } from "@/composants/Ecran";
import { Texte } from "@/composants/Texte";
import { Bouton } from "@/composants/Bouton";
import { ChampSaisie } from "@/composants/ChampSaisie";
import { Lien } from "@/composants/Lien";
import { useTheme } from "@/theme/useTheme";

type TypeUtilisateur = "Voyageur" | "Agence";

const LONGUEUR_MIN_MOT_DE_PASSE = 8;

// Écran 3. Inscription
export function EcranInscription() {
  const router = useRouter();
  const { espacements } = useTheme();
  const [typeUtilisateur, setTypeUtilisateur] = useState<TypeUtilisateur>("Voyageur");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  // Valeurs dérivées : calculées à chaque rendu, sans useEffect.
  const motDePasseTropCourt = motDePasse.length >= 1 && motDePasse.length < LONGUEUR_MIN_MOT_DE_PASSE;
  const formulaireValide = nom.trim() !== "" && email.trim() !== "" && motDePasse.length >= LONGUEUR_MIN_MOT_DE_PASSE;

  return (
    <Ecran defilement>
      <View style={{ flex: 1, gap: espacements.l, paddingTop: espacements.l }}>
        <Texte variante="titre" accessibilityRole="header">
          Créer un compte
        </Texte>

        <View style={{ gap: espacements.s }}>
          <Texte variante="legende" couleur="texteSecondaire">
            Je suis
          </Texte>
          <View style={{ flexDirection: "row", gap: espacements.s }}>
            <Bouton
              titre="Voyageur"
              type={typeUtilisateur === "Voyageur" ? "primaire" : "secondaire"}
              onPress={() => setTypeUtilisateur("Voyageur")}
              style={{ flex: 1 }}
            />
            <Bouton
              titre="Agence"
              type={typeUtilisateur === "Agence" ? "primaire" : "secondaire"}
              onPress={() => setTypeUtilisateur("Agence")}
              style={{ flex: 1 }}
            />
          </View>
        </View>

        <View style={{ gap: espacements.m }}>
          <ChampSaisie
            etiquette={typeUtilisateur === "Agence" ? "Nom de l'agence" : "Nom complet"}
            valeur={nom}
            onChangeText={setNom}
            autoCapitalize="words"
          />
          <ChampSaisie
            etiquette="E-mail"
            valeur={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="vous@exemple.com"
          />
          <ChampSaisie
            etiquette="Mot de passe"
            valeur={motDePasse}
            onChangeText={setMotDePasse}
            secureTextEntry
            erreur={motDePasseTropCourt ? "Le mot de passe doit contenir au moins 8 caractères" : undefined}
          />
        </View>

        <View style={{ gap: espacements.s }}>
          <Bouton titre="Créer un compte" desactive={!formulaireValide} onPress={() => router.replace("/accueil")} />
          <Lien titre="Déjà un compte ? Se connecter" onPress={() => router.replace("/connexion")} />
        </View>
      </View>
    </Ecran>
  );
}
