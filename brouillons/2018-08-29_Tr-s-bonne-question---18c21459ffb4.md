---
title: Très bonne question !
description: >-
  OpenFisca a un périmètre très large : impôts, cotisations sociales,
  prestations sociales (ça fait tourner mes-aides.gouv.fr).
date: '2018-08-29T12:21:51.862Z'
categories: []
keywords: []
slug: /@l4em/tr%C3%A8s-bonne-question-18c21459ffb4
---

Très bonne question !

OpenFisca a un périmètre très large : impôts, cotisations sociales, prestations sociales (ça fait tourner mes-aides.gouv.fr).

C’est aussi un outil assez lourd qui nécessite de coder les formules de calcul en python et surtout en vectoriel via Numpy. On travaille alors avec des vecteurs d’individus d’une simulation, ou de familles. C’est sensé être bien plus performant que du python ou JS pur sur des millions d’individus, mais en pratique ça impose une syntaxe bien plus compliquée.

Pour embauche.beta.gouv.fr, la performance ne nous intéresse pas (bien qu’un calcul se fasse aujourd’hui en quelques millisecondes), alors que la lisibilité de la modelisation de la loi nous est primordiale. Sur syso on est partis de rien dans l’idée d’avoir une syntaxe intermédiaire entre la loi et le code pur. En conséquence, pour bien le faire, nous ne traitons que du domaine des cotisations sociales.

Au sujet des fiches de paie, le modèle n’est aujourd’hui pas assez complet pour réaliser une vraie fiche : notre priorité aujourd’hui est de développer un simulateur simple, et de fournir une explication des calculs. Pour sortir un bulletin, il manquera par exemple la gestion des congés, les conventions collectives. Mais tout acteur est libre de reprendre le travail et d’aller dans cette direction ;-)