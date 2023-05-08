import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import firstBlog from "../images/STTI.jpg";

export default function Blog6Sp() {
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
              La coalición STTI da la bienvenida a las prácticas de compra mejoradas por parte de BRM              </h1>
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
              La Iniciativa de Términos de Comercio Sustentables (STTI, por sus siglas en inglés), que es una
                 coalición de fabricantes de prendas de vestir ha acogido con satisfacción la nueva actualización
                 a Higg Brand & Retail Module (BRM) como un "primer paso útil"
                 pero dice que se necesitan más esfuerzos.
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
         Se instituyó la Iniciativa de Términos de Comercio Sostenibles (STTI)
                 por fabricantes de nueve países en 2021 para detallar el
                 prácticas esperadas de las marcas y minoristas que compran sus
                 productos STTI solicitó al Higg BRM una actualización de su
                 prácticas de compra. La solicitud iba acompañada de una revisión
                 cuestionario al respecto.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               El STTI en un comunicado valoró la nueva versión de Higg BRM
                 describiéndolo como un "primer paso útil", sin embargo, dijo más
                 mejoras de las preguntas de práctica de compra serían
                 necesario. Elaborando su punto, el STTI desea que el BRM
                 incorporar una mayor parte de sus preguntas sobre compras
                 prácticas que reflejan la importancia de los derechos sociales y
                 condiciones ambientales en la cadena de suministro de prendas de vestir.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
          El vocero de STTI, Miran Ali, valoró que el SAC haya sido
                 receptivo a sus recomendaciones y a la definición de BRM de buena
                 prácticas de compra reflejaban claramente la preocupación por los derechos sociales y
                 cuestiones ambientales. Las prácticas de compra revisadas resultantes
                 conjunto de preguntas dentro de la evaluación Higg Brand & Retail que
                 agregado es definitivamente un paso en la dirección correcta en la búsqueda
                 para la necesaria mejora de las prácticas de compra.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
       Funcionarios del STTI aclararon que juzgará el éxito de la
                 nuevas prácticas de compra de BRM preguntas sobre cómo ver el
                 mejora del cumplimiento comercial de sus usuarios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
