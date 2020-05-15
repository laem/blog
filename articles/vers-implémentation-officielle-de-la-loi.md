---
titre: Vers une implémentation officielle de la loi
description: 'Partie 1 : introduction'
résumé: L'Etat doit accompagner la loi d'un code qui peut être lu par un ordinateur
image: "https://cdn-images-1.medium.com/max/2560/1*xOKbBlYZ4wg0OhIhyUgnfQ.jpeg"
date: 2017-06-22
---


# Vers une implémentation officielle de la loi

L’État doit accompagner la loi d’un code qui peut être lu à la foi par le citoyen et par nos ordinateurs, donc _lisible et exécutable_. C’est une énorme promesse de transparence et d’efficacité… au prix d’un défi technique. Il est tout à fait possible aujourd’hui de commencer sur de petites parties de la loi. Un sujet s’y prête bien : les taxes et prélèvements qui font tourner l’État lui-même et notre sécurité sociale. Ces règles dictent des transactions financières qui représentent chaque année _un millier de milliards d’€_.

L’objectif n’est pas de changer ou remplacer la loi, mais simplement de moderniser son support, ce qui suffirait à avoir des conséquences majeures ! Notons qu’avec les technologies actuelles, seule une petite part de la loi pourra être traduite ainsi. Mais bien d’autres jeux de règles non législatives sont concernés.

Les opinions exprimées dans cet article sont celles de son auteur. N’hésitez pas à signaler les malheureuses simplifications ou erreurs.

--------------------

### Le problème du citoyen avec la loi

Vous avez peut-être eu la chance de visiter le Louvre à Paris et de tomber sur une mystérieuse stèle noire plus grande que vous : le Code de Hammourabi. Gravé il y a près de 4000 ans, il comporte des paragraphes d’un style qui nous est familier : des lois qui régissaient la vie quotidienne des citoyens de l’époque.

