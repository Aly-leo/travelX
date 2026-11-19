import type { Depart } from "./types";

export const departs: Depart[] = [
  { id: "d1", titre: "Douala → Yaoundé", ville: "Douala", destination: "Yaoundé", categorie: "Bus", heure: "07:30", prix: 6000 },
  { id: "d2", titre: "Douala → Kribi", ville: "Douala", destination: "Kribi", categorie: "Bus", heure: "09:00", prix: 5000 },
  {
    id: "d3",
    titre: "Yaoundé → Bafoussam",
    ville: "Yaoundé",
    destination: "Bafoussam",
    categorie: "Bus",
    heure: "08:15",
    prix: 7000,
  },
  { id: "d4", titre: "Douala → Garoua", ville: "Douala", destination: "Garoua", categorie: "Avion", heure: "11:40", prix: 85000 },
  {
    id: "d5",
    titre: "Yaoundé → Douala",
    ville: "Yaoundé",
    destination: "Douala",
    categorie: "Train",
    heure: "06:00",
    prix: 8500,
  },
  { id: "d6", titre: "Douala → Limbé", ville: "Douala", destination: "Limbé", categorie: "Bus", heure: "10:30", prix: 3000 },
];
