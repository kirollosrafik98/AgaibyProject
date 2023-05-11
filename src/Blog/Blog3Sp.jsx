import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import firstBlog from "../images/blog3.jpg";
import cotton from "../images/CottonShirts.jpg";
import LinenFabric from "../images/LinenFabric.jpg";
import terry from "../images/terry rayon fabric.jpg";
import silkfabrics from "../images/silk fabrics.jpg";
import Chambrayfabrics from "../images/Chambray.JPG";

export default function Blog3Sp() {
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
                fontSize: "60px",
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
              10 telas para usar en verano para combatir el calor
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
              Oh, verano, la estación del sudor y del calor! Elegir el perfecto
                 telas para el verano para usar durante este tiempo es crucial para
                 manteniéndose cómodo. Tejidos naturales como algodón, lino y
                 la seda son algunas opciones entre muchas para el verano. Estos tejidos son
                 transpirable y ligero. Tejidos sintéticos como poliéster y
                 el nailon puede atrapar el calor y causar molestias. Telas de colores claros
                 también son preferibles ya que reflejan el calor y lo mantienen fresco. Entonces,
                 Cambiemos esa pesada ropa de invierno por algo de algodón fresco.
                 y disfruta del verano!
              </p>
              <h5>Las 10 mejores telas de verano para usar en verano</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             El verano es la temporada para usar telas transpirables que te mantengan
                 fresco y cómodo. Aquí están las 10 mejores telas ligeras
                 para el verano que todo hombre debe tener en cuenta para su verano
                 armario.
              </p>
              <h5>1. Algodón</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
            El algodón es una de las mejores telas versátiles y muy populares para el verano.
                 tener puesto. Las propiedades del algodón definen que es un producto natural
                 tejido transpirable, ligero y que absorbe la humedad,
                 por lo que es una opción ideal para climas cálidos y húmedos.{" "}
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
           Está disponible en varios estilos, como Oxford, cambray y
                 popelín, y es perfecto para ropa casual y formal. Ejemplos
                 incluyen camisetas de algodón, polos y camisas de vestir. Es
                 durabilidad y fácil cuidado lo convierten en una opción rentable para
                 tu armario de verano.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={cotton} alt="" />{" "}
              </div>
              <h5>2. Lino</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              El lino es un tejido natural elaborado a partir de fibras de lino, conocido por su
                 transpirabilidad y textura ligera, lo que lo convierte en el mejor
                 tela para usar en climas cálidos. Es muy absorbente, lo que ayuda
                 para evacuar el sudor, y su textura natural aporta un aspecto relajado,
                 vista casual.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             Está disponible en varios estilos, como tela de lino puro
                 camisas, pantalones y shorts, por lo que es una opción ideal para cualquier
                 traje de verano Las arrugas y pliegues naturales de la tela le dan
                 carácter, y su durabilidad es una inversión rentable para el
                 estación.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={LinenFabric} alt="" />{" "}
              </div>
              <h5>3. Caqui</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
            El caqui es un tejido transpirable duradero y adaptable para el calor.
                 desgaste del tiempo Está hecho de una mezcla de algodón y sintético.
                 fibras, haciéndola transpirable y ligera. Caqui hace un
                 declaración de estilo con pantalones chinos, shorts y blazers, haciéndolo
                 la elección adecuada para eventos informales y semiformales.{" "}
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Su color neutro hace que sea fácil de combinar con otras prendas.
                 artículos, y su durabilidad asegura que dure varias temporadas.
                 El caqui también es fácil de cuidar, lo que lo convierte en una opción práctica para
                 cualquier armario de verano.
              </p>
              <h5>4. Terry-Rayón</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Terry-rayon es un tejido suave, transpirable y que absorbe la humedad.
                 para ropa de verano. Es una mezcla de rizo de algodón y rayón, que
                 le da una textura y un brillo únicos.{" "}
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Terry-rayon está disponible en varios diseños, como camisetas,
                 polos y pantalones cortos, lo que lo hace perfecto para salidas informales.
                 Es resistente a las arrugas y fácil de cuidar y es ideal para
                 viajar. Su textura ligera y cómoda asegura que te quedes
                 fresco y elegante en el calor del verano.
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
             Seersucker es algodón fruncido y tejidos ligeros para el verano
                 tener puesto. Su textura distintiva permite que el aire circule, haciéndolo
                 altamente transpirable y cómodo. Seersucker está disponible en
                 varios estilos, como camisas abotonadas, blazers y pantalones cortos,
                 haciéndolo versátil para eventos casuales y formales. Es único
                 la textura y los patrones también agregan carácter a cualquier atuendo.
                 Seersucker es fácil de cuidar y su durabilidad garantiza que
                 dura muchas temporadas.
              </p>
              <h5>6. Seda</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               La seda es lujosa y transpirable y una de las mejores telas para
                 verano. Sus fibras naturales permiten que el aire circule, manteniéndote
                 fresco y cómodo. La seda está de moda, como las camisas de vestir,
                 corbatas y pañuelos de bolsillo, haciéndolo apto para ocasiones formales.
                 Su textura suave y su brillo natural añaden un toque de elegancia a
                 cualquier atuendo La seda también es fácil de cuidar y duradera, por lo que es
                 una inversión que vale la pena para cualquier guardarropa de verano.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={silkfabrics} alt="" />{" "}
              </div>
              <h5>7. Cambray</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
            Chambray es un tejido ligero y transpirable. es un algodon
                 mezcla y tiene una textura única similar a la mezclilla. Chambray es
                 elegante y se puede combinar con camisas abotonadas, pantalones cortos y
                 chaquetas, haciéndolo versátil para cualquier casual o semi-formal
                 evento. Su durabilidad asegura que dure varias temporadas, y su
                 la textura única agrega carácter a cualquier atuendo. Chambray es fácil de
                 cuidado, por lo que es la mejor tela para un guardarropa de clima cálido.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={Chambrayfabrics} alt="" />{" "}
              </div>
              <h5>8. Viscosa</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
            La viscosa es un tejido ligero y transpirable para climas cálidos.
                 Está hecho de fibras naturales, lo que lo hace altamente absorbente y
                 cómodo. Puedes combinar la viscosa con camisetas, polos,
                 y shorts para salidas casuales. Su textura suave y natural
                 drapeado le dan un aspecto elegante y lujoso. La viscosa es fácil de
                 cuidados y duraderos para que tu armario deslumbre con estilo.
              </p>
              <h5>9. Gasa</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
            La gasa es un tejido ligero y transparente. Está hecho de seda,
                 poliéster, o ambos. El material es muy transpirable y
                 cómodo. La gasa se puede hacer a medida para camisas con botones,
                 camisas de vestir y bufandas, haciéndolo versátil para cualquier ocasión.
                 Su textura delicada y su caída fluida le dan un aire romántico y
                 mirada femenina La gasa es fácil de cuidar, por lo que es práctica.
                 telas para armarios de verano.
              </p>
              <h5>10. Franela</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               La franela es un material versátil y cómodo. es suave y
                 respirable.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             Las camisas de franela son un estilo clásico perfecto para un estilo casual.
                 mirar. Algunos beneficios de la franela incluyen su durabilidad y facilidad
                 de cuidado. Ejemplos de estilos de franela incluyen cuadros y
                 camisas de colores sólidos, chaquetas con forro de franela y pantalones.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               La franela es una declaración de estilo para los hombres que buscan comodidad,
                 tejidos elegantes y ligeros para la temporada de verano.
              </p>
              <h5>Cómo seleccionar la mejor tela de verano para usar?</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Estos son algunos consejos para seleccionar las mejores telas para el verano para
                 tener puesto:
              </p>
              <ul className="dot-list">
                <li>
                Busque telas ligeras y transpirables como el algodón,
                   lino y rayón.
                </li>
                <li>
                Elija telas que tengan propiedades que absorban la humedad, como
                   mezclas de bambú o poliéster.
                </li>
                <li>Evite las telas pesadas y gruesas como la lana y la mezclilla.</li>
                <li>
                Ten en cuenta el color de la tela. Los colores más claros reflejan el calor, mientras que
                   los colores más oscuros lo absorben.
                </li>
                <li>
                Compruebe el tejido de la tela. Los tejidos más sueltos permiten más flujo de aire.
                   y transpirabilidad.
                </li>
                <li>
                Lea las instrucciones de cuidado para asegurarse de que la tela sea fácil de
                   cuidado y no se encogerá con el lavado.
                </li>
                <li>
                Considere la actividad que realizará mientras usa el
                   tela. Algunas telas son más adecuadas para ciertas actividades
                   que otros.
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
            Puedes seleccionar las mejores telas de verano para tu guardarropa. Permanecer
                 cómodo durante los meses calurosos con los consejos anteriores en mente.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Elegir telas transpirables para clima cálido es crucial para
                 permanecer cómodo y tranquilo. Tejidos como algodón, lino y
                 el rayón son excelentes opciones ya que permiten que el aire circule y
                 el sudor se evapore rápidamente. Con las elecciones correctas de ropa, uno
                 puede disfrutar de los meses de verano sin sentirse empantanado por el calor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
