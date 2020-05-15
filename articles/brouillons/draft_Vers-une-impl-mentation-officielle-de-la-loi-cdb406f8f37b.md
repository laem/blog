---
title: Vers une implémentation officielle de la loi
description: 'Partie 1 : introduction'
date: ''
categories: []
keywords: []
slug: ''
---

![](https://cdn-images-1.medium.com/max/2560/1*xOKbBlYZ4wg0OhIhyUgnfQ.jpeg)

L’État doit accompagner la loi d’un code qui peut être lu à la foi par le citoyen et par nos ordinateurs, donc _lisible et exécutable_. C’est une énorme promesse de transparence et d’efficacité… au prix d’un défi technique. Il est tout à fait possible aujourd’hui de commencer sur de petites parties de la loi. Un sujet s’y prête bien : les taxes et prélèvements qui font tourner l’État lui-même et notre sécurité sociale. D’autant plus qu’il dicte des transactions financières qui représentent chaque année _un millier de milliards d’€_.

Après cette introduction, un deuxième article plus technique expliquera une une proposition de langage (expérimentale mais qui tourne déjà), qui pourrait être le socle de toute une gamme d’applications nouvelles.

Il n’est pas question ici de changer la loi, mais simplement de moderniser son support, ce qui suffirait à avoir des conséquences majeures ! Aussi, ce type d’initiative ne peut concerner qu’un petit pourcent de l’ensemble des textes de loi, le reste étant aujourd’hui trop complexe à traduire. Mais c’est aussi de bien d’autres jeux de règles non législatives qu’il est question.

Les opinions exprimées dans cet article sont celles de son auteur, et pas de son employeur. N’hésitez pas à signaler les malheureuses simplifications ou erreurs.

### Le citoyen et la loi

Vous avez peut-être eu la chance de visiter le Louvre à Paris et de tomber sur une mystérieuse stèle noire plus grande que vous : le Code d’Hammurabi. Gravé il y a près de 4000 ans, il comporte des paragraphes d’un style qui nous est familier : des lois qui régissaient la vie quotidienne des citoyens de l’époque.

![[Voir la page Wikipedia](https://fr.wikipedia.org/wiki/Code_de_Hammurabi)](https://cdn-images-1.medium.com/max/800/1*YX0Ju8EpIO0fa_LkvDhsMg.png)
[Voir la page Wikipedia](https://fr.wikipedia.org/wiki/Code_de_Hammurabi)

On pourra se réjouir du chemin parcouru depuis en termes d’égalité et de tolérance… Mais mettons ce jugement de côté un moment. Pour nous, citoyens d’aujourd’hui, ça ne semble pas si compliqué à comprendre : les règles sont limpides et il n’y en a finalement que 82. Sauf qu’à l’époque, [peu de gens pouvaient les lire](https://fr.wikipedia.org/wiki/Cun%C3%A9iforme#Qui_.C3.A9crivait_et_lisait_le_cun.C3.A9iforme_.3F)…

![Ceci est un brouillon qui devrait je l’espère donner lieu à un beau dessin](https://cdn-images-1.medium.com/max/800/1*aJHEPirn9jBid7X4ebKeEg.jpeg)
Ceci est un brouillon qui devrait je l’espère donner lieu à un beau dessin

En réalité, ce code quadrimillénaire et les textes législatifs qui nous permettent aujourd’hui de vivre en société partagent le même défaut : _ils sont inaccessibles au citoyen lambda_. On a appris à lire, mais notre capacité d’entendement d’un ensemble de règles si complexe a été dépassée… voir explosée.

En effet, bien que consultable partout grâce à [legifrance.gouv.fr](http://legifrance.gouv.fr/), la loi est complexe, vaste et écrite dans un langage de spécialiste, au point qu’on ne peut s’informer _sans intermédiaire_ sur ses droits et devoirs simplement en la lisant. En septembre 2017, le gouvernement l’a constaté publiquement sur le sujet du droit du travail : un “droit du travail numérique” viendra clarifier ce que les gens ne peuvent plus directement comprendre…

#### La grande bibliothèque

Dans notre vie quotidienne, nous nous sentons souvent tout petits devant la loi qui s’apparente à une ancienne et vaste bibliothèque remplie de livres dont les chapitres se citent tous entre eux pour définir des _règles :_ nos droits et obligations. Dans ces ouvrages, malgré tous les efforts linguistiques, beaucoup de termes ne sont pas définis rigoureusement, ou alors leur référence est difficile à résoudre.

\[ici l’autre partie du DESSIN précédent : le type devant le mur de livres\]

En tant que citoyen, ce n’est bien souvent pas un petit créneau de 15 minutes de consultation qu’il me faudra, mais plutôt une réservation à la journée, ou mieux : un abonnement pour des visites guidées. Bien sûr, les prestations de ces intermédiaires seront payantes (n’oublions pas que la publicité est une alternative à notre carte bleue).

Des acteurs publics proposent heureusement des fiches gratuites formant des bases documentaires (ex. [service-public.fr](http://service-public.fr) qui répond a des milliers de questions pratiques ou [urssaf.fr](http://urssaf.fr) spécialisé dans notre sujet des cotisations sociales). Prions d’ailleurs pour que le code du travail numérique ne soit pas simplement un nouveau site venant concurrencer ces derniers.

Parfois, ces fiches sont incomplètes, ou trop simplifiées (des cas particuliers peuvent avoir été omis). Mais surtout, vous ne trouverez rarement autre chose que _des paragraphes de texte_ à l’écran. Le risque apparaît alors à l’étape de raisonnement. Vous devez vous-même appliquer ce texte à votre cas : autrement dit, vous devez faire un calcul. Des calculs logiques très souvent (« ceci me concerne si je répond à ce critère et à celui là… mais pas à celui-ci»), et parfois aussi numériques (ex. calcul d’une cotisation).

Ainsi, le texte de ces fiches, ou de leur source les lois, sont souvent utilisés comme un petit bout de code, mais il est malheureusement pire qu’un programme qui n’aura pas été testé par les programmeurs et qui pourrait avoir un petit _bug_ quand il tournera : ici, on ne sait même pas si le programme va pouvoir se lancer ! Et la base en tant qu’ensemble peut-être encore moins.

#### Illustration

Illustrons le sujet avec une règle au hasard parmi les lignes de la fiche de paie : la CRDS, acronyme de Contribution pour le remboursement de la dette sociale, dont l’histoire tumultueuse est racontée sur la [page Wikipedia](https://fr.wikipedia.org/wiki/Contribution_pour_le_remboursement_de_la_dette_sociale). Plaçons-nous dans le contexte de la fiche de paie, donc limitons nous aux revenus des salariés même si la CRDS est bien plus large que ça.

On trouve facilement des centaines de ces fameuses fiches qui nous permettent d’ébaucher un calcul. La nécessité d’une mise à disposition par l’État d’une implémentation de référence de cette CRDS semble _a priori_ un peu tirée par les cheveux : on comprend vite que la formule est très simple et facile à implémenter.

![LE MONDE DES LICORNES](https://cdn-images-1.medium.com/max/800/1*KI2r4VT_ufOy7EuNV4gtbw.png)
LE MONDE DES LICORNES

A priori seulement…

La fiche de [service-public.fr](https://www.service-public.fr/particuliers/vosdroits/F2971), qui redonne cette formule à la ligne “Revenus d’activité salarié” du premier tableau, indique déjà que c’est plus compliqué que ça.

*   l’**assiette** inclut le salaire brut, mais aussi les primes et “indemnités diverses”. Mais lesquelles précisément ? Il faut y ajouter les “avantages en nature ou en espèces” mais avec une exception : “si la rémunération est exclusivement constituée d’avantages en nature, elle est exonérée de de CRDS” (le reste concerne les travailleurs non salariés). L’énumération finit par trois petits points : doit-on comprendre que d’autres revenus peuvent être concernés ?
*   notre formule a oublié l’**abattement de 1,75% **: seul 98,25% de l’assiette sera à prendre en compte…

![un abattement conditionnel](https://cdn-images-1.medium.com/max/600/1*U5reYyoAViUcWfgCtCpCLA.png)
un abattement conditionnel

Et ce seulement en dessous d’un certain montant comme le montre cette copie d’écran ! Cet usage de “au delà” n’est-il pas ambigu ? Doit-on comprendre que pour un salaire de 200 000 € c’est seulement le reste de 43 088 € qui ne sera pas abattu ?

*   Mais encore : pour des “compléments du salaire”, qui ne sont pas définis dans la fiche, **pas d’abattement**. En pratique, c’est le cas de la contribution employeur pour la complémentaire santé, qui est maintenant obligatoire et donc concerne tous les salariés. Il est très courant que ce point soit oublié et que la “mutuelle” soit abattue par mégarde.
*   Pour d’autres cas **exceptionnels** bien listés dans la fiche, par exemple les salaires des apprentis, c’est toute la somme qui est exonérée. Il en est de même par exemple pour le paiement par le patron des tickets restaurants.

Ainsi, le diable est dans le détail : la règle qui semblait être une simple multiplication à été compliquée d’un paquet de conditions.

Pour être rigoureux dans notre calcul sur ce sujet sérieux, et pour avoir la réponse à beaucoup d’autres questions que nous n’avons pas abordées (ex. quand dois-je verser cet impôt, et si le salarié est à temps partiel ? ), mieux vaut suivre les liens vers les “textes de référence” . C’est parti pour pour 7 articles à lire sur 4 sites différents, qui équivalent au contenu de… _32 pages A4_. Et n’oublions pas de lire [la fiche de l’URSSAF](https://www.urssaf.fr/portail/home/employeur/calculer-les-cotisations/les-taux-de-cotisations/la-csg-crds.html).

**Attention** ! Cet article ne dit pas du tout que ces bases de documentation sont de mauvaise qualité ! _Au contraire_, il est bien probable que nous soyons parmi les mieux servis en France, notamment au vu de la complexité de notre modèle social.

Mais nous devons aujourd’hui aller plus loin, et on peut y arriver en publiant des explications exécutables. Un nouveau service qui viendrait compléter ce monde du texte en français.

Notons que si nous prenions d’autres exemples, nous tomberions bien sûr sur des phrases qui nous poseraient un autre type de problème : le jugement. En plus de la difficulté technique pour simplement _s’y_ _retrouver_ ou _calculer_, surviendront des termes pour le moins ambigus tels que “raisonnable”, qui demandent une appréciation humaine. Ceci est hors de propos ici.

### Coder les règles de la loi

Revenons donc à notre exemple : rien ne semble nous empêcher d’écrire du code qui calculerait cette cotisation, dans sa version naïve comme dans sa forme jonchée d’exceptions. C’est ce que font les milliers de programmes de gestion qui silencieusement envahissent nos vies, par exemple le petit robot de votre complémentaire santé qui vous verse 30% des 25€ de votre consultation chez le généraliste ([il y a une fiche pour cette règle](https://www.service-public.fr/particuliers/vosdroits/F1069) !).

#### La loi exécutable

Ce code, disons par exemple  du code source dans le langage de programmation très courant nommé _python_, est conçu pour être lu par un ordinateur, qui va le faire “tourner” comme on dit pour répondre à un problème précis : par exemple pour calculer cette fameuse CRDS, en nous donnant le montant à retenir chaque mois sur la feuille de paie. Une initiative maintenue notamment par l’État, le [projet OpenFisca](http://openfisca.org), rassemble du code libre (gratuit et réutilisable) qui permet de simuler certains de ces sujets. Concrètement, notre CRDS dans OpenFisca c’est [30 lignes de code python](http://legislation.openfisca.fr/crds_salaire) lues par un ordinateur _pour faire le calcul_. C’est déjà bien !

#### Au-delà du calcul numérique

Nous proposons ici d’écrire un code qui ressemblerait davantage à de la donnée : en la lisant, on doit pouvoir faire le calcul, mais aussi comprendre facilement les instructions du calcul lui-même (ce qui est très difficile avec le code _python_ évoqué plus haut), pour notamment reconstituer une base documentaire agréable à lire et construire des applications de simulation et de gestion à un coût moins important. Ce qui est important, c’est que toutes les applications qui seront construites _partagent des règles encodées une seule fois._

Pour arriver à ces règles aux usages multiples, on va rendre leur code plus _déclaratif_ qu’_impératif _: ça veut dire qu’au lieu de vraiment réaliser le calcul (“ma règle retourne a\*t”), je vais plutôt faire une meilleure description de son objectif (“ma règle est une cotisation dont la formule est une multiplication d’une assiette _a_ par un taux _t”_) qui, lue par le moteur, pourra donner un calcul mais aussi bien d’autres usages. Bon, c’est subtil, on ne rentrera pas dans le détail ici mais ce sera illustré dans la partie 2. Après avoir fait naître en vous d’irrésistibles élans de connaissance, revenons à des points bien plus terre à terre.

#### Réduire les libertés du programmeur

Notons bien que le langage de cette base n’en est pas un dans le sens où tout n’y est pas exprimable. L’erreur serait de voir le support de l’implémentation de la loi comme une feuille blanche et un crayon (= un langage complet comme _python_). Ce ne peut être un espace d’épanouissement pour le développeur qui y code les règles. En effet, ces langages complets permettent de tout faire, mais de mille façons différentes, et il devient alors impossible pour un ordinateur de l’interpréter afin d’en faire autre chose qu’un calcul. La plateforme doit encoder et exposer les lois, pas être un kit de complexification de la loi à destination des législateurs.

À la place, celui qui y encodera ces règles aura un manuel et une valise d’outils adaptés pour le domaine à implémenter. Si une règle y est impossible à écrire, ou si l’implémentation possible est inacceptable (comprendre : trop dure à relire), un outil supplémentaire est nécessaire et sera fourni par les développeurs — et c’est en fait l’implémentation de ces outils, que l’on appelle _mécanismes,_ qui est écrite dans un langage complet. La CRDS utilise un mécanisme très simple, la _multiplication_ assiette \* taux, mais pourrait un jour évoluer pour utiliser un _barème en taux marginaux :_ il faut alors espérer que nous n’aurons pas à déchiffrer son implémentation en python  pour comprendre que ça se calcule comme l’impôt sur le revenu.

#### La loi lisible

Comme il traite un sujet important, ce code doit être _ouvert_ mais surtout _lisible_ par tous. Insistons sur ce point : un code classique, même public, ne suffira pas car il ne sera pas lisible par les lecteurs qui ne seront presque jamais familiers avec le langage de programmation utilisé. Malheureusement, ceci concerne la majorité des services actuels qui impactent notre vie quotidienne, du système informatique de vos remboursements de santé (mutuelle et sécurité sociale) au RSA en passant par le code qui calcule votre taxe d’habitation. Ce sujet des _algorithmes ouverts_ a fait récemment la une grâce aux demandes citoyennes d’ouverture du code des impôts de Bercy et de celui qui attribue des places dans les universités (APB) développé par le ministère de l’éducation. Et ça va très loin : on peut lire [ici](https://www.wired.com/story/when-government-rules-by-software-citizens-are-left-in-the-dark) à propos d’algorithmes de prédiction utilisés par la police aux États-Unis pour libérer des détenus.

Les demandes d’ouverture, quand par chance elles aboutissent, n’obtiennent jamais un code lisible, seulement ouvert. Les règles sont donc cadenassées, mais on réserve le même sort aux incontournables _tests_, qu’il faut voir comme des exemples, utiles autant pour comprendre le code que pour prouver son bon fonctionnement.

À l’heure où nous ne pouvons plus vraiment expliquer comment certains logiciels reconnaissent si bien les visages (on pense notamment à Facebook et Google qui en font un grand usage, mais les plus inquiétants sont sûrement ceux branchés sur les caméras de sécurité dans les lieux publics), faisons l’effort de bien expliquer ce qui est toujours facilement explicable, et c’est le cas des règles de notre législation. D’autant plus que c’est elles qui viendront articuler les entrées et sorties de ces boîtes noires, points de contact avec le monde réel.

> Construisons un base ouverte de règles lisibles et exécutables , socle d’une myriade d’applications différentes permettant d’expliquer et de faire tourner la loi.

Évidemment, il n’est pas question de remplacer les textes actuels, mais de les annoter progressivement au rythme de notre capacité du moment à les rendre exécutables.

#### Encart — Le droit du logement

Ces principes mériteraient d’être appliqués à bien d’autres sujets que celui des taxes et prélèvements : penchons nous rapidement sur un autre domaine qui nous concerne tous, lui aussi, et qui mériterait d’être rendu (en partie) exécutable : le droit du logement.

Par exemple aujourd’hui, quand on loue un appartement à l’année, on donne au propriétaire un dépôt de garantie. Cela entraîne un tas de questions :

*   quel est son montant ? Récemment, il a été [limité](https://www.service-public.fr/particuliers/vosdroits/F31269) à un maximum d’un mois de loyer (sans les charges, elles aussi à calculer).
*   d’ailleurs, ce loyer ne peut augmenter librement entre chaque location. Dans certaines villes, comme Paris et Lille, il est même en plus encadré.
*   qu’en fait le propriétaire ? En pratique, il l’encaisse, (car ça pourrait être un chèque en blanc). Le locataire est donc contraint à lui accorder un prêt à taux 0… mais c’est un autre sujet.
*   que se passe-t-il en fin de location ? Le propriétaire a 2 mois pour réaliser les devis des dégradations constatées lors de l’état des lieux. Il les déduit du dépôt de garantie, qu’il rend au locataire. En intégralité ? Non ! Il peut aussi retenir 20% du dépôt jusqu’au prochain conseil de copropriété au cas où les charges auraient augmentées. La somme sera donc rendue dans son intégralité jusqu’à 1 an après le départ du locataire.
*   si le propriétaire tarde, le locataire peut demander des intérêts !
*   …

Ainsi une question aussi courante et _a priori_ simple, active en réalité un jeu de règles à respecter par les deux parties qui demande une fine connaissance du droit.

On est alors tentés d’imaginer une plateforme en ligne, garantie par l’État, qui permettrait d’encadrer ce sujet en informant les deux parties, voir en se comportant comme un intermédiaire qui _exécute_ ces règles. Simulation en ligne du montant du dépôt de garantie, déduit du loyer maximum lui aussi simulé et attesté par l’état (aujourd’hui une grande partie du parc locatif [ne respecte pas](https://www.lavieimmo.com/avis-experts/encadrement-des-loyers-ou-en-est-on-8-mois-apres-36096.html) la loi, et c’est au locataire de prendre le temps de le contester en commission de conciliation); dépôt de la somme directement sur les comptes de l’État (somme alors rendue “neutre”, par exemple pour servir un projet d’investissement public), qui jouera le rôle de conciliateur en cas de problème. Remplissage et enregistrement en ligne d’un état des lieux type, notifications tenant le locataire au courant des devis téléchargés par le propriétaire, rappel et pénalisation automatique du propriétaire en cas de retard de restitution, …

Tout ça ne vous rappelle rien ? Ce rôle est déjà tenu par un acteur (sur le marché cousin de la location saisonnière), garant du respect de _ses propres règles_ : Airbnb. La plateforme de location entre particuliers assure déjà certains des services évoqués plus haut : le calcul en ligne du loyer, des charges, la [gestion de la caution](https://www.airbnb.fr/help/article/140/how-does-airbnb-handle-security-deposits), et la conciliation des litiges.

Peut-être allons nous nous réveiller en 2030, dans une France où l’essentiel du parc immobilier est géré par Airbnb. Aucun risque, pensez-vous, Airbnb prend une commission trop importante. Vraiment ? Faisons un calcul simpliste pour un studio à Paris : pour 1 an de location à 900€/mois, c’est 10 800 € de loyer, 850€ de dépôt de garantie, 450€ de frais d’agence soit 12% de commission du “système classique”, dont 8% restitués en fin de période. Chez Airbnb, ça peut descendre jusqu’à 6% avec une expérience utilisateur bien plus attirante.

Pourquoi ne pas en construire un équivalent public qui se chargerait simplement de faire respecter une partie du droit du logement (nous ne parlons pas ici de lister les annonces) ? Une application bien concrète sur le Web et mobile, qui utiliserait une base de règles publiques, lisibles et exécutables.

À ce stade et après cette digression, une réaction tout à fait normale serait : « c’est une bonne idée… mais la loi est bien trop compliquée. Vous allez vous casser la gueule dès le début de votre encodage du monstre législatif ! ». Et en effet, on pourrait multiplier encore les sujets: un troisième exemple serait les règles de protection de l’environnement dont l’application est surveillée par les [DREAL](https://fr.wikipedia.org/wiki/Direction_r%C3%A9gionale_de_l%27environnement,_de_l%27am%C3%A9nagement_et_du_logement) de chaque région. Et puis d’autres sujets de notre vie de tous les jours seraient à envisager : les toujours obscures règles d’avancement et de salaire au boulot; règles des seuils de pollution menant à une information, une alerte ou des actions et lesquelles (circulation alternée, gratuité des transports…). Vous avez sûrement vous-même identifié votre bête noire qui vous fait perdre du temps.

### Commençons petit

Effectivement, on n’a pas le niveau pour traiter tous ces sujets en même temps comme un ensemble cohérent : il n’existe pas aujourd’hui de théorie ni de projet concret allant vers un droit entièrement exécutable. Alors on va se lancer en grimpant une petite colline. En plus de produire des applications utiles, elle devrait nous donner une meilleure vue du massif.

On défini donc ce domaine largement restreint : les obligations et droits financiers qui lient l’entreprise ou le citoyen à l’État ou à la sécurité sociale. À première vue, il est en effet peuplé principalement de règles qui sont des compositions de simples calculs _« arithmétiques »,_ comme nous l’avons illustré plus haut. Ça ne l’empêche pas d’être technique, bourré d’exceptions et dispersé. Mais notre chance c’est que contrairement au reste, il n’est presque pas affecté par cette difficulté aujourd’hui irréductible d’implémentation des mots qui appellent un jugement humain.

Et puis dans ce domaine, on va encore se limiter à une partie relativement homogène. Mal comprise, elle pèse pourtant [500 milliards d’€](https://fr.wikipedia.org/wiki/Cotisations_sociales_en_France#Montants), horrifie tous les patrons et plombe notre chèque de fin de mois…

#### Les cotisations sociales

En contrepartie, elles font tourner la sécurité sociale du pays, c’est à dire nos hôpitaux, retraites, chômage et aides sociales.

Concrètement, vous êtes un patron qui veut simplement embaucher quelqu’un (ou vous-même dans certains cas) en lui versant un salaire, et donc en retranchant les cotisations sociales obligatoires. Facile ! se dira-t-il naïvement, j’ai déjà plié en 15 minutes ma déclaration d’impôts sur [impots.gouv.fr,](http://impots.gouv.fr/) il doit exister un équivalent pour la paie !

Eh bien non ! Pas de service unique officiel de calcul des cotisations sociales (alors que son pendant pour le versement, la DSN, est en train d’être mis en place). Vous constatez rapidement qu’il vous faudra prévoir une nouvelle “cotisation de calcul des cotisation”, qui se paie en € ou en temps. Il est fortement recommandé pour la réussite de votre entreprise de prendre la première option.

![Faites le bon choix](https://cdn-images-1.medium.com/max/1200/1*e49pEfLDXteQ76oBeKXbFg.png)
Faites le bon choix

Ce système marche à peu près. Il fait tourner les fiches de paie des millions d’actifs français. Mais en produisant [de très nombreuses erreurs](http://www.europe1.fr/economie/fiche-de-paie-un-salarie-sur-trois-a-deja-constate-une-erreur-2540745) et des tas de saisies inutiles. Et surtout, il est grandement inefficace, soit en d’autres termes, coûteux. Pardonnez cette estimation simpliste mais parlante : 20€ par fiche de paie/mois/actif, c’est 6 milliards d’€ par an. \[Vérifier\]

Le sujet est-il complexe à ce point ?

Pas du tout ! Mais les _règles_ définissant les cotisations sociales sont analysées, implémentées (ou vulgarisées) puis surveillées (les taux voir les calculs changent régulièrement) par un nombre impressionnant d’acteurs complètement isolés : des centaines de logiciels de paie, mais aussi les comptables, services RH, petites entreprises, organismes de sécurité sociale, outils de simulation, ouvrages et bases documentaires, revues… C’est au final très coûteux pour la collectivité, mais paradoxalement complètement oublié dans la grande lutte politique du moment pour restaurer la compétitivité des entreprises.

Faîtes cette simple recherche Web au sujet d’une cotisation, par exemple [une cotisation de retraite](https://www.google.fr/search?q=cotisation+agirc), comptez le nombre de sites qui expliquent (plus ou moins) son calcul. Ne cherchez pas une page qui vous proposera une _implémentation de référence_ du calcul du montant à payer pour ces 4 millions de salariés concernés, c’est-à-dire l’algorithme que vous (en tant qu’employeur ou salarié) ou un expert pourront utiliser sans risque d’erreur. Pour lire la seule page qui s’en rapproche, ressortez votre master d’informatique et rendez-vous sur [la fiche Web](https://legislation.openfisca.fr/agirc_salarie) d’OpenFisca.

```
def formula(self, simulation, period):    cotisation = apply_bareme(        simulation,        period,        cotisation_type = "salarie",        bareme_name = "agirc",        variable_name = self.__class__.__name__        )    categorie_salarie = simulation.calculate('categorie_salarie', period)    return cotisation * (categorie_salarie == 1)
```

En résumé, aujourd’hui, deux types de supports encodent les règles que nous devons respecter pour travailler en France.

*   le code informatique obscur. Obscur car presque toujours secret (celui derrière services de paie, mais aussi de simulation des organismes publics) et en tout cas aujourd’hui toujours illisible pour le citoyen, malgré sa capacité à calculer la loi.
*   la loi que vous n’arriverez pas à lire, ou les bases documentaires inadaptées pour vraiment faire des calculs. Pour gagner du temps, vous paierez pour qu’on le fasse pour vous.

En réalité, l’un et l’autre de ces mondes tentent de se rapprocher, mais leur conception historique freine cette volonté pourtant très louable.

![](https://cdn-images-1.medium.com/max/800/1*qvLkdtVCvS3OZhZ0XpVAdw.jpeg)

\[DESSIN sur ces deux mondes qui trop lentement se rapprochent\]

Notre nouveau code, il faut qu’il soit :

*   une couche intermédiaire entre un langage de programmation et le texte qui constitue les fiches pratiques qui expliquent la loi.
*   d’une grande lisibilité — significativement plus grande que celle d’une base construite dans un langage de programmation généraliste, et ceci doit être vérifié avec les citoyens
*   lisible _sur le Web_ (qu’il tourne dans votre navigateur, sur votre mobile, et qu’il y soit expliqué), enrichi visuellement et donc accessible à la majorité du public
*   qu’il soit largement testé et que les tests, d’habitude réservés aux techniciens, deviennent des exemples d’aide à la compréhension de l’algorithme, eux aussi lisibles sur le Web
*   qu’il soit un socle unique permettant de lancer à bas coût un ensemble d’interfaces (dont des formulaires sur le Web) et de services se basant sur le calcul et l’explication des droits et obligations
*   plein d’autres choses que nous découvrirons sur le chemin :-)

Pourquoi n’ai-je pas accès aujourd’hui à un simulateur de référence pour tout droit ou obligation assez simple ? Pourquoi ceux qui existent sont-ils de qualité moyenne ? Simplement parce que les pouvoirs publics voient en général ces outils comme des projets indépendants, nécessitant à chaque fois un projet de prestation juteux.

Et en effet, ces simulateur développé à la demande seront de construction classique : une brique qui implémente les règles de calcul, et une brique d’interface qui vous permet de rentrer vos informations… mais tout sujet non trivial comportera notamment des questions conditionnelles, ainsi une _instruction de calcul_ du type “si l’effectif de l’entreprise est supérieur à 10, elle doit payer un versement transport de X”, où X dépend du code postal, _devra être recodée dans l’interface_ sous la forme “si l’effectif de l’entreprise est supérieur à 10, lui demander son code postal”. Toute évolution des règles (et il y en a souvent plusieurs fois par an) va donc devoir être répercutée sur le moteur _et_ l’interface, ce qui double les besoins de maintenance.

### Un peu de recul

#### L’État doit-il vraiment s’en mêler ?

En termes _philosophiques_, il peut sembler normal que les lois qui créent des contraintes importantes (ex. pour créer une boîte et embaucher) soient accompagnées des solutions techniques simples pour en réduire la friction… tout du moins si tout ça est technologiquement faisable (c’est-à-dire sans gaspiller des milliards ni des décennies…). Or un certain nombre de _startups_ de l’autre côté de l’atlantique mais ici aussi, semblent nous prouver que ça le devient en sortant notamment des interfaces qui surprennent leurs utilisateurs par leur simplicité. Certaines par exemple s’attaquent à des sujets complexes (réputés pour produire des usines à gaz) comme la paie.

Ce qui nous mène à la justification _pratique_ de l’implication de l’État : malgré la supériorité de la solution d’une _startup_ sur les entreprises concurrentes, elle restera souvent trop peu audible pour vaincre l’énorme inertie des acteurs historiques du marché. Ainsi, pas de grande économie d’échelle ce qui n’aide pas la _startup_ à casser les prix du marché comme elle l’annonçait. L’État, ou les organismes sociaux, ont le pouvoir, par l’obligation ou mieux la référence qu’il représentent, de provoquer un bond important d’efficacité (en fournissant un gain de temps et de coût).

Et puis évidemment, les acteurs privés ne sont pas habitués à libérer les sources de leurs logiciels. Certes Facebook et Google publient des librairies plus ou moins libres, mais ils le font parce que leur valeur réside plutôt dans les masses de données qu’ils sont les seuls à accumuler. L’État ne doit pas avoir cette pression de la propriété intellectuelle du code.

Imaginez ce qui pourrait se passer si créer et gérer les contraintes légales d’une entreprise (ou même plus simplement embaucher) était aussi agréable et sans surprise que de gérer sa location Airbnb sur son _smartphone_ ? Est-ce que ça augmenterait notre compétitivité (je peux enfin consacrer 100% de mon temps ou revenu à ma valeur ajoutée) ? Ou diminuerait le chômage (personne ne veut de moi, mais je peux créer mon activité dès aujourd’hui sans sacrifier mes nuits) ? Serait-ce un problème pour les grosses entreprises ou grandes chaînes de magasins qui ne bénéficieraient plus autant de leur échelle ?

#### Donc on nationalise la gestion ?

Loin de là ! Libre à chacun d’utiliser la solution qui lui convient, mais une _solution de base_ ouverte et moderne se doit d’être disponible à tous. Cela a certes de quoi inquiéter les professionnels spécialistes de la législation, mais loin d’être un outil destructeur, il sera d’une aide précieuse à ceux qui veulent innover dans le domaine (rappelons que le code officiel doit être libre et utilisable par les acteurs privés), et surtout une incitation à déplacer la valeur ajoutée sur les vastes domaines de complexité aujourd’hui laissés de côté.

Et ce d’autant plus si l’État publie ces règles sous forme de ce qu’on appelle des _diffs_ dans le monde du développement : une loi qui impacte des règles serait accompagnée d’instructions d’ajout et de suppressions de lignes dans le code existant (un taux qui évolue, un mécanisme qui change comme un plafonnement, ou une cotisation qui disparaît), permettant à ces acteurs privés souvent de taille modeste d’éviter la veille législative, pénible et coûteuse.

Mais alors si le but n’est pas de concurrencer les entreprises privées de gestion, pourquoi ne pas se restreindre à cet objectif d’une implémentation lisible de la loi sans développer d’applications à côté ? Parce que c’est le meilleur moyen de produire un modèle intéressant sur le papier mais qui se révèle inadapté en pratique. La première entreprise qui tenterait de se saisir de ce qui ne serait alors qu’une spécification ne pourrait au mieux que s’en inspirer.

Il semblerait donc que la seule raison _d’utilité publique_ restante qui mène à craindre ce genre d’initiative de l’État soit sa capacité à reproduire le travail de ces _startups_ à grande échelle.

#### Une nouvelle chance ?

Une petite équipe cachée au fin fond de l’État (à l’_incubateur des services numériques_), explore des réponses à ces problèmes, en partant à l’origine du projet [_OpenFisca_](http://openfisca.org).

Nous essayons d’adopter des méthodes et des avancées techniques qui nous semblent avoir bien évolué depuis les grands projets ratés de l’État. Notamment, il faut _commencer petit_ : sur un domaine restreint, pour une sélection d’utilisateurs. Le _construire avec l’utilisateur_. Donc le lui présenter fréquemment. Il faut le _tester_ exhaustivement. Il doit être construit _pour le Web_. Il faut évidemment qu’il soit _libre_, et mieux : que _sa construction elle-même soit ouverte_. L’objectif ultime (pas de précipitation !) : que l’écriture des règles elle-même soit participative, accessible sans l’expérience d’un codeur. En attendant, les règles seront contestables par un simple commentaire ou mieux, l’ajout d’un test pointant l’erreur.

Rassurez-vous, tout ça n’a coûté pour l’instant pas plus d’un dix-millionième des recettes fiscales de l’État. Ou bien inquiétez-vous en : on n’y consacre qu’un dix-millième du budget de la collecte du seul impôt sur le revenu… \[prendre la collecte de tous les prélévements plutôt\]

Tristement, l’incertitude quand à la réussite de ce genre d’initiatives vient aujourd’hui plus de la capacité de l’État à recruter les bons profils en leur offrant des contrats intéressants : pas de possibilité ici de CDI, ni de postes sur des concours exigeants et bien ciblés. Peut-être que les [directives de l’ancien premier ministre](http://circulaire.legifrance.gouv.fr/pdf/2017/03/cir_41952.pdf) seront un jour mises en œuvre. Google, Apple et Airbnb font-il construire leurs nouveaux services par des équipes tournantes de CDD ou de consultants ?

#### Où en sommes-nous ?

Nous avons donc commencé à écrire des règles en texte dans un style lisible suivant un modèle construit à l’occasion. Tout ça est fait à la main, impossible aujourd’hui d’automatiser la lecture de la loi en français; quand ça sera possible, il faudra de toute façon des moyens de comprendre l’interprétation que ces programmes stockerons.

Notre modèle est-il _le_ bon ? Peut-être pas, mais on propose déjà des applications, expérimentales mais bien concrètes et appréciées, comme une aide dans la décision d’embauche.

Est-il adapté aux autres domaines ? On pense que l’on pourra l’étendre, mais ce n’est _volontairement_ pas notre priorité aujourd’hui : mieux vaut avoir un domaine fonctionnel plutôt que 3 supposés.

Il faudra probablement plusieurs initiatives de ce genre avant d’arriver à un début de modèle généraliste.

**Et concrètement, ça donne quoi ?**

Nous avons aujourd’hui une plateforme qui fournit des simulateurs nouveaux et expose publiquement une partie des règles de la paie.

Rendez-vous bientôt sur un deuxième article qui expliquera comment nous construisons tout ça. En attendant, essayez [notre premier simulateur](https://embauche.beta.gouv.fr/simu/surco%C3%BBt-CDD/intro) avancé, et visitez [la page de développement](https://github.com/sgmap/syso) du projet, où tout est public.

\[ICI vidéo qui montre le projet qui tourne sur un téléphone \]

### Un tout petit peu de bibliographie.

[Cet article](http://greenash.net.au/thoughts/2008/08/legislation-and-programming-two-peas-in-a-pod/) d’un blog personnel introduit bien le couple loi-code. Il compare malheureusement la loi à du code moyen, pas très élégant. Sa conclusion vaut la lecture : elle note l’importance du mot “raisonnable” dans notre système législatif.

À retenir :

> Legislation endeavours to be unambiguous, and yet it’s infamous for being plagued with ambiguity problems. \[…\] Computer code doesn’t _try_ to be unambiguous, it simply _is_ unambiguous — by its very definition. A piece of code, when supplied with any given input, is quite literally incapable of returning inconsistent output.

L’article [Computational Law, Symbolic Discourse, and the AI Constitution](https://medium.com/backchannel/computational-law-symbolic-discourse-and-the-ai-constitution-d8528ee27bf0) de Stephen Wolfram (scientifique pluridisciplinaire notamment créateur du calculateur Mathematica) tourne longuement autour du pot, n’apporte rien de concret (à part ses produits commerciaux) mais est intéressant : il pense que le rêve de Leibniz, écrire une loi calculable, est aujourd’hui à notre portée : un _symbolic discourse language_ : machine learning en entrée, Ethereum…

À noter :

> One might think that writing everything as code, rather than natural-language legalese, would be a burden. But my guess is that it will actually be a great benefit.