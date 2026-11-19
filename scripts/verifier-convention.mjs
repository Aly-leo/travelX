// Vérificateur de conventions du TP 3 (TravelX).
// Erreurs = code de sortie 1. Lignes « À VÉRIFIER » = non bloquantes.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const racine = process.cwd();
const src = join(racine, "src");
const erreurs = [];
const avertissements = [];

function lister(dossier) {
  const resultat = [];
  if (!existsSync(dossier)) return resultat;
  for (const nom of readdirSync(dossier)) {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) resultat.push(...lister(chemin));
    else if (/\.(ts|tsx)$/.test(nom)) resultat.push(chemin);
  }
  return resultat;
}

const fichiers = lister(src);
const rel = (f) => relative(racine, f).split(sep).join("/");

const interdits = [
  { motif: /\bas any\b/, message: "`as any` interdit" },
  { motif: /@ts-ignore/, message: "`@ts-ignore` interdit" },
  { motif: /console\.log/, message: "`console.log` interdit" },
  { motif: /TouchableOpacity/, message: "`TouchableOpacity` interdit (utiliser Pressable)" },
  { motif: /key=\{\s*(index|i|idx)\s*\}/, message: "`key={index}` interdit (utiliser l'identifiant)" },
];

for (const fichier of fichiers) {
  const chemin = rel(fichier);
  const contenu = readFileSync(fichier, "utf8");
  const lignes = contenu.split("\n");
  const estTokens = chemin === "src/theme/tokens.ts";
  const estTexte = chemin === "src/composants/Texte.tsx";

  lignes.forEach((ligne, i) => {
    const place = `${chemin}:${i + 1}`;
    for (const { motif, message } of interdits) if (motif.test(ligne)) erreurs.push(`${place} — ${message}`);
    if (/import[^;]*\bSafeAreaView\b[^;]*from\s+["']react-native["']/.test(ligne))
      erreurs.push(`${place} — SafeAreaView de react-native interdit`);
    if (!estTokens && /#[0-9a-fA-F]{3,8}\b/.test(ligne)) erreurs.push(`${place} — couleur hexadécimale hors tokens.ts`);
    if (!estTokens && !estTexte && /fontWeight/.test(ligne)) erreurs.push(`${place} — fontWeight hors Texte/tokens.ts`);
  });

  // Imports entre fonctionnalités
  const m = chemin.match(/^src\/features\/([^/]+)\//);
  if (m) {
    const propre = m[1];
    for (const imp of contenu.matchAll(/from\s+["']@\/features\/([^/"']+)/g)) {
      if (imp[1] !== propre) erreurs.push(`${chemin} — import de la fonctionnalité « ${imp[1]} » depuis « ${propre} »`);
    }
  }
}

// Routes minces
for (const fichier of fichiers.filter((f) => rel(f).startsWith("src/app/") && !rel(f).endsWith("_layout.tsx"))) {
  const utiles = readFileSync(fichier, "utf8")
    .split("\n")
    .filter((l) => l.trim() !== "" && !l.trim().startsWith("//"));
  if (utiles.length > 3) erreurs.push(`${rel(fichier)} — route trop épaisse (${utiles.length} lignes, 3 max)`);
}

// Composants attendus
for (const nom of ["Bouton", "ChampSaisie", "Carte"]) {
  if (!existsSync(join(src, "composants", `${nom}.tsx`)))
    avertissements.push(`À VÉRIFIER : composant ${nom} absent (src/composants/${nom}.tsx)`);
}
if (existsSync(join(src, "features", "vitrine")))
  avertissements.push("À VÉRIFIER : la vitrine existe encore (à supprimer à l'étape 10)");

for (const a of avertissements) console.warn(a);
if (erreurs.length > 0) {
  for (const e of erreurs) console.error(`ERREUR : ${e}`);
  console.error(`\n${erreurs.length} erreur(s).`);
  process.exit(1);
}
console.info(`OK : ${fichiers.length} fichiers vérifiés, 0 erreur.`);
