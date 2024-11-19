Je vais reformater ce contenu en Markdown :

# ES6 Data Manipulation

Ce projet se concentre sur la maîtrise des techniques de manipulation de données ES6 en JavaScript. À travers une série d'exercices, vous apprendrez à travailler efficacement avec les tableaux, les objets, les sets et les maps en utilisant les fonctionnalités modernes d'ES6+.

## Table des matières

1. [Description](#description)
2. [Prérequis](#prérequis)
3. [Structure du projet](#structure-du-projet)
4. [Installation](#installation)
5. [Utilisation](#utilisation)
6. [Aperçu des tâches](#aperçu-des-tâches)
7. [Auteur](#auteur)

## Description

Ce projet a pour objectif de :
- Comprendre et appliquer les techniques avancées de manipulation de données en JavaScript
- Utiliser les fonctionnalités modernes ES6+ comme map, filter, reduce, sets, maps et typed arrays
- Écrire du code propre, efficace et modulaire

## Prérequis

- **Node.js** version 12.x ou supérieure
- **npm** (Node Package Manager)
- Éditeur de code comme VSCode
- Configuration du linter pour JavaScript (ex: ESLint)

## Structure du projet

```
ES6_data_manipulation/
├── 0-get_list_students.js
├── 1-get_list_student_ids.js
├── 2-get_students_by_loc.js
├── 3-get_ids_sum.js
├── 4-update_grade_by_city.js
├── 5-typed_arrays.js
├── 6-set.js
├── 7-has_array_values.js
├── 8-clean_set.js
├── 9-groceries_list.js
├── 10-update_uniq_items.js
├── 0-main.js (Exemple pour Tâche 0)
├── 1-main.js (Exemple pour Tâche 1)
├── ... (Autres fichiers main)
└── README.md
```

## Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/your-username/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end/ES6_data_manipulation
```

2. Installer les dépendances :
```bash
npm install
```

## Utilisation

Exécuter les tâches avec la commande suivante :
```bash
npm run dev <task-main-file.js>
```

Exemple :
```bash
npm run dev 0-main.js
```

## Aperçu des tâches

### 0. Liste basique d'objets
- **Fichier**: `0-get_list_students.js`
- **Fonction**: `getListStudents()`
- Retourne un tableau d'objets étudiants avec id, firstName et location

### 1. Plus de mapping
- **Fichier**: `1-get_list_student_ids.js`
- **Fonction**: `getListStudentIds()`
- Retourne un tableau d'IDs à partir d'une liste d'objets étudiants

### 2. Filter
- **Fichier**: `2-get_students_by_loc.js`
- **Fonction**: `getStudentsByLocation()`
- Filtre les étudiants par leur localisation

### 3. Reduce
- **Fichier**: `3-get_ids_sum.js`
- **Fonction**: `getStudentIdsSum()`
- Retourne la somme des IDs des étudiants

### 4. Combine
- **Fichier**: `4-update_grade_by_city.js`
- **Fonction**: `updateStudentGradeByCity()`
- Met à jour les notes des étudiants dans une ville spécifique

### 5. Typed Arrays
- **Fichier**: `5-typed_arrays.js`
- **Fonction**: `createInt8TypedArray()`
- Crée un tableau typé Int8 avec une valeur spécifique

### 6. Structure de données Set
- **Fichier**: `6-set.js`
- **Fonction**: `setFromArray()`
- Convertit un tableau en set

### 7. Plus de structure Set
- **Fichier**: `7-has_array_values.js`
- **Fonction**: `hasValuesFromArray()`
- Vérifie si toutes les valeurs du tableau existent dans un set

### 8. Clean set
- **Fichier**: `8-clean_set.js`
- **Fonction**: `cleanSet()`
- Nettoie et concatène les valeurs d'un set commençant par une chaîne spécifique

### 9. Structure de données Map
- **Fichier**: `9-groceries_list.js`
- **Fonction**: `groceriesList()`
- Crée une map d'épicerie avec des quantités prédéfinies

### 10. Plus de structure Map
- **Fichier**: `10-update_uniq_items.js`
- **Fonction**: `updateUniqueItems()`
- Met à jour les éléments de la map ayant une quantité initiale de 1 à 100

## Auteur

**Guney TASDELEN**
- LinkedIn: [Guney Tasdelen](https://www.linkedin.com/in/guney-tasdelen/)
