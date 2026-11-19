import { departs } from "../donnees";

// Liste des départs affichés (valeur calculée directement, sans useEffect).
export function useDeparts() {
  return { departsAffiches: departs };
}
