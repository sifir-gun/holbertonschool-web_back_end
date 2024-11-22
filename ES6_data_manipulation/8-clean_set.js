export default function cleanSet (set, startString) {
  // Vérifie si startString est valide
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  // Filtre et transforme les valeurs du Set
  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-')
}
