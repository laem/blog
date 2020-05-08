---
title: Une implémentation officielle de la loi — partie 2
description: Un premier modèle
date: '2017-08-12T10:17:41.323Z'
categories: []
keywords: []
slug: /@l4em/vers-une-impl%C3%A9mentation-officielle-de-la-loi-9b0b75ca48ed
---

![](https://cdn-images-1.medium.com/max/800/1*qGyZ2cpZMT5i5C99dFxqWA.png)

Nos règles écrites dans notre syntaxe, accompagnées d’un moteur qui les interprète, nous permettent d’envisager à court terme les applications et fonctionnalités suivantes. Insistons sur un point : tous ces outils reposent sur la même banque cohérente de règles et un moteur commun, qui réduisent fortement le code spécifique nécessaire pour construire une nouvelle application.

Quelques illustrations !

IL FAUT ILLUSTRER TOUT ÇA !!

*   Une série entière de simulateurs complets ou ciblés : salaire net\*, coût du travail\*, fiche de paie\*, cotisations retraite\*, réductions\*, aides à l’embauche. CDI\*, CDD\*, contrats aidés… Cotisations des indépendants…
*   Des calculs expliqués sur le Web dans un nouveau type de base documentaire : vous pouvez comprendre l’algorithme et y injecter des exemples. Lors d’une simulation, vos données remplacent ces exemples. Vous pouvez comprendre le calcul des fiches de paie.
*   Les prochaines grandes annonces de réformes politiques pourront êtres explorées avec des simulateurs pédagogiques : par exemple, la suppression annoncée de deux cotisations compensée par la hausse de la CSG. Aller plus loin en accompagnant le passage d’une loi de notre implémentation de ce changement. Permettre aussi l’expérimentation de réformes, outil de travail pour politiques, législateurs et société civile.
*   Une plateforme utilisable par tous, que les entreprises privées pourront utiliser pour proposer de nouveaux usages, pour faciliter encore plus les démarches légales. Notamment, une ontologie ouverte et actuellement utilisée du domaine.

> FINIR L’ARTICLE SUR DES GIFS QUI MONTRENT NOTRE TRAVAIL QUI TOURNE

A caser :

**Langage déclaratif**

\[ajouter que le langage ne doit pas être trop libre, plutôt piocher dans une banque de fonctionnalités implémentées\]

\[parler de l’analogie avec les cartes satellite — vecteur + données riches\]

Qu’est-ce qui le différencie du code qui fait tourner les moteurs de règle classiques ? Déjà c’est du code libre (lisible gratuitement et réutilisable sans limites), mais ce n’est pas suffisant : il est déclaratif. Déclaratif ? kesako ?

_\[code qui opère VS code qui décrit les opérations\]_

Pourquoi est-ce important ?

Un programme, c’est du code écrit par un codeur dans un langage de programmation. Un outil spécial permet de faire tourner ce code. Dans l’exemple ci-dessus, l’outil nous renverra simplement la valeur du calcul.

Sauf que dans notre cas, obtenir le résultat du calcul (70€) c’est une chose, mais pouvoir exploiter la description du calcul, c’est tout aussi utile ! C’est ce qui nous permet de proposer toutes les applications dont on vous parle plus loin.

Or voilà le problème : _c’est très dûr de le faire dans le cas 1)_ du langage de programmation classique, notamment parce qu’il y a mille façons d’écrire les opérations. Dans le cas 2), le langage est spécialisé, et donc contraignant. De plus, c’est nous qui construisons l’outil qui calcule les valeurs, et ben on en change complètement la logique pour qu’il fasse bien plus que ça.

Bien sûr, on pourra dire que ça déplace un problème : le mécanisme de multiplication là-haut, maintenant _déclaré_ au lieu d’être directement _opéré,_ doit forcément être écrit ailleurs ! L’exemple 1) peut avoir des bugs, mais l’exemple 2) peut en effet les avoir cachés dans l’implémentation du mécanisme lui-même. Pas de panique : ce mécanisme est testé ! Quelle que soit son style d’implémentation (bien que nous tâchions de le réécrire souvent pour le rendre toujours plus clair et complet), une batterie de tests nous assure qu’il a le comportement souhaité. Ces tests, d’habitude accessibles aux développeurs seulement, sont publics et lisibles : on les appelera simplement des exemples.

