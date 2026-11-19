export type Categorie = "Bus" | "Avion" | "Train";

export type Depart = {
  id: string;
  titre: string;
  ville: string;
  destination: string;
  categorie: Categorie;
  heure: string;
  prix: number;
};
