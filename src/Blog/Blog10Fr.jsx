import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import firstBlog from "../images/blog3.jpg";
import fig from "../images/fig.png";
import fig2 from "../images/fig2.png";
import fig3 from "../images/fig3.png";
import fig4 from "../images/fig4.png";
import fig5 from "../images/fig5.png";
import fig6 from "../images/fig6.png";
import fig7 from "../images/fig7.png";
import fig9 from "../images/fig9.jpg";
import fig10 from "../images/fig10.jpg";
import fig11 from "../images/fig11.jpg";

export default function Blog10Fr() {
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
              Étude sur l'application d'oxyde de graphène réduit sur tissu de coton
                 pour une finition imperméable respirante
              </h1>
            </div>
            <div className="col-md-8">
              {/* <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The necessity of innovation in Bangladesh’s textile and apparel industry is felt even more badly amid the current phase of difficult times while the industry is observing acute energy and gas price hikes, the Russia-Ukraine war, global inflation, order shortage, etc.</p> */}
              {/*                       
                      <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={firstBlog} alt="" /> </div>  */}
              {/* <p  style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>Oh, summer, the season of sweat and heat! Choosing the perfect fabrics for summer to wear during this time is crucial for staying comfortable. Natural fabrics like cotton, linen, and silk are a few choices out of many for summer. These fabrics are breathable and lightweight. Synthetic fabrics like polyester and nylon can trap heat and cause discomfort. Light-coloured fabrics are also preferable as they reflect heat and keep you cool. So, let's swap out those heavy winter clothes for some breezy cotton and enjoy the summer!</p> */}
              <h5>Abstraite</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Dans cette étude, un tissu tissé 100% coton a été choisi pour
                 étudier les effets des finitions imperméables avec
                 respirabilité grâce à l'utilisation réduite d'oxyde de graphène (rGO) et
                 liant polyuréthane (PUA). Les effets de l'imperméabilité du
                 les tissus ont été mesurés conformément à la norme AATCC 22 (1996)
                 test et méthode de l'angle de contact. Évaluer les propriétés physiques
                 (résistance à la traction, test de rigidité, test d'épaisseur) de l'eau
                 le tissu fini a été évalué en utilisant les normes britanniques pertinentes
                 Normes, normes ASTM et ISO. Le temps de mouillage du
                 tissus a également été mesuré avant et après les échantillons traités pour
                 évaluer la performance et la durabilité de la finition.
              </p>
              <h5>Introduction</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Le début du 21ème siècle a marqué de grands développements dans
                 technologie et science. Cependant, ces développements sont venus
                 avec un prix, dont l'un est l'aggravation du réchauffement climatique,
                 aux brusques changements climatiques. Pour survivre et être protégé
                 dans de telles conditions, il est nécessaire de porter des vêtements appropriés et
                 vêtements de travail pour les personnes travaillant spécifiquement en plein air
                 environnements.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              L'étude du graphène a été l'un des sujets les plus passionnants
                 en science des matériaux et dans de nombreux autres domaines de recherche depuis la
                 premier rapport sur la préparation et l'isolement de graphène unique
                 couches en 2004. Les matériaux fonctionnels textiles flexibles ont
                 a récemment attiré l'attention pour leur antibactérien [1, 4,
                 6], Protection UV [2], Imperméable avec propriétés respirantes
                 [5], conductivité électrique [8], conductivité thermique [7] et
                 ainsi de suite [3].
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             Le graphène a récemment suscité un vif intérêt en raison de sa
                 mécanique, thermique, optique et électronique exceptionnels
                 propriétés. L'oxyde graphitique est une matière première à partir de laquelle
                 le graphène est exfolié (fig 1). Le graphène est le bidimensionnel
                 feuille constituée d'atomes de carbone et créant un hexagone
                 treillis commandé. L'oxyde de graphène (GO) est une feuille de graphène avec
                 groupes carboxyliques sur ses bords et phénol hydroxyle et époxyde
                 groupes sur son plan basal. Élimination des groupes fonctionnels dans le
                 oxyde de graphène pour produire de l'oxyde de graphène réduit (rGO) par
                 traitement chimique ou par recuit thermique.
              </p>

              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig} alt="" />{" "}
              </div>
              {/* <h5>
                      2. Linen</h5> */}
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Fig 1 : Oxyde de graphène (Avec l'aimable autorisation de Jianchang Li et.al
                 2014) Les tissus imperméables et respirants sont conçus dans le but
                 de protéger le porteur des conditions météorologiques telles que le vent,
                 neige, ainsi que la prévention de la perte excessive de chaleur corporelle [9].
                 Les tissus imperméables et respirants font partie des intempéries
                 tissus qui protègent le porteur sans gêner sa
                 efficacité. Les vêtements fabriqués à partir de ces tissus empêchent l'eau de
                 entrer et mouiller le corps mais permettre le passage de l'air et
                 humidité. Le passage de la vapeur d'eau du vêtement le rend
                 respirant et donc confortable et c'est l'un des plus
                 attributs essentiels qu'un vêtement doit posséder [10].
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Diverses techniques peuvent être utilisées pour produire des vêtements imperméables et respirants.
                 tissus. L'un des procédés connus pour obtenir
                 tissus imper-respirants est une méthode pad-dry-cure sur le
                 support textile. L'incorporation d'agents hydrophobes le long
                 avec des agents hydrophiles aide à l'équilibre des composants
                 et conduit à de meilleures propriétés respirantes imperméables avec
                 autres performances. Cette étude fournira une préparation et une
                 évaluation du tissu en coton à finition imperméable et respirante par
                 en utilisant rGO et PUA.
              </p>
              <h3>Procédure expérimentale</h3>
              <h5>Matériels et méthodes</h5>
              {/* <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={LinenFabric} alt="" /> </div> 
                      <h5>
                      3. Khaki</h5> */}
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             Une épaisseur moyenne (z) 1 - 4nm, dimension latérale (X&Y) 5-10
                 µm, nombre de couches 1 à 3, surface de 220 m2/g, pureté > 99 %
                 réduire l'oxyde de graphène (rGO) a été acheté chez Ad-Nano
                 Technologies Private Limited, Inde. Le liant polyuréthane a été
                 fourni par Balaji Chemicals, Inde. Coton lavé et blanchi
                 tissu tissé (200 GSM) fourni par Swadeshi Bleaching and
                 Teinture Mills Pvt. Ltd, Inde, et de l'eau distillée a été utilisée dans
                 la préparation de toutes les solutions.
              </p>
              <h5>Préparation du tissu imperméable respirant</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              30 ml d'eau distillée ont été ajoutés avec 0,5 g de poudre de rGO et
                 conservés dans un appareil à ultrasons pendant 60 min à température ambiante pendant
                 obtenir une solution aqueuse dispersée de rGO. solution dispersée rGO
                 ajouté goutte à goutte dans le liant PUA sous agitateur magnétique (500 rpm)
                 à température ambiante.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig2} alt="" />{" "}
              </div>
              {/* <h5>
4. Terry-Rayon</h5> */}
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Le tissu a été rembourré avec un mélange rGO/PUA à une pression de 3 kg/cm2
                 puis séché à 110oC pendant 3 min suivi d'un durcissement à 150oC pendant 5
                 min dans un centre de laboratoire.
              </p>
              <h3>Appareillage & technique de caractérisation</h3>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              La morphologie de surface et l'analyse de la composition du rGO
                 matériau en couche mince ont été réalisées à l'aide d'un balayage électronique
                 microscope (SEM; 6510LA) avec rayons X à dispersion d'énergie
                 installation de spectroscopie (JOEL EDS System) qui lui est rattachée, Fourier-
                 transformer l'infrarouge (FTIR) avec une gamme de nombres d'onde de 500-4000cm-1,
                 Diffraction des rayons X (DRX) avec un rayon X AI KR monochromatisé
                 source à un temps d'arrêt constant de 100 ms et une énergie de passage de
                 40eV. La résistance à la traction a été analysée à l'aide du testeur de traction MTS
                 (Logiciel - MTS Test fonctionne, la distance entre les mâchoires - 6 pouces,
                 vitesse de la mâchoire – 12 pouces/min, largeur – 1 pouce).
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Un testeur de rigidité Taber a été utilisé pour effectuer le test avec ASTM
                 méthode standard D 5342-97 (méthode ASTM D5342). Une électronique
                 testeur d'épaisseur, "Elektrophysik - MiniTest 600B" avec un
                 plaque standard de 526 µm ± 1%, a été utilisée pour connaître l'épaisseur
                 du tissu enduit.
              </p>
              <h3>Résultats et discussions</h3>
              <h5>Morphologie du matériau rGO</h5>
              {/* <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={terry} alt="" /> </div>  */}
              {/* <h5>
                      5. Seersucker</h5> */}
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              La caractérisation morphologique du matériau rGO a été
                 illustré à la fig. 3. Les fig. 3a et 3c illustrent quelle couche par
                 les bords de la couche de graphène sont observés et la feuille plate a des côtés
                 dimensions de l'ordre de 5-10µm. Il est également représenté sur la fig. 3d
                 matériau de graphène entièrement exfolié, un peu de froissement sur rGO est
                 détecté en raison de son épaisseur atomique dans la gamme 1-4 nm.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               De plus, la XRD a été analysée pour identifier le cristallin
                 région de rGO, dans laquelle à 2 se situait entre 10-15 et le potier
                 l'angle aigu 2 était de 11,40 de l'oxyde de graphène réduit montré dans
                 fig 4. Le pic du graphite a été observé à 26,40 [11]. Dans
                 De plus, le FTIR du rGO a également été présenté fig 5, qui
                 se composait de cinq composants différents chimiquement déplacés qui
                 pourrait être déconvolué en groupes OH (3400 cm-1), C=O (1740
                 cm-1), pic de déformation OH (1420 cm-1), C-OH (1220 cm-1), C-O
                 (1050 cm-1) et 1620 cm-1 affectés à la vibration des absorbants
                 molécules d'eau.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig3} alt="" />{" "}
              </div>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig4} alt="" />{" "}
              </div>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig5} alt="" />{" "}
              </div>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
         Divers tests ont été effectués pour déterminer la meilleure
                 combinaison pour revêtement imper-respirant. Chaque résultat était
                 analysés et discutés en détail.
              </p>
              {/* <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={silkfabrics} alt="" /> </div>  */}
              <h5>Essai de pulvérisation</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Le test de pulvérisation détermine la résistance à l'eau du produit traité
                 et tissus non traités en utilisant la méthode de test AATCC 22 (1996). figue
                 6 ont montré des évaluations de test de pulvérisation standard.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig6} alt="" />{" "}
              </div>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Les notes des tests de pulvérisation sont affichées à la Fig. 7. Dans 80 – 20, le rapport
                 échantillons traités a obtenu une meilleure cote de résistance à l'eau de
                 environ 90, par rapport aux ratios 50 -50 et 60 - 40 traités
                 échantillons. Dans un échantillon enrobé dans un rapport de 80 à 20, les gouttelettes d'eau peuvent
                 être vu sur la surface du tissu qui indiquait imperméable
                 propriété (Fig 8a) et l'échantillon de tissu non traité a été complètement
                 humide sur les deux surfaces (Fig 8b).
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             Selon le tableau des cotes de pulvérisation, le rapport 80-20 du
                 L'échantillon rGO/PUA a obtenu la note la plus élevée de 90 et cette note
                 implique qu'il y a eu "un léger collage ou mouillage aléatoire de
                 surface supérieure". Il a été observé que parmi ces trois
                 échantillons, l'échantillon de 80% rGO et 20% PUA a montré un maximum
                 résistance à l'eau et très léger mouillage de la surface. Il
                 peut être noté que comme la quantité de PUA a été abaissée, l'eau
                 la résistance a été augmentée.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig7} alt="" />{" "}
              </div>
              <h5>Test d'angle de contact</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              La mesure de l'angle de contact aide à déduire la mouillabilité de
                 la surface. Plus l'angle entre la surface et l'eau est élevé
                 gouttelette, plus la résistance à l'eau est élevée et plus la
                 mouillabilité.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig9} alt="" />{" "}
              </div>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Il a été observé que le rapport 80-20 de l'échantillon présentait le taux le plus élevé
                 angle de contact 87.2o avec la goutte d'eau. Angle de contact inférieur
                 des valeurs ont été trouvées dans le cas du rapport 50-50 qui était de 73,3o. Dans
                 le cas d'un tissu non enduit, la goutte d'eau s'infiltrerait dans
                 le tissu en 2-3 secondes.
              </p>
              <h5>Résistance à la traction</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               L'essai de résistance à la traction est effectué pour évaluer la
                 propriétés mécaniques du tissu. Pendant le processus de revêtement,
                 le tissu peut subir des changements dans ses propriétés physiques en raison
                 à la tension et à l'étirement. Parfois, la résistance à la traction du
                 le tissu peut être réduit en raison du processus de revêtement. D'où ce
                 test garantit qu'aucun changement indésirable ne s'est produit dans le
                 résistance du tissu due au processus d'enduction. La traction
                 la force a été réalisée dans les deux sens : chaîne et trame.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig10} alt="" />{" "}
              </div>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig11} alt="" />{" "}
              </div>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             D'après les résultats ci-dessus, il a été observé que la traction
                 la résistance a augmenté dans les deux sens après que le revêtement a été
                 appliqué. L'augmentation maximale de la résistance moyenne à la traction dans
                 la direction de la chaîne et de la trame a été observée dans l'échantillon avec 80-20
                 Composition rGO/PUV. Comme la couche a été appliquée à l'aide de PUA qui
                 a également travaillé comme liant conféré à la résistance à la traction du
                 tissu.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
                Tout en réduisant la concentration de PUA, la force a augmenté
                 cela peut être dû aux particules rGO qui sont connues pour avoir
                 résistance mécanique plus élevée. Comme la concentration de rGO
                 augmenté, il a amélioré indirectement la résistance du pelage
                 résultant en une plus grande résistance à la traction.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Les particules rGO peuvent avoir agi comme renfort de particules dans
                 le PUA tout en améliorant directement les caractéristiques de traction
                 le PUA, ce qui se voit dans les résultats obtenus.
              </p>
              <h5>Essai d'épaisseur</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Le test d'épaisseur a été effectué pour évaluer si un
                 l'application d'un revêtement a ajouté une épaisseur indésirable au
                 tissu.
              </p>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
        Dans le cas du tissu non traité, l'épaisseur moyenne était
                 calculé comme 287µm. L'échantillon composé de 50% GO et 50% PUA
                 a l'épaisseur moyenne la plus faible, égale à 313,5 µm. En outre,
                 l'épaisseur la plus élevée s'est avérée être de 3303,5 µm dans rGO/PUA qui
                 se compose de 80 % de GO et de 20 % de PUA. Valeurs inférieures de la norme
                 écart peut être interprété comme moins de différence entre le
                 lectures, ce qui signifie dans ce cas plus de régularité dans le revêtement.
                 Dans le cas de l'échantillon 1, qui a l'épaisseur moyenne la plus faible,
                 Une épaisseur de 313,5 pm a été ajoutée au tissu en raison du revêtement.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
            En effet, il contient la plus grande quantité de PUA, qui est
                 plus fluide que la résine d'oxyde de graphène. Il a été observé lors
                 préparation que la solution était difficile à émulsionner en raison de
                 la grande quantité de PUA. La solution était instable et avait une forte
                 fluidité. Pendant l'enduction, la solution s'est infiltrée à travers le tissu
                 plutôt que de se déposer en surface. De ce fait, il y a
                 était une perte de la solution et donc l'épaisseur était plus faible.
                 La quantité maximale d'ajout d'épaisseur peut être vue dans le
                 échantillon avec 80-20% GO/PUA, ayant une épaisseur moyenne de 330,5 µm.
                 Cependant, l'écart-type, dans ce cas, est très élevé,
                 ce qui implique un revêtement irrégulier.
              </p>
              <h5>Conclusion</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
           D'après les résultats ci-dessus, il ressort que la production de
                 tissu en coton avec imperméable à l'eau avec la propriété respirante comme
                 possible grâce à rGO tandis que PUV agit comme une nucléation entre le
                 tissu en coton et rGO. Les combinaisons optimales qui ont donné le
                 meilleures performances en termes de propriétés imperméables et
                 la respirabilité sont des échantillons avec 80-20% de rGO-PUA. Ces
                 des combinaisons peuvent être utilisées pour créer des vêtements de sport qui peuvent être portés
                 dans des conditions difficiles ainsi que pour les vêtements d'usure régulière. Basé
                 sur le résultat du test standard des tests d'étanchéité montre que
                 augmenter la concentration de rGO donne un meilleur résultat avec
                 propriété de confort, d'où la concentration du bien faire
                 le tissu imperméable et respirant était composé à 80 % de rGO et à 20 % de PUA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
