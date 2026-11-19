import { useMemo, useState } from "react";
import { departs } from "../donnees";
import type { Categorie } from "../types";

export type FiltreCategorie = "Tous" | Categorie;

// Minuscules et sans accents, pour une recherche tolérante (« yaounde » trouve « Yaoundé »).
function normaliser(texte: string): string {
  return texte.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}

// Recherche + filtre. La liste affichée est calculée à chaque rendu (useMemo), sans useEffect ni état dupliqué.
export function useDeparts() {
  const [villeDepart, setVilleDepart] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [categorie, setCategorie] = useState<FiltreCategorie>("Tous");

  const departsAffiches = useMemo(() => {
    const rechercheDepart = normaliser(villeDepart);
    const rechercheDestination = normaliser(destination);
    return departs.filter(
      (d) =>
        (categorie === "Tous" || d.categorie === categorie) &&
        normaliser(d.ville).includes(rechercheDepart) &&
        normaliser(d.destination).includes(rechercheDestination),
    );
  }, [villeDepart, destination, categorie]);

  return { departsAffiches, villeDepart, setVilleDepart, destination, setDestination, date, setDate, categorie, setCategorie };
}
