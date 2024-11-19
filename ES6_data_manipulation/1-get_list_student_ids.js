export default function getListStudentIds (students) {
  // Vérifie si l'argument est un tableau
  if (!Array.isArray(students)) {
    return []
  }

  // Retourne un tableau contenant uniquement les ids
  return students.map((student) => student.id)
}