\[Mettre l’exemple foireux des impôts !!\]

#### Quel est le cheminement ?

Une bouillie d’impératif.

On lui ajoute des commentaires : meta, applicabibilité, calcul : multiplication avec plafond.

\[Parler du temps ?\]

puis on en fait des fonctions

puis des fonctions imbriquées

puis on nomme les paramètres

on transforme ça en yaml -> moins de symboles (parenthèses et virgules)

étape finale : c’est sur le Web que notre code devient complètement lisible : code + doc dans une interface intéractive.

Après l’[introduction](https://medium.com/p/657a1d7a8684), on va explorer une proposition de langage, qui est le support de toutes nos applications.

#### Alors, ce langage web 8.0, il consiste en quoi ?

Pour bien savoir qu’il faut payer telle cotisation ou taxe, il faut trouver quelle article de loi la définit (et quel arrếté met à jour le taux, …).

\[code du travail ? code de la sécu ? code des impôts ? VERIFIER et DESSINER\]

Et puis comprendre le calcul :

\[représenter tout ça sous forme de dessin textuel avec flèches :) \]

*   est-ce qu’elle me concerne ? Selon mon effectif, selon que c’est un CDI ou CDD
*   quelles sont les opérations effectuer (barème en taux marginaux, multiplication, multiplication à assiette plafonnée…)
*   ces opérations se font sur des variables (ex. cotisation = \[assiette des cotisations sociales\] \* taux en 2017) dont il faut aller chercher la définition dans un autre article…

En parcourant la loi, force est de constater que les législateurs ne sont ni des informaticiens ni des matématiciens (merde, maintenant si !). Contrairement à ce que l’on peut entendre souvent, les calculs qu’ils inventent pour vous dire combien vous devez verser à Bercy en fin de mois sont d’une complexité algorithmique et d’une variété très limitées : pas de calculs récursifs ou de boucles _while_, pas non plus d’intégrales.

\[Dessiner l’assemblée parlementaire qui propose un amendement en courbe éliptique\].

Au coeur de notre système, nous aurons donc un bon nombre, mais un nombre limité, de ces _briques de calcul_ qui représentent une opération souvent effectuée dans une variable. Par exemple le fameux _barème_ en taux marginaux, qui nous permet de calculer l’impôt sur le revenu.

L’impôt sur le revenu est une _obligation_ pour _l’entité_ individu de notre système.

Les _entités_, ce sont les personnes en jeu (entreprise, individu, état, caisses de la sécurité sociale…), mais aussi d’autres concepts nécessaires (établissement, contrat de salariat…). Elles ont chacune des _attributs_ (l’âge de l’individu, l’effectif de l’établissement…).

Ces attributs, ont les appelle des _variables. En effet,_ elles peuvent être des nombre, des booléens (vrai/faux) ou des choix dans une liste (marié/pacsé/célibataire) à renseigner avant que le programme se lance, mais souvent aussi calculables à partir d’autres variables. On peut entrer l’âge, mais aussi le calculer à partir de la date de naissance et la période renseignée. La cotisation AGIRC citée plus haut sera calculée.

Mais il nous faut aller plus loin pour exprimer la complexité des variables :

*   on a déjà vu la _formule_ : si les entrées nécessaires ont été renseignées, je peux vous calculer la valeur de la formule.
*   quand je n’ai pas de formule, je peux quand même écire un _contrôle._

> Ex. je ne peux calculer le salaire d’un contrat, mais je peux vous dire qu’il doit etre supérieur au SMIC. Plus précisémment, je peux vous dire que si vous descendez en dessous (c’est possible dans certains cas), renseignez-vous bien. Mieux ! Si j’ai dans mon système la notion de temps partiel, je peux calculer le SMIC équivalent au temps partiel.

*   si ma formule a la valeur _vraie_, cela peut avoir des conséquences. _La_ propriété _implication_ me permet de calculer les impacts sur d’autres variables.

> Ex. s’il a été renseigné que mon contrat est un CDD, alors je sais que mon contrat aura une durée déterminée, je sais aussi que la nature de la tâche du contrat est temporaire, et finalement qu’un motif bien précis doit être choisi (tiré d’une liste bein définie). C’est la loi !

#### On arrête quand la conception ?

Ce système sera vu d’ici un moment, ou déjà par certains comme simpliste. Il évoluera.

