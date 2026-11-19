import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

// Indique si le clavier est ouvert (abonnement aux événements, nettoyé au démontage).
export function useClavierVisible(): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ouverture = Keyboard.addListener("keyboardDidShow", () => setVisible(true));
    const fermeture = Keyboard.addListener("keyboardDidHide", () => setVisible(false));
    return () => {
      ouverture.remove();
      fermeture.remove();
    };
  }, []);

  return visible;
}
