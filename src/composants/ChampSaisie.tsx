import { useState } from "react";
import { TextInput, View, type KeyboardTypeOptions } from "react-native";
import { useTheme } from "@/theme/useTheme";
import { tailleTactileMin } from "@/theme/tokens";
import { policeSelonGraisse } from "@/theme/polices";
import { Texte } from "./Texte";

type Props = {
  etiquette: string;
  valeur: string;
  onChangeText: (texte: string) => void;
  erreur?: string;
  desactive?: boolean;
  secureTextEntry?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

// Champ de saisie : états Repos, Focus, Erreur, Désactivé.
export function ChampSaisie({
  etiquette,
  valeur,
  onChangeText,
  erreur,
  desactive = false,
  secureTextEntry = false,
  placeholder,
  keyboardType,
  autoCapitalize = "none",
}: Props) {
  const { palette, espacements, rayons, typographie } = useTheme();
  const [focus, setFocus] = useState(false);

  const contour = erreur ? palette.erreur : focus ? palette.primaire : palette.contourChamp;

  return (
    <View style={{ gap: espacements.xs }}>
      <Texte variante="legende" couleur="texteSecondaire">
        {etiquette}
      </Texte>
      <TextInput
        value={valeur}
        onChangeText={onChangeText}
        editable={!desactive}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={palette.texteSecondaire}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        accessibilityLabel={etiquette}
        style={{
          minHeight: tailleTactileMin,
          paddingHorizontal: espacements.m,
          borderRadius: rayons.moyen,
          borderWidth: focus || erreur ? 2 : 1,
          borderColor: contour,
          backgroundColor: desactive ? palette.surface : palette.fond,
          color: desactive ? palette.texteSecondaire : palette.texte,
          fontFamily: policeSelonGraisse[typographie.corps.graisse],
          fontSize: typographie.corps.taille,
        }}
      />
      {erreur ? (
        <Texte variante="legende" couleur="erreur" accessibilityLiveRegion="polite">
          {erreur}
        </Texte>
      ) : null}
    </View>
  );
}
