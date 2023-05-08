import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import firstBlog from "../images/blog3.jpg";
import cotton from "../images/CottonShirts.jpg";
import LinenFabric from "../images/LinenFabric.jpg";
import terry from "../images/terry rayon fabric.jpg";
import silkfabrics from "../images/silk fabrics.jpg";
import Chambrayfabrics from "../images/Chambray.JPG";

export default function Blog3Fr() {
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
              10 tissus à porter en été pour combattre la chaleur
              </h1>
            </div>
            <div className="col-md-8">
              {/* <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The necessity of innovation in Bangladesh’s textile and apparel industry is felt even more badly amid the current phase of difficult times while the industry is observing acute energy and gas price hikes, the Russia-Ukraine war, global inflation, order shortage, etc.</p> */}

              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={firstBlog} alt="" />{" "}
              </div>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
                Oh, l'été, la saison de la sueur et de la chaleur ! Choisir le parfait
                 tissus pour l'été à porter pendant cette période est crucial pour
                 rester à l'aise. Les tissus naturels comme le coton, le lin et
                 la soie est un choix parmi tant d'autres pour l'été. Ces tissus sont
                 respirant et léger. Les tissus synthétiques comme le polyester et
                 le nylon peut emprisonner la chaleur et causer de l'inconfort. Tissus clairs
                 sont également préférables car ils réfléchissent la chaleur et vous gardent au frais. Donc,
                 échangeons ces lourds vêtements d'hiver contre du coton frais
                 et profitez de l'été !
              </p>
              <h5>Top 10 des tissus d'été à porter en été</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             L'été est la saison pour porter des tissus respirants qui vous gardent
                 frais et confortable. Voici le top 10 des tissus légers
                 pour l'été que chaque homme devrait considérer pour son été
                 garde-robe.
              </p>
              <h5>1. Coton</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
            Le coton est un meilleur tissu polyvalent et très populaire pour l'été
                 porter. Les propriétés du coton définissent qu'il s'agit d'un produit naturel
                 tissu respirant, léger et absorbant l'humidité,
                 ce qui en fait un choix idéal par temps chaud et humide.{" "}
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
           Il est disponible dans différents styles, tels que Oxford, chambray et
                 popeline, et est parfait pour les tenues décontractées et formelles. Exemples
                 comprennent des t-shirts en coton, des polos et des chemises habillées. C'est
                 la durabilité et la facilité d'entretien en font une option rentable pour
                 votre garde-robe d'été.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={cotton} alt="" />{" "}
              </div>
              <h5>2. Lin</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
                Le lin est un tissu naturel fabriqué à partir de fibres de lin, connu pour sa
                 respirabilité et texture légère, ce qui en fait le meilleur
                 tissu pour porter par temps chaud. Il est très absorbant, ce qui aide
                 pour évacuer la transpiration, et sa texture naturelle donne un effet détendu,
                 look décontracté.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             Il est disponible dans différents styles, tels que le tissu en lin pur
                 chemises, pantalons et shorts, ce qui en fait un choix idéal pour tout
                 tenue d'été. Les rides et plis naturels du tissu lui confèrent
                 caractère, et sa pérennité est un investissement rentable pour
                 saison.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={LinenFabric} alt="" />{" "}
              </div>
              <h5>3. Kaki</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             Le kaki est un tissu respirant durable et adaptable pour les
                 usure météorologique. Il est fabriqué à partir d'un mélange de coton et de synthétique
                 fibres, ce qui le rend respirant et léger. Kaki fait un
                 déclaration de style avec des pantalons chino, des shorts et des blazers, ce qui en fait
                 le bon choix pour les événements décontractés et semi-formels.{" "}
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Sa couleur neutre le rend facile à associer avec d'autres vêtements
                 articles, et sa durabilité assure qu'il dure plusieurs saisons.
                 Le kaki est également facile d'entretien, ce qui en fait un choix pratique pour
                 n'importe quelle garde-robe d'été.
              </p>
              <h5>4. Terry-Rayonne</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
                Terry-rayon est un tissu doux, respirant et qui évacue l'humidité
                 pour les vêtements d'été. C'est un mélange de coton éponge et de rayonne, qui
                 lui donne une texture et un éclat uniques.{" "}
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Terry-rayon est disponible en différents modèles, tels que des T-shirts,
                 polos et shorts, ce qui le rend parfait pour les sorties décontractées.
                 Il est infroissable et facile d'entretien et est idéal pour
                 voyage. Sa texture légère et confortable vous assure de rester
                 cool et élégant dans la chaleur de l'été.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={terry} alt="" />{" "}
              </div>
              <h5>5. Seersucker</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Seersucker est un coton plissé et des tissus légers pour l'été
                 porter. Sa texture distinctive permet à l'air de circuler, ce qui le rend
                 très respirant et confortable. Seersucker est disponible en
                 divers styles, tels que des chemises boutonnées, des blazers et des shorts,
                 ce qui le rend polyvalent pour les événements décontractés et formels. Son unique
                 la texture et les motifs ajoutent également du caractère à n'importe quelle tenue.
                 Le seersucker est facile d'entretien et sa durabilité lui assure
                 dure plusieurs saisons.
              </p>
              <h5>6. Soie</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              La soie est luxueuse et respirante et l'un des meilleurs tissus pour
                 été. Ses fibres naturelles permettent à l'air de circuler, vous gardant
                 frais et confortable. La soie est à la mode, comme les chemises habillées,
                 cravates et pochettes de costume, ce qui le rend idéal pour les occasions formelles.
                 Sa texture lisse et son éclat naturel ajoutent une touche d'élégance à
                 n'importe quelle tenue. La soie est également facile d'entretien et durable, ce qui la rend
                 un investissement rentable pour toute garde-robe d'été.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={silkfabrics} alt="" />{" "}
              </div>
              <h5>7. Chambray</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Le chambray est un tissu léger et respirant. C'est un coton
                 mélange et a une texture unique semblable au denim. Chambray est
                 chic et peut être porté comme des chemises boutonnées, des shorts et
                 vestes, ce qui le rend polyvalent pour tout décontracté ou semi-formel
                 événement. Sa durabilité assure qu'il dure plusieurs saisons, et son
                 texture unique ajoute du caractère à n'importe quelle tenue. Chambray est facile à
                 soin, ce qui en fait le meilleur tissu pour une garde-robe par temps chaud.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={Chambrayfabrics} alt="" />{" "}
              </div>
              <h5>8. Viscose</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               La viscose est un tissu léger et respirant pour les temps chauds.
                 Il est fabriqué à partir de fibres naturelles, ce qui le rend très absorbant et
                 confortable. Vous pouvez associer la Viscose avec des T-shirts, polos,
                 et des shorts pour les sorties décontractées. Sa texture lisse et naturelle
                 le drapé lui donne un aspect élégant et luxueux. La viscose est facile à
                 soigné et durable pour faire briller votre garde-robe avec style.
              </p>
              <h5>9. Mousseline de soie</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
            La mousseline est un tissu léger et transparent. Il est fait de soie,
                 polyester, ou les deux. Le matériau est hautement respirant et
                 confortable. La mousseline peut être adaptée aux chemises boutonnées,
                 chemises habillées et foulards, ce qui le rend polyvalent pour toutes les occasions.
                 Sa texture délicate et son drapé fluide lui confèrent une allure romantique et
                 allure féminine. La mousseline est facile d'entretien, ce qui la rend pratique
                 tissus pour placards d'été.
              </p>
              <h5>10. Flanelle</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              La flanelle est une matière polyvalente et confortable. C'est doux et
                 respirant.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Les chemises en flanelle sont un style classique parfait pour une tenue décontractée.
                 regarder. Certains avantages de la flanelle incluent sa durabilité et sa facilité
                 de soins. Des exemples de styles de flanelle comprennent le plaid et
                 chemises unies, vestes doublées de flanelle et pantalons.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
                La flanelle est une déclaration de style pour les hommes qui veulent du confort,
                 tissus élégants et légers pour la saison estivale.
              </p>
              <h5>Comment sélectionner le meilleur tissu d'été à porter ?</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
                Voici quelques conseils pour sélectionner les meilleurs tissus pour l'été
                 porter:
              </p>
              <ul className="dot-list">
                <li>
                Recherchez des tissus légers et respirants comme le coton,
                   lin et rayonne.
                </li>
                <li>
                Choisissez des tissus qui évacuent l'humidité tels que
                   mélanges de bambou ou de polyester.
                </li>
                <li>Évitez les tissus lourds et épais comme la laine et le denim.</li>
                <li>
                Tenez compte de la couleur du tissu. Les couleurs plus claires reflètent la chaleur, tandis que
                   les couleurs plus foncées l'absorbent.
                </li>
                <li>
                Vérifiez le tissage du tissu. Les tissages plus lâches permettent une meilleure circulation de l'air
                   et respirabilité.
                </li>
                <li>
                Lisez les instructions d'entretien pour vous assurer que le tissu est facile à
                   entretient et ne rétrécit pas au lavage.
                </li>
                <li>
                Tenez compte de l'activité que vous ferez en portant le
                   tissu. Certains tissus sont mieux adaptés à certaines activités
                   que d'autres.
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
               Vous pouvez sélectionner les meilleurs tissus d'été pour votre garde-robe. Rester
                 confortable pendant les mois chauds avec les conseils ci-dessus à l'esprit.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             Choisir des tissus respirants par temps chaud est crucial pour
                 rester confortable et calme. Des tissus comme le coton, le lin et
                 la rayonne sont d'excellentes options car elles permettent à l'air de circuler et
                 la sueur s'évapore rapidement. Avec les bons choix de vêtements, un
                 peut profiter des mois d'été sans se sentir embourbé par la chaleur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
