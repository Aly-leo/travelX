import type { ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/theme/useTheme";

type Props = {
  children: ReactNode;
  defilement?: boolean;
};

// Conteneur d'écran : zones sûres, fond du thème, défilement optionnel.
export function Ecran({ children, defilement = false }: Props) {
  const { palette, espacements } = useTheme();
  const contenu = { padding: espacements.m, flexGrow: 1 };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: palette.fond }}>
      {defilement ? (
        <ScrollView contentContainerStyle={contenu} keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      ) : (
        <View style={[contenu, { flex: 1 }]}>{children}</View>
      )}
    </SafeAreaView>
  );
}
