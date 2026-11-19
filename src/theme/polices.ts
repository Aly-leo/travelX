import { Roboto_400Regular, Roboto_600SemiBold, Roboto_700Bold } from "@expo-google-fonts/roboto";
import type { Graisse } from "./tokens";

// Polices chargées au démarrage (voir src/app/_layout.tsx).
export const policesRoboto = { Roboto_400Regular, Roboto_600SemiBold, Roboto_700Bold };

// Nom de la police Roboto selon la graisse.
export const policeSelonGraisse: Record<Graisse, string> = {
  "400": "Roboto_400Regular",
  "600": "Roboto_600SemiBold",
  "700": "Roboto_700Bold",
};
