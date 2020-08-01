---
titre: L’État nous doit des explications
résumé: Blablabla
date: 2018-06-21
image: https://cdn-images-1.medium.com/max/2560/1*RbIsqc5VcBlXSWNrGNkN0Q.png
---

Bonne nouvelle ! La France [se convertit](https://fr.m.wikipedia.org/wiki/Données_ouvertes_en_France) à l’_open data_. C’est quoi au fait ? Le principe est simple : les agents de l’État et autres employés du privé qui travaillent pour des missions publiques sont payés par nos impôts, en conséquence les données qu’ils collectent ou font collecter doivent être rendues publiques. 

Plus concrètement, je dois pouvoir trouver en ligne la qualité de l’air dans mon quartier : c’est une _donnée accessible_, mais je dois aussi pouvoir réutiliser tout un jeu de données pour lancer villes-les-moins-polluées.fr : ce sont des _données réutilisables librement_.

### Des données ouvertes aux algorithmes ouverts

L’_open data_ est un vieux combat. Vous aurez remarqué qu’un autre sujet prend de l’ampleur : une fois que l’on dispose de la _donnée_, on veut en faire quelque chose, et souvent on _code un programme_. L’administration tourne de plus en plus aux algorithmes. Ce sujet a récemment fait surface avec Parcoursup, le jeu d’algorithmes controversé qui décide de l’avenir des lycéens après le bac. En entrée, il prend le classement de chaque étudiant. En sortie, il interroge à la suite les lycéens pour afficher un établissement supérieur à chacun.

Heureusement, comme pour l’_open data_, la loi [_oblige_](https://www.legifrance.gouv.fr/affichTexte.do;jsessionid=700061AD285AE7BEF500A4ADD90217AF.tpdila10v_1?cidTexte=JORFTEXT000034194929&dateTexte=&oldAction=rechJO&categorieLien=id&idJO=JORFCONT000034194924)  l’administration à publier ses codes sources, en tout cas les plus importants d’entre eux : ceux qui conduisent à des _décisions individuelles_. Contrairement aux grandes entreprises, l’État est un bien commun et ses algorithmes ne sont pas une propriété intellectuelle à protéger.

#### Ils se cachent où, ces fameux algorithmes ?

On l’a vu, Parcoursup en est un bon exemple. Un autre qui jusqu’à cette année concernait tout le monde, c’est la taxe d’habitation.

![](https://cdn-images-1.medium.com/max/800/1*-cb4qaPgbF0Q1wij6j7YpA.jpeg)

Si vous comprenez l’articulation de ce document, félicitations ! Notamment cette “valeur locative brute” qui s’est [trompée d’époque](https://www.lesechos.fr/08/10/2013/lesechos.fr/0203053213415_impots-locaux---la-valeur-locative-sert-de-base-de-calcul.htm) (en bref, elle considère que les loyers ont autant augmenté dans le centre Finistère qu’à Paris 16…). Pour vous aider, une [explication en ligne](https://shiny.eig-forever.org/TaxeHabitation/) de cette taxe vient d’être construite.

Deux autres algorithmes publics vous parleront encore plus : le calcul des cotisations sociales, et l’impôt sur le revenu. On les voit aujourd’hui comme deux choses séparées, mais ils se sont rapprochés en janvier 2019 : une nouvelle ligne “impôt sur le revenu” apparaîtra en bas de la fiche de paie.

Que se passe-t-il si un salarié curieux veut comprendre ces calculs (il [aurait bien raison de le faire](https://lentreprise.lexpress.fr/rh-management/remuneration-salaire/un-tiers-des-salaries-a-deja-constate-une-erreur-sur-sa-fiche-de-paie_1732106.html)) ? Il lui suffit de scruter le fameux tableau !

![](https://cdn-images-1.medium.com/max/800/1*13xzks1DsTmKlt4zTzipfg.jpeg)

La fiche de paie explique chaque ligne ainsi : une _assiette_ multipliée par un _taux_ de cotisation, par exemple 2 300€ x 3,2%. Puis, avec quelques sommes et soustractions, on en déduit le net et le salaire chargé…

Ah si c’était si simple ! Qu’est-ce donc que ce salaire net imposable plus élevé que mon net ? Vous n’aurez pas la réponse. La CSG (des centaines d’euros tout de même !) n’a pas la même assiette que les autres lignes, mais pourquoi ? Aucun indice. La complémentaire santé, c’est traité comme une cotisation en plus ? Au SMIC, mon employeur a le droit à une grosse “réduction générale” de 400 euros, pourquoi donc ?

Vous vous adressez alors à ce dernier… mais le pauvre, ce n’est pas son métier. Son comptable a des chances d’avoir lui aussi refusé de comprendre ces équations qui changent tout le temps, et d'utiliser un logiciel de paie. On peut douter que ce dernier ait quelqu’un pour vous donner une explication limpide et personnalisée. On le paie pour faire des calculs exacts, pas pour expliquer les règles que la puissance publique lui dicte.

Et cette nouvelle ligne “impôt sur le revenu” en 2019, c’est calculé comment ? Là, c’est Bercy, le ministère des finances qui s’en charge, mais vous n’aurez pas pour autant une explication détaillée du calcul.

#### Google à la rescousse

Une simple recherche sur le Web vous donnera accès à un nombre incroyable de pages de documentation. Que ce soit pour l’impôt ou les cotisations sociales ou tout autre algorithme, elles peuvent certes donner une explication des grandes lignes du calcul, avec même quelques exemples pour des situations simples.

Mais ces pages ne sont pas l’algorithme des impôts : ce sont des paragraphes et tableaux simplifiés qui peuvent comporter des erreurs, des chapitres pas à jour, des conditions ambiguës, des termes techniques définis nulle part, qui _n’ont de toute évidence jamais calculé aucun impôt d’aucun citoyen._ Ça c’est à vous de le faire : sortez votre calculette, lancez la cafetière et priez pour ne pas vous tromper.

Des erreurs dans cette documentation, il y en a. Deux exemples :

![_FAQ du ministère du travail parlant en 2018 d’une aide à l’embauche de 4000€ périmée fin 2016_](https://cdn-images-1.medium.com/max/800/1*y-S8kSbwrjyl-796yQPLLA.jpeg)
_FAQ du ministère du travail parlant en 2018 d’une aide à l’embauche de 4000€ périmée fin 2016_![_Erreur sur la page officielle de Bercy “Comment est calculée la taxe sur les salaires”. Cette taxe rapporte chaque année plus de 10 milliards d’euros._](https://cdn-images-1.medium.com/max/800/1*_UhT0U3lbooI0Fl_65e0dA.jpeg)
_Erreur sur la page officielle de Bercy “Comment est calculée la taxe sur les salaires”. Cette taxe rapporte chaque année plus de 10 milliards d’euros._

Le propos ici n’est pas de critiquer les auteurs de ces erreurs, simplement de mettre en évidence les conséquences d’une séparation complète entre les algorithmes et leur documentation.

Bien sûr, il y a aussi la loi, directement accessible [en ligne](http://www.legifrance.gouv.fr) . Elle n’a aucun des défauts précédents… sauf qu’elle est _trop technique pour un citoyen,_ et surtout elle n’est pas intéractive : on ne peut pas saisir son salaire et attendre qu’elle nous ponde l’impôt, et ni même filtrer tous les paragraphes qui parlent d’un cas (salarié cadre) alors que nous sommes dans l’autre (salarié non cadre). D’ailleurs, voilà un mauvais exemple : le statut cadre n’est pas dans le code du travail… mais un peu à part, dans la convention collective nationale des cadres de 1972. Comment ça, vous l’ignoriez ? 🤯

#### Le code source

Revenons à l’impôt. Si vous voyez ce prélèvement de l’État sur votre compte bancaire, _c’est qu’il est bien calculé quelque part_, et donc qu’un algorithme le calcule et envoie un ordre de virement à votre banque. À l’opposé de ce vaste monde documentaire, il y a donc l’équivalent en code informatique, qui inclut tous les détails du calcul.

Il est donc très important d’avoir accès au _code source_. Après l’_open data_, la transition vers les algorithmes ouverts serait lancée et le problème serait-il donc en voie d’être réglé ?

Pas si simple ! Moins de 1% des français sont développeurs. En outre, alors qu’un petit effort suffira à ces derniers pour transformer un jeu de données en une application utile (par exemple, prendre les coordonnées GPS de chaque arbre de Paris et en faire [une carte](https://opendata.paris.fr/explore/dataset/les-arbres/map/?location=13,48.8596,2.36033)), comprendre le _code source_ moyen qu’une administration aurait publié leur demandera d’immenses efforts.

#### **A quoi ressemble ce code ?**

Voici un extrait du code source officiel des impôts, ouvert au monde en 2016 grâce à [Étalab](http://www.etalab.gouv.fr/), la mission de l’État qui presse les administrations à ouvrir leurs données. N’essayez pas de le comprendre…

![](https://cdn-images-1.medium.com/max/800/1*z05sLL75Kyoc7ytVguHKcw.jpeg)

Et [là bas](https://framagit.org/parcoursup/algorithmes-de-parcoursup/blob/master/java/parcoursup/ordreappel/algo/GroupeClassement.java) un extrait du code de parcoursSup…

Figurez-vous qu’il est tout à fait possible de faire plus compliqué :

![](https://cdn-images-1.medium.com/max/800/1*4Z0hHr7yQXtObJ7coD93fw.gif)

Ce dernier code imbuvable et en apparence sophistiqué sert à … diviser un nombre par 61 ! C’est l’horrible “assembleur”, le niveau juste au-dessus du code binaire, un enchaînement de 0 et de 1 que seul votre ordinateur peut comprendre.

> On a donc d’un côté une littérature florissante qui décrit les grandes lignes des algorithmes, et de l’autre le code imbuvable, qui lui fera les virements monétaires ou décisions importantes dans la vie d’un citoyen.

En bref, voilà où nous en sommes aujourd’hui :

![La plupart des algorithmes publics sont des boîtes noires](https://cdn-images-1.medium.com/max/800/1*GQVFEdpK-TG4ZtbRntuEXg.png)
*La plupart des algorithmes publics sont des boîtes noires*

Voilà où nous risquons d’aller :

![Seuls les horlogers peuvent comprendre le fonctionnement de cette machine. Et encore !](https://cdn-images-1.medium.com/max/800/1*-NTQAZz5feN7ia3e4XFa8Q.jpeg)
*Seuls les horlogers peuvent comprendre le fonctionnement de cette machine. Et encore !*

### Comment expliquer les algorithmes ?

Combiner la documentation et l’implémentation, c’est possible ! On peut tout à fait joindre ces deux bouts : publier sur le Web un code informatique compréhensible, qui serait aussi bien la source des calculs que la documentation.

Illustrons-le ! Vous savez tous qu’au cœur de la mécanique de l’impôt sur le revenu, on trouve ce qu’on appelle un barème progressif : plus on gagne, plus on paie, jusqu’à 150 000 €.

Voyons comment écrire une version simple d’un calculateur d’impôt. On va l’écrire en JavaScript (c’est le langage de programmation le plus utilisé aujourd’hui), là dans cet article.

Si vous ne comprenez pas le premier bout de code que vous allez voir, ce n’est pas grave, car on a là un exemple de ce qu’il ne faut pas faire. Nous allons l’améliorer ensemble jusqu’à ce qu’il soit lisible.

Mais comprenez-bien qu’il tourne là, sous vos yeux. Ce n’est pas qu’un bout de texte qui ne ferait que décrire un calcul : cliquez sur le bouton vert `Run` et il va prendre les 2 300 € en entrée pour sortir les 1650€ d’impôt.

<iframe style="padding: 0; margin: 0; background: transparent;width: 90%; height: 450px" src="https://runkit.com/e/oembed-iframe?target=/users/com/repositories/1/default" scrolling="no" frameborder="0" allowfullscreen></iframe>

Vous pouvez même changer le code et le refaire tourner, par exemple avec 3 000€ en entrée.

Ce code sera considéré par tous les programmeurs comme de mauvaise qualité, fait à la va-vite : à aucun endroit on ne peut voir mention de cette pierre angulaire de l’impôt, le _barème_. En fait, aucun bloc n’a de nom, il sera difficile à lire. Deuxième essai :

<iframe style="padding: 0; margin: 0; background: transparent;width: 90%; height: 750px" src="https://runkit.com/e/oembed-iframe?target=/users/com/repositories/2/default" scrolling="no" frameborder="0" allowfullscreen></iframe>

Voilà qui est mieux : on a créé une fonction `barème`, et une autre fonction `abattement`. Eh oui, on a même nommé ces fonctions en français, après tout c’est la langue qu’on parle le mieux ici.

N’empêche, il reste toujours des expressions pas très familières : `function`, `return`, `Math.max` et `Math.min`, les accolades `{` et `}`.

Comment écrire ce barème plus simplement ? Facile : on va séparer la fonction qui fait l’opération (le barème) des données utilisées dans l’opération (les tranches de l’impôt et les % correspondants). Après tout, ça fait 300 ans qu’un barème se calcule de la même façon, seules ses données changent !

<iframe style="padding: 0; margin: 0; background: transparent;width: 90%; height: 1750px" src="https://runkit.com/e/oembed-iframe?target=/users/com/repositories/3/default" scrolling="no" frameborder="0" allowfullscreen></iframe>

On vient de poser les premières briques d’un langage de programmation spécialisé dans le calcul de l’impôt sur le revenu !

> 💡Libérez le législateur qui sommeille en vous : jouez sur le montant de l’impôt calculé en changeant le taux des tranches puis en cliquant à nouveau sur le bouton  `Run`.

On a ici le meilleur des deux mondes : comme une documentation, notre code est une _description_ du calcul qui n’est pas noyée dans des accolades et autres détails techniques. Comme un code traditionnel, il contient des _instructions_ que votre ordinateur comprend et qui feront les calculs pour nous.

D’accord, mais ça reste du texte brut, pas très avenant. Et où est passé ce code de calcul du barème ? Est-ce qu’on ne l’aurait pas un peu caché ? Certes. Ce code à base de _min_ et _max_ était de toute façon loin d’être limpide. Beaucoup d’algorithmes ont un code compliqué, mais leur fonctionnement peut être facilement expliqué, par du texte, par une visualisation, et en complétant celà par [des exemples](https://github.com/betagouv/mon-entreprise/blob/master/publicodes/test/mécanismes/barème.yaml) de calcul.

![En cliquant sur un exemple, la situation est injectée dans l’explication du barème : la valeur de chaque tranche de l’impôt est affichée, ainsi que le taux final.](https://cdn-images-1.medium.com/max/800/1*qlyufA6vBr0kTKqXLcY0kw.gif)
En cliquant sur un exemple, la situation est injectée dans l’explication du barème : la valeur de chaque tranche de l’impôt est affichée, ainsi que le taux final.

L’essentiel est que le citoyen comprenne ces briques algorithmiques sur le Web. Le code, l’explication et la visualisation de ces briques restent accessibles et modifiables par le développeur curieux.

Tout ceci est déjà en ligne sur [mon-entreprise.fr](https://mon-entreprise.fr) : saisissez un salaire puis explorez les calculs ! C’est la première fois que l’État les explique en ligne, avec vos données, et plus de 300 000 personnes en font usage chaque mois (par exemple, passer du net mensuel voulu au brut annuel à négocier). On attend vos retours !

![](https://cdn-images-1.medium.com/max/800/0*QHvqpPxmkgZI2wTE.png)

Le nouveau langage qui se cache derrière tout ça s’appelle désormais [publicodes](https://publi.codes).

#### Pourquoi tout n’est pas développé comme ça ?

Cette nouvelle façon d’écrire des algorithmes est clairement plus coûteuse à court terme. Mais à long terme, nous pensons que l’administration et ses développeurs en bénéficieront autant que les citoyens, car ils s’y retrouveront eux mêmes, ce qui n’est assurément pas le cas aujourd’hui.

C’est même peut être un _début_ de solution à un problème à plusieurs milliards d’euros : l’État tente régulièrement de moderniser la paie de ses agents et y laisse ce genre de sommes sans améliorer grand chose (exemple avec [l’éducation nationale](https://www.acteurspublics.com/2018/07/20/projet-sirhen-l-education-nationale-arrete-les-frais) qui vient d’abandonner son logiciel tout neuf).

Évidemment l’origine du problème est l’explosion de complexité due aux exceptions accumulées au fil des années. Mais un langage intermédiaire _que tout le monde peut comprendre_ est sûrement une base intéressante pour la construction d’un tel édifice.

\[Mis à jour le 18 juin 2019 avec les nouveaux liens et des corrections mineures\]

\[Mis à jour le 11 octobre : typo, plus gros trafic sur mon-entreprise.fr et nouveaux liens\]
