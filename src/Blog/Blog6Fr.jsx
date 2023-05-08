import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import firstBlog from "../images/STTI.jpg";

export default function Blog6Fr() {
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
              La coalition STTI salue l'amélioration des pratiques d'achat par le BRM
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
               La Sustainable Terms of Trade Initiative (STTI) qui est un
                 coalition de fabricants de vêtements a salué la nouvelle mise à jour
                 au Higg Brand & Retail Module (BRM) comme une "première étape utile"
                 mais dit que plus d'efforts sont nécessaires.
              </p>

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
               La Sustainable Terms of Trade Initiative (STTI) a été instituée
                 par les fabricants de neuf pays en 2021 pour préciser le
                 pratiques attendues des marques et des distributeurs qui achètent leurs
                 des produits. Le Higg BRM a été sollicité par STTI pour faire le point sur son
                 pratiques d'achat. La demande était accompagnée d'une version révisée
                 questionnaire à cet égard.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
            La STTI dans un communiqué a apprécié la nouvelle version de Higg BRM
                 le décrivant comme une "première étape utile", cependant, il en dit plus
                 des améliorations des questions sur les pratiques d'achat seraient
                 nécessaire. Précisant son propos, le STTI souhaite que le BRM
                 intégrer une plus grande partie de ses questions sur les achats
                 des pratiques qui reflètent l'importance des
                 conditions environnementales dans la chaîne d'approvisionnement de l'habillement.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Le porte-parole du STTI, Miran Ali, a apprécié que le SAC ait été
                 réceptif à ses recommandations et à la définition du bien de BRM
                 les pratiques d'achat traduisaient bien la préoccupation sociale et
                 problèmes environnementaux. Les pratiques d'achat révisées qui en découlent
                 ensemble de questions dans le cadre de l'évaluation Higg Brand & Retail, il
                 ajouté est définitivement un pas dans la bonne direction dans la quête
                 pour l'amélioration nécessaire des pratiques d'achat.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Les responsables du STTI ont précisé qu'il jugera du succès de la
                 nouvelles pratiques d'achat BRM questions sur la visualisation de la réalité
                 amélioration de la conformité commerciale de ses utilisateurs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