Mais l’essentiel est là : beaucoup d’applications bien concrètes sont déjà possibles une fois qu’un moteur est construit pour interpréter ce système Indice : le moteur (qui en est déjà à sa 4ème réécriture) et le langage se construisent conjointement.

On peut citer :

*   Simulateur explicable, complet et modulable. Tout est simulable.
*   Une aide à la décision à l’embauche axée sur la l’optimisation du coût pour l’employeur / du salaire de l’employé
*   Un simulateur unique pour la pluriactivité
*   Un tremplain de la simulation à l’embauche
*   Pédagogie autour de la fiche de paie / des cotisations
*   Réformes
*   \- Et si le gouv publiait des diffs exécutables qui accompagnent chaque réforme ? Notamment versement transport, taux, ATMP)
*   \- Pouvoir simuler avant et après (aide PME Hollande, propositions de Macron pour 2018 cotiz CSG)
*   Un fou pourrait proposer un nouvel outil de fiche de paie basique
*   Un outil de travail pour les legislateur. Simulation d’une réforme, étude du corps actuel des cotisations
*   Une ontologie ouverte du domaine

Le sujet des règles des cotisations sociales est très proche de celui des règles de RH, notoire pour les échecs colossaux auxquels ont mené plusieurs des tentatives de les ré-implémenter.

_Ce sont des mondes complexes débordant d’exceptions._

Il faut commencer petit : sur un domaine restreint, sur une sélection d’acteurs. Il faut le construire pour l’utilisateur. Il faut donc le lui présenter rapidement, et le tester exhaustivement. Il faut qu’il soit ouvert, et mieux : que sa construction soit ouverte. Que tout le monde puisse voir les tests et en ajouter. L’objectif ultime (pas de prércipitation !) : que l’écriture des règles elle-même soit participative, accessible sans expérience de codeur.

Vous avez suivi jusqu’ici ? Contactez-nous !

\[A CASER\]

Voir [cet article](https://news.ycombinator.com/item?id=12697324) et cette discussion clivante sur le sujet, ce commentaire en particulier : [https://news.ycombinator.com/item?id=12699572](https://news.ycombinator.com/item?id=12699572)

On n’est pas fou, on va s’attaquer en premier lieu aux parties de la loi qui régissent des paiements. Cela nous permet d’éviter de nous retrouver face à un mur d’ambiguité et la nécessité de formaliser tous les concepts du language commun.

On se propose d’implémenter le calcul de _droits_ et _obligations._ Elles sont essentiellement de deux types : un montant (étant donnée ma situation, je _dois_ payer 80€ de CSG) ou un élément d’une catégorie (étant donnée ma situation, mon régime social est celui de l’Aslace-Moselle).

Ces _droits_ ou _obligations_, nous les appelons des _variables_.

(il nous faut des schémas là !)

Mes variables sont décrites par ces propriétés :

*   un **nom**, et d’autres informations courantes (un acronyme, un site officiel qui explique la variable, une référence législative, la personne concernée)

Prenons l’exemple de la CSG sur les salaires. Son nom est Contribution Sociale Généralisée, son acronyme CSG et elle concerne (elle est une obligation pour) le salarié.

*   une **formule **:  c’est un alorithme qui me dit comment calculer la valeur de la variable en fonction d’autres variables

Par exemple, pour la CSG, c’est la _multiplication_ d’une _assiette particulière_ (qui elle même a une formule !) et d’un taux qui dépend de la variable temps.

*   une **implication** : pour certaines variables booléennes (qui ne peuvent prendre que les valeurs vrai ou faux), nous n’avons pas de formule ! Parfois parce qu’elle est trop complexe. Par contre, nous pouvons dire : si cette variable vaut “vrai”, alors nous pouvons en déduire des contraintes sur d’autres variables.

Par exemple, si un contrat de travail salarié est un CDD, nous pouvons affirmer qu’il a un _motif_ valable, et que sa _durée_ est limitée.

*   un **contrôle** : nous pouvons écrire un algorithme qui va contraindre la valeur que peut prendre la variable.

Exemple : le salaire d’un contrat de travail salarié doit être supérieur au SMIC.

Ce dernier exemple nous permet d’aborder le sujet de la complétude de notre implémentation. Il faut absolument procéder par itérations : notre système sera initialement très simple.

SMIC hôtelier, puis conventions collectives avec échelons. etc.