import { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { Ecran } from "@/composants/Ecran";
import { Texte } from "@/composants/Texte";
import { Bouton } from "@/composants/Bouton";
import { ChampSaisie } from "@/composants/ChampSaisie";
import { Lien } from "@/composants/Lien";
import { useTheme } from "@/theme/useTheme";
import { useClavierVisible } from "../hooks/useClavierVisible";

// Écran 2. Connexion
export function EcranConnexion() {
  const router = useRouter();
  const { espacements } = useTheme();
  const clavierVisible = useClavierVisible();
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const formulaireVide = email.trim() === "" || motDePasse === "";

  return (
    <Ecran defilement>
      <View style={{ flex: 1, gap: espacements.l, paddingTop: espacements.l }}>
        <View style={{ gap: espacements.s }}>
          <Texte variante="titre" accessibilityRole="header">
            Connexion
          </Texte>
          {clavierVisible ? null : (
            <Texte variante="corps" couleur="texteSecondaire">
              Connectez-vous pour retrouver et réserver vos départs.
            </Texte>
          )}
        </View>

        <View style={{ gap: espacements.m }}>
          <ChampSaisie
            etiquette="E-mail"
            valeur={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="vous@exemple.com"
          />
          <ChampSaisie etiquette="Mot de passe" valeur={motDePasse} onChangeText={setMotDePasse} secureTextEntry />
        </View>

        <View style={{ gap: espacements.s }}>
          <Bouton titre="Se connecter" desactive={formulaireVide} onPress={() => router.replace("/accueil")} />
          <Lien titre="Pas de compte ? Créer un compte" onPress={() => router.push("/inscription")} />
        </View>
      </View>
    </Ecran>
  );
}
