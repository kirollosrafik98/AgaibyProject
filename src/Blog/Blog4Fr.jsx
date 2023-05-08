import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import firstBlog from "../images/firstBlog.png";

export default function Blog4Fr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div class="page-title">
        <div class="container">
          <Fade top duration={1000} delay={500}>
            {" "}
            <h1
              style={{
                color: "#C0AB89",
                fontFamily: "Millania",
                fontSize: "80px",
              }}
            >
              Blog
            </h1>
          </Fade>

          {/* <h1>Blog</h1> */}
        </div>
      </div>
      <section>
        <div className="container p-5">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-8">
              <h1 style={{ color: "#C0AB89", fontFamily: "Maya" }}>
              Progrès dans les technologies de tissage de tissus
              </h1>
            </div>
            <div className="col-md-8">
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
                L'accent mis sur la productivité et la qualité a développé la
                 technologie de tissage beaucoup et par conséquent les heures de travail
                 nécessaires pour tisser du tissu à partir d'un métier à tisser ont été réduits d'environ
                 20 à 0,25 au cours des 125 dernières années, et au cours des 50 dernières années
                 il y a eu une réduction de 95 % des heures inopérantes par norme
                 unité produite.
              </p>
              <h5>Technologies de tissage – hier et aujourd'hui</h5>
              {/* <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={firstBlog} alt="" /> </div>  */}
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Le tissage est un processus de formation de tissu avec
                 entrelacement de deux ensembles de fils ou plus à l'aide d'un
                 machine appelée métier à tisser. Il n'est pas encore certain quand le tissage
                 processus a été introduit dans la société humaine. Sauf pour quelques
                 activités ailleurs, les grands développements du textile ont pris
                 place en Angleterre. En Angleterre, le changement majeur de l'agriculture
                 à l'industrie de la laine est venu au 14ème siècle. Pendant toutes ces
                 ans et quelques centaines d'années après le 14ème siècle, le tissu
                 a été réalisé sur des métiers à main non équipés de braguette
                 Navette.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              En 1733, John Kay invente la navette volante qui permet à la trame de
                 être inséré plus rapidement. Edmund Cart Wright, un Anglais
                 ecclésiastique, a inventé un soi-disant métier à tisser mécanique qui pourrait être
                 opéré à partir d'un seul point par deux hommes forts. Heureusement,
                 la vapeur était disponible en 1765. Bientôt, des métiers à tisser électriques furent entraînés
                 à la vapeur et la plupart des pièces en bois ont été remplacées par du fer.
                 Ces métiers étaient alors arrêtés toutes les quelques minutes afin de
                 remplacer les pirns de trame vides ou cop dans la navette et cela
                 limitait le nombre de métiers à tisser, un tisserand pouvait opérer jusqu'à environ
                 quatre. James Northrop, un anglais a inventé une trame automatique
                 système de transfert qui a remplacé le fil de trame dans la navette
                 sans ralentir ni arrêter le métier en 1889.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Des développements similaires ont eu lieu ailleurs aussi, Ruti, un important
                 fabricant de métiers à tisser de Suisse a fabriqué le changement automatique de bobine
                 Métier à tisser Northrop en 1898. Après la Seconde Guerre mondiale, plus de productivité et
                 l'efficacité étaient essentielles pour surmonter l'augmentation des coûts de main-d'œuvre dans
                 Pays de l'Ouest. Limites des Métiers à Navette Malgré les
                 vitesse et efficacité relativement élevées dans le métier à tisser avec
                 picking conventionnel, la productivité de ces machines
                 restent limités tant que leur valeur fondamentale
                 les constructions impliquaient l'utilisation de la propulsion de la navette. C'est
                 sait que la puissance nécessaire au crochetage est proportionnelle à la
                 cube de la vitesse du métier. Si la vitesse du métier est augmentée de 200
                 à 300 duites par minute, la puissance nécessaire augmenterait de
                 un facteur de (3/2) 3 soit 3,4 fois environ.
              </p>
              <h5>La transmission de la technologie du métier à navette était-elle nécessaire ?</h5>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
        L'accent mis sur la productivité et la qualité a développé la
                 technologie de tissage beaucoup et par conséquent les heures de travail
                 nécessaires pour tisser du tissu à partir d'un métier à tisser ont été réduits d'environ
                 20 à 0,25 au cours des 125 dernières années, et au cours des 50 dernières années
                 il y a eu une réduction de 95 % des heures inopérantes par norme
                 unité produite. La majorité des développements ont lieu sur
                 le shuttleless se profile dans les directions suivantes :
              </p>
              <ul className="dot-list">
                <li>Augmenter la productivité du métier à tisser.</li>
                <li>
                Pour rendre les métiers à tisser plus flexibles pour différents types de tissus.
                </li>
                <li>Pour réduire les temps d'arrêt pour changer de style, etc.</li>
                <li>
                Application de mécanismes de contrôle électronique pour augmenter
                   automatisation
                </li>
                <li>
                Développement d'accessoires tels que ratière, jacquards, etc.
                </li>
              </ul>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              En plus de cela, les nouveaux métiers à tisser sont de conception simple, les
                 les mouvements sont plus fiables, consomment moins d'énergie et ont un moindre
                 coût de maintenance.
              </p>
              <h5>Inconvénients des métiers à tisser à navette</h5>
              <ul className="dot-list">
                <li>
                Une plus grande contrainte imposée au mécanisme de prélèvement, donc
                   le rendant susceptible d'échecs fréquents.
                </li>
                <li>La plus grande quantité de bruit et de vibrations.</li>
                <li>
                En raison de l'énergie supérieure dans une navette, une plus grande contrainte est
                   à nouveau imposée au mécanisme de contrôle.
                </li>
                <li>
                Le mouvement de la navette sera plus difficile à contrôler
                   et il y aura une plus grande possibilité de son éjection de
                   le métier.
                </li>
              </ul>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
          Les problèmes dynamiques créés par le prélèvement et le contrôle
                 mécanisme et le processus inhérent d'enroulement de pirn pour la navette
                 métiers à tisser avaient encouragé les fabricants de métiers à tisser à développer des alternatives
                 moyen d'insertion de trame dans lequel la navette lourde n'est pas projetée
                 en avant et en arrière sur toute la largeur du métier. C'est
                 coutumier de désigner ces métiers comme des métiers sans navette.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Les différents métiers à tisser sans navette qui ont été développés sur une
                 période d'environ 50 ans peuvent être classés en différents groupes.
              </p>
              <ul className="dot-list">
                <li>Métiers à projectiles</li>
                <li>Métiers à rapière</li>
                <li>Métiers à jet de fluide</li>
                <li>Métiers à tisser multiphases</li>
              </ul>
              <h5>Avantages de la technologie de tissage sans navette</h5>
              <ul className="dot-list">
                <li>
                Le tissage Shuttleless devient de plus en plus populaire en raison
                   aux avantages suivants par rapport aux métiers conventionnels.
                </li>
                <li>
                Productivité élevée de la main-d'œuvre et de la machine grâce à la vitesse élevée et
                   plus grande largeur de métiers.
                </li>
                <li>
                Réduction des coûts de main-d'œuvre grâce à une allocation plus élevée de métiers à tisser et
                   productivité.
                </li>
                <li>Tissu sans défaut pour une plus grande longueur.</li>
                <li>Meilleur environnement grâce au faible niveau de bruit.</li>
                <li>Le processus d'enroulement Pirn est éliminé.</li>
                <li>Moins de perte de valeur des tissus.</li>
                <li>Faible consommation de magasins et de pièces de rechange.</li>
                <li>Moins d'encombrement par mètre de tissu.</li>
                <li>
                Plus de couleurs dans le sens de la trame (jusqu'à 12) par Pick and Pick
                   méthode.
                </li>
                <li>
                Des tissus plus larges et des tissus multi-largeurs peuvent être tissés, haut
                   degré de flexibilité pour s'adapter à une large gamme de fibres et
                   compte.
                </li>
                <li>Facilement adaptable aux tendances du marché.</li>
                <li>Des brides plus grandes peuvent accueillir 3 fois plus de fil.</li>
                <li>
                En raison de moins de changements de faisceau, moins de temps d'arrêt et moins de gaspillage.
                </li>
                <li>Moins de dépendance à la main-d'œuvre qualifiée.</li>
                <li>
                Capacités de conception supérieures grâce au microprocesseur et
                   commandes électroniques.
                </li>
                <li>Maintenance facile et moins de charge de travail pour les Jobbers.</li>
                <li>Moins d'accidents.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
