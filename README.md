# 💖 Barbie Memory Game

## 📌 Description du projet

Barbie Memory Game est un jeu de mémoire interactif développé en HTML, CSS et JavaScript.
Le joueur doit retrouver des paires de cartes en suivant une histoire en deux niveaux :

* 🎀 Niveau 1 : Aider Barbie à retrouver ses vêtements
* 🐱 Niveau 2 : Aider Barbie à retrouver son chat

Le jeu intègre des effets visuels, des animations, ainsi que des effets sonores pour améliorer l’expérience utilisateur.

---

## 🛠 Technologies utilisées

* HTML5 → structure de la page
* CSS3 → design, animations, effets visuels (flex, grid, animation, transform)
* JavaScript → logique du jeu, interactions, gestion des niveaux
* Git & GitHub → gestion du projet et versioning

## Fonctionnalités principales

* 🃏 Jeu de mémoire avec système de paires
* 🎯 Deux niveaux progressifs
* 🔄 Bouton de redémarrage
* 🔊 Effets sonores :

* flip des cartes
* validation des paires
* victoire ("Yaaay")
*  Background dynamique selon le niveau
*  Design moderne (animations, effet glass, hover, transition)
*  Blocage des clics pendant l’animation (anti-bug)

#🌐 Lien vers la démo (GitHub Pages)

[https://brahmiines26-design.github.io/barbie-memory-game/](https://github.com/brahmiines26-design/jeudememoire.git)

Durant ce projet, plusieurs concepts ont été appris et approfondis :

* 🎨 Utilisation avancée de CSS :

  * animations (`@keyframes`)
  * transformations 3D (`rotateY`, `perspective`)
  * effets visuels (blur, gradients)

*  Gestion d’état en JavaScript :

  * logique de comparaison de cartes
  * gestion des événements (`onclick`)
  * contrôle des interactions utilisateur

* 🎮 Création d’un système de niveaux dynamique

* 🔊 Intégration de sons avec la balise `<audio>`

---

## ⚠️ Difficultés rencontrées

Plusieurs problèmes techniques ont été rencontrés :

* ❌ Les cartes ne tournaient pas correctement (problème de flip 3D)
* ❌ Bug lors des clics rapides (double sélection)
* ❌ Les images ne s’affichaient pas correctement
* ❌ Difficulté à organiser le code JavaScript

## ✅ Solutions apportées

Pour résoudre ces problèmes :

* ✔ Correction de la structure HTML avec `card-inner` pour le flip
* ✔ Utilisation de `transform-style: preserve-3d` et `backface-visibility`
* ✔ Ajout d’un système de verrouillage (`lock`) pour éviter les clics multiples
* ✔ Remplacement des images par des emojis pour plus de stabilité
* ✔ Tests progressifs et débogage avec console
* ✔ Recherche sur documentation (MDN, tutoriels)



## 💡 Conclusion

Ce projet a permis de mettre en pratique plusieurs concepts fondamentaux du développement web et d’améliorer la compréhension des interactions utilisateur, du design CSS et de la logique JavaScript.


## 👩‍💻 Auteur

Projet réalisé par : *Brahmi Ines*
Faculté des Sciences de Tunis
Module : Développement Web
