---
title: Vers une implémentation officielle de la loi
description: 'Partie 2: Coder les cotisations sociales'
date: ''
categories: []
keywords: []
slug: ''
---

  

À caser : 

Pour ce faire, celui qui y encodera ces règles aura un manuel et une valise d’outils adaptés au domaine à implémenter. Si une règle y est impossible à écrire, ou si l’implémentation possible est inacceptable (comprendre : trop dure à relire), un outil supplémentaire est nécessaire et sera fourni par les développeurs — et c’est en fait l’implémentation de ces outils, que l’on appelle _mécanismes,_ qui est écrite dans un langage complet. La CRDS utilise un mécanisme très simple, la _multiplication_ assiette \* taux, mais pourrait un jour évoluer pour utiliser un _barème en taux marginaux :_ il faut alors espérer que nous n’aurons pas à déchiffrer son implémentation en python  pour comprendre que ça se calcule comme l’impôt sur le revenu.

  

#### Les cotisations sociales

Concrètement, vous êtes un patron qui veut simplement embaucher quelqu’un (ou vous-même dans certains cas) en lui versant un salaire, et donc en retranchant les cotisations sociales obligatoires. Facile ! se dira-t-il naïvement, j’ai déjà plié en 15 minutes ma déclaration d’impôts sur [impots.gouv.fr,](http://impots.gouv.fr/) il doit exister un équivalent pour la paie !

Eh bien non ! Pas de service unique officiel de calcul des cotisations sociales (alors que son pendant pour le versement, la DSN, est en train d’être mis en place). Vous constatez rapidement qu’il vous faudra prévoir une nouvelle “cotisation de calcul des cotisation”, qui se paie en € ou en temps. Il est fortement recommandé pour la réussite de votre entreprise de prendre la première option.

![Faites le bon choix](https://cdn-images-1.medium.com/max/1200/1*e49pEfLDXteQ76oBeKXbFg.png)
Faites le bon choix

Ce système marche à peu près. Il fait tourner les fiches de paie des millions d’actifs français. Mais en produisant [de très nombreuses erreurs](http://www.europe1.fr/economie/fiche-de-paie-un-salarie-sur-trois-a-deja-constate-une-erreur-2540745) et des tas de saisies inutiles. Et surtout, il est grandement inefficace, soit en d’autres termes, coûteux. Pardonnez cette estimation simpliste mais parlante : 20€ par fiche de paie/mois/actif, c’est 6 milliards d’€ par an. \[Vérifier\]

Le sujet est-il complexe à ce point ?

Pas du tout ! Mais les _règles_ définissant les cotisations sociales sont analysées, implémentées (ou vulgarisées) puis surveillées (les taux voir les calculs changent régulièrement) par un nombre impressionnant d’acteurs complètement isolés : des centaines de logiciels de paie, mais aussi les comptables, services RH, petites entreprises, organismes de sécurité sociale, outils de simulation, ouvrages et bases documentaires, revues… C’est au final très coûteux pour la collectivité, mais paradoxalement complètement oublié dans la grande actualité politique du moment pour restaurer la compétitivité des entreprises.

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

Et en effet, ces simulateurs développés à la demande seront de construction classique : une brique qui implémente les règles de calcul, et une brique d’interface qui vous permet de rentrer vos informations… mais tout sujet non trivial comportera notamment des questions conditionnelles, ainsi une _instruction de calcul_ du type “si l’effectif de l’entreprise est supérieur à 10, elle doit payer un versement transport de X”, où X dépend du code postal, _devra être recodée dans l’interface_ sous la forme “si l’effectif de l’entreprise est supérieur à 10, lui demander son code postal”. Toute évolution des règles (et il y en a souvent plusieurs fois par an) va donc devoir être répercutée sur le moteur _et_ l’interface, ce qui double les besoins de maintenance.

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

Nous avons donc commencé à écrire des règles en texte dans un style lisible suivant un modèle construit à l’occasion. Tout ça est fait à la main, impossible aujourd’hui d’automatiser la lecture de la loi en français; quand ça sera possible, il faudra de toute façon des moyens de comprendre l’interprétation que ces programmes stockeront.

Notre modèle est-il _le_ bon ? Peut-être pas, mais on propose déjà des applications, expérimentales mais bien concrètes et appréciées, comme une aide dans la décision d’embauche.

Est-il adapté aux autres domaines ? On pense que l’on pourra l’étendre, mais ce n’est _volontairement_ pas notre priorité aujourd’hui : mieux vaut avoir un domaine fonctionnel plutôt que 3 supposés.

Il faudra probablement plusieurs initiatives de ce genre avant d’arriver à un début de modèle généraliste.

**Et concrètement, ça donne quoi ?**

Nous avons aujourd’hui une plateforme qui fournit des simulateurs nouveaux et expose publiquement une partie des règles de la paie.

Rendez-vous bientôt sur un deuxième article qui expliquera comment nous construisons tout ça. En attendant, essayez [notre premier simulateur](https://embauche.beta.gouv.fr/simu/surco%C3%BBt-CDD/intro) avancé, et visitez [la page de développement](https://github.com/sgmap/syso) du projet, où tout est public.

\[ICI vidéo qui montre le projet qui tourne sur un téléphone \]