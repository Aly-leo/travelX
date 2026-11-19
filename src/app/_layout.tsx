import { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { policesRoboto } from "@/theme/polices";
import { useTheme } from "@/theme/useTheme";

// Garde l'écran de démarrage tant que les polices ne sont pas chargées.
SplashScreen.preventAutoHideAsync();

export default function LayoutRacine() {
  const [policesChargees, erreurPolices] = useFonts(policesRoboto);
  const { palette } = useTheme();

  const pret = policesChargees || erreurPolices !== null;

  useEffect(() => {
    if (pret) SplashScreen.hideAsync();
  }, [pret]);

  if (!pret) return null;

  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: palette.fond } }} />
    </>
  );
}
