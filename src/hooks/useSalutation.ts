import { useEffect, useState } from "react";

const HEURE_BASCULE = 18;
const UNE_MINUTE = 60_000;

function salutationActuelle(): "Bonjour" | "Bonsoir" {
  return new Date().getHours() < HEURE_BASCULE ? "Bonjour" : "Bonsoir";
}

// « Bonjour » avant 18 h, « Bonsoir » ensuite ; mis à jour chaque minute.
export function useSalutation(): string {
  const [salutation, setSalutation] = useState(salutationActuelle);

  useEffect(() => {
    const minuterie = setInterval(() => setSalutation(salutationActuelle()), UNE_MINUTE);
    return () => clearInterval(minuterie); // nettoyage au démontage
  }, []);

  return salutation;
}
