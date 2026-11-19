// 25000 → "25 000 FCFA" (espace insécable comme séparateur de milliers).
export function formaterPrix(montant: number): string {
  const entier = Math.round(montant).toString();
  const groupes = entier.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${groupes} FCFA`;
}
