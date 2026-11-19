import { useColorScheme } from "react-native";
import { clair, sombre, espacements, rayons, typographie } from "./tokens";

// Renvoie la palette (clair ou sombre) selon le thème du téléphone.
export function useTheme() {
  const schema = useColorScheme();
  const palette = schema === "dark" ? sombre : clair;
  return { palette, espacements, rayons, typographie };
}
