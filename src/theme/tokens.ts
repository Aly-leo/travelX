// Variables de la maquette Figma (ne pas modifier).
export const clair = {
  fond: "#FFFFFF",
  surface: "#F5F7F6",
  texte: "#1A1A1A",
  texteSecondaire: "#5C6670",
  primaire: "#1D4ED8",
  surPrimaire: "#FFFFFF",
  teinte: "#E8EEFC",
  bordure: "#D5DBD8",
  contourChamp: "#7D8790",
  erreur: "#C62828",
};

export const sombre: typeof clair = {
  fond: "#121417",
  surface: "#1E2226",
  texte: "#F2F4F5",
  texteSecondaire: "#9AA4AE",
  primaire: "#7AA2F7",
  surPrimaire: "#121417",
  teinte: "#1C2638",
  bordure: "#2E353B",
  contourChamp: "#8A949C",
  erreur: "#EF6C6C",
};

export type Palette = typeof clair;

export const espacements = { xs: 4, s: 8, m: 16, l: 24, xl: 32 };
export const rayons = { petit: 8, moyen: 12, pilule: 999 };

export type Graisse = "400" | "600" | "700";
export type VarianteTexte = "titre" | "sousTitre" | "corps" | "legende" | "libelle";

export const typographie: Record<VarianteTexte, { taille: number; graisse: Graisse; hauteur: number }> = {
  titre: { taille: 24, graisse: "700", hauteur: 32 },
  sousTitre: { taille: 18, graisse: "600", hauteur: 24 },
  corps: { taille: 16, graisse: "400", hauteur: 24 },
  legende: { taille: 13, graisse: "400", hauteur: 16 },
  libelle: { taille: 16, graisse: "700", hauteur: 24 },
};

export const tailleTactileMin = 48; // dp