![](https://cdn-images-1.medium.com/max/800/1*YX0Ju8EpIO0fa_LkvDhsMg.png)
*[Voir la page Wikipedia](https://fr.wikipedia.org/wiki/Code_de_Hammurabi)*

On pourra se réjouir du chemin parcouru depuis en termes d’égalité et de tolérance… Mais mettons ce jugement de côté un moment. Pour nous, citoyens d’aujourd’hui, ça ne semble pas si compliqué à comprendre : les règles sont limpides et il n’y en a finalement pas tant que ça. Sauf qu’à l’époque, [peu de gens pouvaient les lire](https://fr.wikipedia.org/wiki/Cun%C3%A9iforme#Qui_.C3.A9crivait_et_lisait_le_cun.C3.A9iforme_.3F)…

En réalité, ce code quadrimillénaire et les textes législatifs qui nous permettent aujourd’hui de vivre en société partagent le même défaut : _ils sont inaccessibles au citoyen lambda_. On a appris à lire, mais c’est notre capacité d’entendement d’un ensemble de règles si complexe qui a été dépassée.

En effet, même si tout le monde la tient dans sa poche grâce à [legifrance.gouv.fr](http://legifrance.gouv.fr/), la loi est complexe, vaste et écrite dans un langage de spécialiste, au point qu’on ne peut difficilement s’informer _sans intermédiaire_ sur ses droits et devoirs.

#### La grande bibliothèque

Dans notre vie quotidienne, nous nous sentons souvent tout petits devant la loi qui s’apparente à une ancienne et vaste bibliothèque remplie de livres dont les chapitres se citent tous entre eux pour définir des _règles :_ nos droits et obligations. Notre droit ou notre obligation est là, quelque part, morcelée. Comment la saisir ?

Dans ces ouvrages, malgré tous les efforts linguistiques, beaucoup de termes ne sont pas définis rigoureusement, ou alors leur référence est difficile à résoudre. Souvent, il faut lire et articuler plusieurs étages pour connaître son droit ou son obligation définitive.

![](https://cdn-images-1.medium.com/max/800/0*V1W8NHh93WzKVv2B.jpg)

En tant que citoyen, ce n’est bien souvent pas un petit créneau de 15 minutes de consultation qu’il me faudra, mais plutôt une réservation à la journée, ou mieux : un abonnement pour des visites guidées. Bien sûr, les prestations de ces intermédiaires seront payantes (n’oublions pas qu’une publicité vue est une alternative à un tout petit paiement par carte bleue).

Des acteurs publics proposent heureusement des fiches gratuites formant des bases documentaires (ex. [service-public.fr](http://service-public.fr) qui répond a des milliers de questions pratiques ou [urssaf.fr](http://urssaf.fr) spécialisé sur le sujet des cotisations sociales).

Parfois, ces fiches sont incomplètes, ou trop simplifiées (des cas particuliers peuvent avoir été omis). Surtout, vous ne trouverez rarement autre chose que _des paragraphes de texte_ à l’écran. Le risque apparaît alors à l’étape de raisonnement. Vous devez vous-même appliquer ce texte à votre cas : autrement dit, vous devez faire un calcul. Des calculs logiques très souvent (« ceci me concerne si je réponds à ce critère et à celui là… mais pas à celui-ci»), et parfois aussi numériques (ex. calcul d’une cotisation).

Ainsi, le texte de ces fiches, ou de leur source les lois, sont souvent utilisés comme des petits bouts d’instructions de calcul, soit en d’autres termes du code qui n’a jamais été lancé, et donc qui n’a jamais été testé.

\[Mise à jour\] À la rentrée 2017, le gouvernement a constaté publiquement que les gens ne peuvent plus directement comprendre le sujet du droit du travail en l’état : un “droit du travail numérique” viendra clarifier tout ça. Ce domaine a la particularité de cumuler plusieurs couches de règles, du droit du travail aux 40 000 accords d’entreprise signés chaque année, dont l’articulation se complique de lois en ordonnances. Espérons que ce code du travail numérique ne soit pas simplement une nouvelle base de fiches de texte venant seulement concurrencer celles qui existent déjà.

#### Illustration

Illustrons le sujet avec une règle au hasard piochée dans le chapeau magique des obligations françaises : la CRDS, acronyme de Contribution pour le remboursement de la dette sociale, dont l’histoire tumultueuse est racontée sur la [page Wikipedia](https://fr.wikipedia.org/wiki/Contribution_pour_le_remboursement_de_la_dette_sociale). Plaçons-nous dans le contexte de la fiche de paie, donc limitons nous aux revenus des salariés (la CRDS est bien plus large que ça).

On trouve facilement des centaines de ces fameuses fiches, sur des sites publics ou privés, qui nous permettent d’ébaucher un calcul. On comprend vite que la formule est très simple et facile à implémenter. La nécessité d’une mise à disposition par l’État d’une implémentation de référence de cette CRDS semble _a priori_ un peu tirée par les cheveux.

![](https://cdn-images-1.medium.com/max/800/1*3zy7rY16pNpK2yME5eEJ6w.png)

A priori seulement…

La fiche de [service-public.fr](https://www.service-public.fr/particuliers/vosdroits/F2971), qui nous donne cette formule à la ligne “Revenus d’activité salarié” du premier tableau, indique déjà que c’est plus compliqué que ça.

*   l’**assiette** inclut le salaire brut, mais aussi les primes et “indemnités diverses”. Mais lesquelles précisément ? Il faut y ajouter les “avantages en nature ou en espèces” mais avec une exception : “si la rémunération est exclusivement constituée d’avantages en nature, elle est exonérée de de CRDS” (le reste concerne les travailleurs non salariés). L’énumération finit par trois petits points : doit-on comprendre que d’autres revenus peuvent être concernés ?
*   notre formule a oublié l’**abattement de 1,75% **: seul 98,25% de l’assiette sera à prendre en compte…

![un abattement conditionnel](https://cdn-images-1.medium.com/max/600/1*U5reYyoAViUcWfgCtCpCLA.png)
*un abattement conditionnel*

Et ce, seulement en dessous d’un certain montant comme le montre cette copie d’écran. Cet usage de “au delà” n’est-il pas ambigu ? Doit-on comprendre que pour un salaire de 200 000 € c’est seulement le reste de 43 088 € qui ne sera pas abattu, ou l’ensemble ?

*   Mais encore : pour des “compléments du salaire”, qui ne sont pas définis dans la fiche, **pas d’abattement**. En pratique, c’est le cas de la contribution employeur pour la complémentaire santé, qui est maintenant obligatoire et donc concerne tous les salariés. Il est courant que ce point soit oublié et que “la mutuelle” soit abattue par mégarde.
*   Pour d’autres cas **exceptionnels** bien listés dans la fiche, par exemple les salaires des apprentis, c’est toute la somme qui est exonérée. Il en est de même par exemple pour le paiement par le patron des tickets restaurants.

Ainsi, le diable est dans le détail : la règle qui semblait être une simple multiplication à été compliquée d’un paquet de conditions.

Pour être rigoureux dans notre calcul sur ce sujet sérieux, et pour avoir la réponse à beaucoup d’autres questions que nous n’avons pas abordées (ex. quand dois-je verser cet impôt, et si le salarié est à temps partiel ? ), mieux vaut suivre les liens vers les “textes de référence” . C’est parti pour 7 articles à lire sur 4 sites différents, qui équivalent au contenu de… _32 pages A4_. Et n’oublions pas de lire [la fiche de l’URSSAF](https://www.urssaf.fr/portail/home/employeur/calculer-les-cotisations/les-taux-de-cotisations/la-csg-crds.html).

Attention ! Cet article ne soutient pas que ces bases de documentation sont de mauvaise qualité ! _Au contraire_, il est bien probable que nous soyons bien servis en France, notamment au vu de la complexité de notre modèle social.

Mais nous devons aujourd’hui aller plus loin, et nous pouvons y arriver en publiant des explications exécutables. Un nouveau service qui viendrait compléter ce monde du texte en français, qui vient toujours avec son lot d’ambiguïtés.

Notons que si nous prenions d’autres exemples dans d’autres domaines, nous tomberions bien sûr sur des phrases qui nous poseraient un autre type de problème : le jugement. En plus de la difficulté technique pour simplement s’y retrouver ou calculer, surviendront des termes pour le moins ambigus tels que “raisonnable”, qui demandent une appréciation humaine. C’est hors de propos dans cet article.

### Coder les règles de la loi

Revenons donc à notre exemple : rien ne semble nous empêcher d’écrire du code qui calculerait cette cotisation, dans sa version simpliste comme dans sa forme jonchée d’exceptions. C’est ce que font les milliers de programmes de gestion qui silencieusement s’infiltrent dans nos vies, par exemple le petit robot de votre complémentaire santé qui vous verse 30% des 25€ de votre consultation chez le généraliste ([il y a une fiche pour cette règle](https://www.service-public.fr/particuliers/vosdroits/F1069) !).

#### La loi exécutable

Ce code, disons par exemple  du code source dans le langage de programmation très courant nommé _python_, est conçu pour être lu par un ordinateur, qui va le faire “tourner” comme on dit pour répondre à un problème précis : par exemple pour calculer cette fameuse CRDS, en nous donnant le montant à retenir chaque mois sur la feuille de paie d’après notre situation personnelle.

Une initiative développée notamment par l’État, le [projet OpenFisca](http://openfisca.org), rassemble du code libre (gratuit et réutilisable) qui permet de simuler certains de ces sujets. Concrètement, notre CRDS dans OpenFisca c’est [30 lignes de code python](http://legislation.openfisca.fr/crds_salaire) lisibles par un ordinateur _pour faire le calcul_. C’est déjà bien !

#### Au-delà du calcul numérique

Nous proposons ici d’écrire un code qui ressemblerait davantage à de la donnée : en la lisant, on doit évidemment pouvoir faire le calcul, mais aussi plein d’autres choses : générer des simulateurs automatiquement —puis par la suite des calculateurs dictant des transactions réelles, reconstituer une base documentaire des règles 3.0 alliant texte et calculs, visualiser comment se déroule le calcul d’une règle avec les entrées personnalisées de la simulation en cours, expliquer graphiquement à quoi servent les cotisations prélevées tous les mois sur la fiche de paie (quelle est ma contribution mensuelle au système de santé ?), expliquer interactivement les réformes du gouvernement, etc.

Ce qui est important, c’est que toutes les applications qui seront construites _partagent des règles encodées une seule fois._

#### Le code n’est pas qu’un moyen

Notons bien que le langage de cette base n’en est pas un dans le sens où tout n’y est pas exprimable. L’erreur serait de voir le support de l’implémentation de la loi comme une feuille blanche et un crayon, ce qui est le cas avec un langage complet comme _python_. Ce ne peut être un espace totalement libre pour le développeur qui y code les règles. En effet, ces langages complets permettent de tout faire, mais de mille façons différentes, et il devient alors impossible pour un ordinateur de l’interpréter afin d’en faire autre chose qu’un calcul. La plateforme doit encoder et exposer les lois, pas être un kit de complexification de la loi à destination des législateurs (en tout cas pas dans l’état actuel de l’accessibilité de la loi !).

Le code lui-même est l’un des objectifs, pas seulement un moyen de faire des calculs.

En termes techniques, on va rendre le code des règles plus _déclaratif_ qu’_impératif _: ça veut dire qu’au lieu de vraiment y exprimer le calcul — “ma règle retourne A x T”, on va plutôt faire une description de l’objectif — “ma règle est une cotisation dont la formule est une multiplication d’une assiette A par un taux T_”._ Ça peut paraître étonnant, mais c’est techniquement difficile d’écrire un programme qui comprend que dans notre premier exemple l’information A est une assiette qui aura sa place dans la colonne “base” de votre fiche de paie.

En réalité, beaucoup de domaines législatifs sont des compositions de mécanismes relativement simples. On met à disposition de la personne qui va écrire les règles de base un manuel et une valise d’outils adaptés au domaine à implémenter : dans notre exemple, c’est les mots-clefs “cotisation”, “multiplication”, “assiette” et “taux”. Lue par le moteur, cette description pourra donner cette multitude d’usages.

#### La loi lisible

Comme il traite un sujet important, ce code doit évidemment être _ouvert._ Malheureusement, ce n’est le cas de la majorité des services actuels qui impactent notre vie quotidienne, du système informatique de vos remboursements de santé (mutuelle et sécurité sociale) au RSA en passant par le code qui calcule votre taxe d’habitation. Ce sujet des _algorithmes ouverts_ a fait récemment la une grâce aux demandes citoyennes d’ouverture du code des impôts de Bercy et de celui qui attribue des places dans les universités (APB) développé par le ministère de l’éducation. Et ça va très loin : on peut lire [ici](https://www.wired.com/story/when-government-rules-by-software-citizens-are-left-in-the-dark) à propos d’algorithmes de prédiction utilisés par la police aux États-Unis pour libérer des détenus.

![Le code est souvent assimilé à une boîte noire qui transforme des entrées (votre situation) en sorties (vos droits ou obligations).](https://cdn-images-1.medium.com/max/800/1*aHka_eebkDaBLcOOnn_qdw.png)
Le code est souvent assimilé à une boîte noire qui transforme des entrées (votre situation) en sorties (vos droits ou obligations).

Les demandes d’ouverture, quand par chance elles aboutissent, n’obtiennent jamais un code _lisible_ par tous, seulement ouvert _(“open source”)_ mais  pénible à lire même pour ceux qui sont familiers avec le langage de programmation utilisé. Les règles sont donc soit cadenassées (code caché) soit opaques (code public mais illisible par la plupart)— et on réserve le même sort aux incontournables _tests_, qu’il faut voir comme des exemples, utiles autant pour comprendre le code que pour prouver son bon fonctionnement.

![À quoi bon avoir accès aux rouages si vous n’êtes pas horloger ?](https://cdn-images-1.medium.com/max/800/0*i1Cs4Qp7p8CEBQm4.jpg)
*À quoi bon avoir accès aux rouages si vous n’êtes pas horloger ?*

Ça tombe bien : un code source plus déclaratif, permettant plusieurs usages quand il est lu par un programme, sera aussi plus accessible pour les citoyens. Ne nous faisons pas d’illusion : il faudra quand même un certain investissement pour comprendre les blocs de texte affichés à l’écran. Mais justement, c’est sur le Web qu’il sera présenté dans sa version finale enrichie pour le citoyen (c’est justement cette base documentaire 3.0).

Nous sommes de plus en plus confrontés à des algorithmes qui sont complètement opaques, c’est le cas pour la reconnaissance des visages (on pense notamment à Facebook et Google, mais les plus inquiétants sont sûrement ceux branchés sur les caméras de sécurité dans les lieux publics). Mais pour une bonne raison : impossible de résoudre ces problèmes de reconnaissance d’image en empilant des règles de programmation classique.

Faisons donc l’effort de bien expliquer ce qui est toujours facilement explicable, et c’est le cas des règles de notre législation. C’est elles qui viendront articuler les entrées et sorties de ces boîtes noires, points de contact, d’_interprétation_ du monde réel mais pas d’_action_.

> Construisons un base ouverte de règles lisibles et exécutables, socle d’une multitude d’applications permettant d’expliquer et d’appliquer la loi.

<aside class="notice">

### Encart — Le droit du logement

Ces développements mériteraient d’être appliqués à bien d’autres sujets que celui des taxes et prélèvements : penchons nous rapidement sur un autre domaine qui nous concerne tous, lui aussi, et qui mériterait d’être rendu (en partie) exécutable : le droit du logement.

Par exemple aujourd’hui, quand on loue un appartement à l’année, on donne au propriétaire un dépôt de garantie. Cela entraîne un tas de questions :

*   quel est son montant ? Récemment, il a été [limité](https://www.service-public.fr/particuliers/vosdroits/F31269) à un maximum d’un mois de loyer (sans les charges, elles aussi à calculer).
*   d’ailleurs, ce loyer ne peut augmenter librement entre chaque location. Dans certaines villes, comme Paris et Lille, il est même en plus encadré.
*   qu’en fait le propriétaire ? En pratique, il l’encaisse, (car ça pourrait être un chèque en blanc). Le locataire est donc contraint à lui accorder un prêt à taux 0… mais c’est un autre sujet.
*   que se passe-t-il en fin de location ? Le propriétaire a 2 mois pour réaliser les devis des dégradations constatées lors de l’état des lieux. Il les déduit du dépôt de garantie, qu’il rend au locataire. En intégralité ? Non ! Il peut aussi retenir 20% du dépôt jusqu’au prochain conseil de copropriété au cas où les charges auraient augmenté. La somme sera donc rendue dans son intégralité jusqu’à 1 an après le départ du locataire.
*   si le propriétaire tarde, le locataire peut demander des intérêts !
*   …

Ainsi une question aussi courante et _a priori_ simple, active en réalité un jeu de règles à respecter par les deux parties qui demande une fine connaissance du droit.

On est alors tentés d’imaginer une plateforme en ligne, garantie par l’État, qui permettrait d’encadrer ce sujet en informant les deux parties, voir en se comportant comme un intermédiaire qui _exécute_ ces règles. Simulation en ligne du montant du dépôt de garantie, déduit du loyer maximum lui aussi simulé et attesté par l’état (aujourd’hui une grande partie du parc locatif [ne respecte pas](https://www.lavieimmo.com/avis-experts/encadrement-des-loyers-ou-en-est-on-8-mois-apres-36096.html) la loi, et c’est au locataire de prendre le temps de le contester en commission de conciliation); dépôt de la somme directement sur les comptes d’une nouvelle organisation (somme alors rendue “neutre”, par exemple pour servir un projet d’investissement public), qui jouera le rôle de garant de la conciliation en cas de problème. Remplissage et enregistrement en ligne d’un état des lieux type, notifications tenant le locataire au courant des devis téléchargés par le propriétaire, rappel et pénalisation automatique du propriétaire en cas de retard de restitution, …

Tout ça ne vous rappelle rien ? Ce rôle est déjà tenu par un acteur (sur le marché cousin de la location saisonnière), garant du respect de _ses propres règles_ : Airbnb. La plateforme de location entre particuliers assure déjà certains des services évoqués plus haut : le calcul en ligne du loyer, des charges, la [gestion de la caution](https://www.airbnb.fr/help/article/140/how-does-airbnb-handle-security-deposits), et la conciliation des litiges.

Peut-être allons nous nous réveiller en 2030, dans une France où l’essentiel du parc immobilier est géré par Airbnb. Aucun risque, pensez-vous, Airbnb prend une commission trop importante. Vraiment ? Un calcul simpliste pour un studio à Paris : pour 1 an de location à 900€/mois, c’est 10 800 € de loyer, 850€ de dépôt de garantie, 450€ de frais d’agence soit 12% de commission du “système classique”, dont 8% restitués en fin de période. Chez Airbnb, ça peut descendre jusqu’à 6% (pour l’instant), mais avec une expérience utilisateur bien plus attirante.

Pourquoi ne pas en construire un équivalent public qui se chargerait simplement de faire respecter une partie du droit du logement (nous ne parlons pas ici de lister les annonces) ? Une application bien concrète sur le Web et sur mobile, qui utiliserait une base publique de règles lisibles et exécutables.

</aside>

À ce stade et après cette digression, une réaction tout à fait normale serait : « c’est une bonne idée… mais la loi est bien trop compliquée. Vous allez vous casser la gueule dès le début de votre encodage du monstre législatif ! ». Et en effet, on pourrait multiplier encore les sujets candidats à la traduction : un troisième exemple serait les règles de protection de l’environnement dont l’application est surveillée par les [DREAL](https://fr.wikipedia.org/wiki/Direction_r%C3%A9gionale_de_l%27environnement,_de_l%27am%C3%A9nagement_et_du_logement) de chaque région. Et puis d’autres sujets de notre vie de tous les jours seraient à envisager : les obscures règles d’avancement et de salaire au boulot; les règles des seuils de pollution des villes menant à une information, une alerte ou des actions (et lesquelles ? circulation alternée, gratuité des transports…). Vous avez sûrement vous-même identifié la bête noire que vous ne comprenez pas ou qui vous fait perdre du temps.

### Commençons petit

Effectivement, on n’a pas le niveau pour lancer un grand projet qui implémenterait tous ces sujets en même temps comme un ensemble cohérent : il n’existe pas aujourd’hui de théorie ni d’initiative concrète expérimentant un droit entièrement exécutable. Alors on va se lancer en grimpant une petite colline. En plus de produire des applications utiles, elle devrait nous donner une meilleure vue du massif.

En d’autres termes, pour ne pas investir des centaines de millions d’euros puis se planter, il nous faut donc encourager les initiatives restreintes donc réalistes, qui se concentrent sur des petits sujets de la loi qui sont sources de confusion ou de coûts importants. Comme évoqué dans l’introduction, le domaine des obligations et droits financiers qui lient l’entreprise ou le citoyen à l’État ou à la sécurité sociale est une bonne piste. Il est en effet peuplé principalement de règles qui sont des compositions de simples calculs _« arithmétiques »,_ comme nous l’avons illustré plus haut. Ça ne l’empêche pas d’être technique, bourré d’exceptions et dispersé. Mais notre chance c’est que contrairement au reste, il n’est presque pas affecté par cette difficulté aujourd’hui irréductible de l’implémentation des termes qui appellent un jugement humain.

Dans ce domaine, il y a le sujet plus restreint des **cotisations sociales**. Mal compris, ses règles pèsent pourtant [500 milliards d’€](https://fr.wikipedia.org/wiki/Cotisations_sociales_en_France#Montants), horrifient tous les patrons et plombent notre chèque de fin de mois… En contrepartie, elles financement la sécurité sociale du pays, c’est à dire nos hôpitaux, retraites, assurance chômage et aides sociales.

### On a commencé !

Une suite à cet article expliquera ce sujet des cotisations sociales, comment il est géré aujourd’hui dans notre pays, et la tentative d’une petite équipe de l’État pour le traduire en base de règles exécutables et lisibles. Restez branchés !

En attendant, la base est [construite sur ce site](https://github.com/sgmap/syso), et vous pouvez dès maintenant utiliser son premier produit en _beta_ qui permet de [calculer le salaire net et le coût d’embauche d’un CDI ou CDD.](https://embauche.beta.gouv.fr/)

_C’est en cours de construction_, et c’est d’ailleurs une implémentation modeste des principes de cet article. D’autres initiatives feront un travail de modélisation similaire sur d’autres domaines. Peut-être qu’elle se généralisera progressivement à ces autres domaines, ou bien s’effacera face à un concurrent plus prometteur…

### Un tout petit peu de bibliographie.

[Cet article](http://greenash.net.au/thoughts/2008/08/legislation-and-programming-two-peas-in-a-pod/) d’un blog personnel introduit bien le couple loi-code. Il compare malheureusement la loi à du code moyen, pas très élégant. Sa conclusion vaut la lecture : elle note l’importance du mot “raisonnable” dans notre système législatif.

À retenir :

> Legislation endeavours to be unambiguous, and yet it’s infamous for being plagued with ambiguity problems. \[…\] Computer code doesn’t _try_ to be unambiguous, it simply _is_ unambiguous — by its very definition. A piece of code, when supplied with any given input, is quite literally incapable of returning inconsistent output.

L’article [Computational Law, Symbolic Discourse, and the AI Constitution](https://medium.com/backchannel/computational-law-symbolic-discourse-and-the-ai-constitution-d8528ee27bf0) de Stephen Wolfram (scientifique pluridisciplinaire notamment créateur du calculateur Mathematica) tourne longuement autour du pot, n’apporte rien de concret (à part ses produits commerciaux) mais est intéressant : il pense que le rêve de Leibniz, écrire une loi calculable, est aujourd’hui à notre portée : un _symbolic discourse language_ : machine learning en entrée, Ethereum…

À noter :

> One might think that writing everything as code, rather than natural-language legalese, would be a burden. But my guess is that it will actually be a great benefit.
