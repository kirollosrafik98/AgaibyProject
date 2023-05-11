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

export default function Blog10Sp() {
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
              Estudio de aplicación de Óxido de Grafeno reducido sobre tejido de algodón
                 para acabado Transpirable Impermeable
              </h1>
            </div>
            <div className="col-md-8">
              {/* <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The necessity of innovation in Bangladesh’s textile and apparel industry is felt even more badly amid the current phase of difficult times while the industry is observing acute energy and gas price hikes, the Russia-Ukraine war, global inflation, order shortage, etc.</p> */}
              {/*                       
                      <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={firstBlog} alt="" /> </div>  */}
              {/* <p  style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>Oh, summer, the season of sweat and heat! Choosing the perfect fabrics for summer to wear during this time is crucial for staying comfortable. Natural fabrics like cotton, linen, and silk are a few choices out of many for summer. These fabrics are breathable and lightweight. Synthetic fabrics like polyester and nylon can trap heat and cause discomfort. Light-coloured fabrics are also preferable as they reflect heat and keep you cool. So, let's swap out those heavy winter clothes for some breezy cotton and enjoy the summer!</p> */}
              <h5>Abstracta</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             En este estudio, se eligió una tela tejida 100% algodón para
                 investigar los efectos de los acabados impermeables con
                 transpirabilidad mediante el uso de óxido de grafeno reducido (rGO) y
                 ligante de poliuretano (PUA). Los efectos de la impermeabilización del
                 las telas se midieron de acuerdo con AATCC 22 (1996) spray
                 ensayo y método del ángulo de contacto. Evalúa las propiedades físicas.
                 (resistencia a la tracción, prueba de rigidez, prueba de espesor) de impermeable
                 la tela terminada se evaluó utilizando las técnicas británicas pertinentes
                 Estándares, normas ASTM y normas ISO. El tiempo de humectación de la
                 las telas también se midieron antes y después de las muestras tratadas para
                 evaluar el desempeño y la durabilidad del acabado.
              </p>
              <h5>Introducción</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
                El inicio del siglo XXI ha marcado grandes desarrollos en
                 tecnología y ciencia. Sin embargo, estos desarrollos han venido
                 con un precio, uno de los cuales es el calentamiento global agravado,
                 a los cambios climáticos repentinos. Para sobrevivir y estar protegido
                 en tales condiciones, existe la necesidad de ropa adecuada y
                 ropa de trabajo para personas que trabajan específicamente en exteriores
                 entornos.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               El estudio del grafeno ha sido uno de los temas más apasionantes
                 en la ciencia de los materiales y muchos otros campos de investigación desde la
                 primer informe de la preparación y aislamiento de grafeno único
                 capas en 2004. Los materiales funcionales textiles flexibles han
                 recientemente atrajo la atención por su antibacteriano [1, 4,
                 6], Protección UV [2], Impermeable con propiedades transpirables
                 [5], conductividad eléctrica [8], conductividad térmica [7] y
                 así sucesivamente [3].
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
          El grafeno ha ganado recientemente un gran interés debido a su
                 Excelentes características mecánicas, térmicas, ópticas y electrónicas.
                 propiedades. El óxido grafítico es una materia prima a partir de la cual
                 el grafeno se exfolia (fig. 1). El grafeno es bidimensional
                 lámina constituida por átomos de carbono y creando un hexágono
                 celosía ordenada. El óxido de grafeno (GO) es una hoja de grafeno con
                 grupos carboxílicos en sus bordes y fenol hidroxilo y epóxido
                 grupos en su plano basal. Eliminación de grupos funcionales en el
                 óxido de grafeno para producir óxido de grafeno reducido (rGO) por
                 tratamiento químico o por recocido térmico.
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
                Fig. 1: Óxido de grafeno (Cortesía de Jianchang Li et.al
                 2014) Las telas impermeables y transpirables están diseñadas con el objetivo
                 de proteger al usuario de las condiciones climáticas como el viento,
                 nieve, además de prevenir la pérdida excesiva de calor corporal [9].
                 Las telas impermeables y transpirables son una de las inclemencias del tiempo.
                 tejidos que protegen al usuario sin obstaculizar su
                 eficiencia. Las prendas hechas con tales telas evitan que el agua
                 penetrando y mojando el cuerpo pero permitiendo el paso del aire y
                 humedad. El paso del vapor de agua de la prenda hace que ésta
                 transpirable y por lo tanto cómodo y es uno de los más
                 atributos esenciales que debe poseer una prenda [10].
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Se pueden utilizar varias técnicas para producir impermeables y transpirables.
                 telas Uno de los métodos conocidos para lograr
                 tejidos impermeables y transpirables es un método pad-dry-cure en el
                 sustrato textil. La incorporación de agentes hidrófobos a lo largo
                 con agentes hidrofílicos ayuda en el equilibrio de los componentes
                 y conduce a mejores propiedades impermeables y transpirables junto con
                 otra actuación. Este estudio proporcionará preparación y una
                 evaluación de tejido de algodón con acabado impermeable y transpirable por
                 utilizando rGO y PUA.
              </p>
              <h3>Procedimiento experimental</h3>
              <h5>Materiales y métodos</h5>
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
              Un espesor promedio (z) 1 – 4nm, dimensión lateral (X&Y) 5-10
                 µm, 1-3 número de capas, 220 m2/g de área superficial, >99 % de pureza
                 reducir el óxido de grafeno (rGO) se adquirió de Ad-Nano
                 Technologies Private Limited, India. El aglutinante de poliuretano fue
                 suministrado por Balaji Chemicals, India. Algodón lavado y blanqueado
                 tela tejida (200 GSM) suministrada por Swadeshi Bleaching and
                 Molinos de teñido SA Ltd, India, y se utilizó agua destilada en
                 la preparación de todas las soluciones.
              </p>
              <h5>Elaboración de tejido impermeable transpirable</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
          Se agregaron 30 ml de agua destilada con 0,5 g de polvo de rGO y
                 mantenido en un ultrasonicador durante 60 min a temperatura ambiente para
                 obtener una solución acuosa dispersa de rGO. solución dispersa rGO
                 añadido gota a gota en el aglutinante PUA bajo agitador magnético (500 rpm)
                 a temperatura ambiente.
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
              El tejido se acolchó con una mezcla de rGO/PUA a una presión de 3 Kg/cm2
                 luego secado a 110oC por 3 min seguido de curado a 150oC por 5
                 min en un centro de laboratorio.
              </p>
              <h3>Aparato y técnica de caracterización</h3>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               La morfología de la superficie y el análisis composicional del rGO
                 material de película delgada se llevaron a cabo utilizando un electrón de barrido
                 microscopio (SEM; 6510LA) con rayos X de dispersión de energía
                 instalación de espectroscopia (Sistema JOEL EDS) adjunto, Fourier-
                 infrarrojo transformado (FTIR) con rango de número de onda de 500-4000 cm-1,
                 Difracción de rayos X (XRD) con rayos X monocromáticos AI KR
                 fuente en un tiempo de permanencia constante de 100 ms y pasar energía de
                 40 eV. La resistencia a la tracción se analizó utilizando MTS Tensile Tester
                 (Software: MTS Test funciona, la distancia entre las mordazas: 6 pulgadas,
                 velocidad de la mordaza: 12 pulgadas/min, ancho: 1 pulgada).
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Se utilizó un probador de rigidez Taber para realizar la prueba con ASTM
                 método estándar D 5342-97 (método ASTM D5342). un electronico
                 probador de espesor, "Elektrophysik - MiniTest 600B" con un
                 placa estándar de 526 µm ± 1%, se utilizó para averiguar el espesor
                 del tejido revestido.
              </p>
              <h3>Resultados y discusiones</h3>
              <h5>Morfología del material rGO</h5>
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
               La caracterización morfológica del material rGO fue
                 ilustrado en la figura 3. Las figuras 3a y 3c ilustran qué capa por
                 capa de grafeno se observan bordes y la hoja plana tiene laterales
                 dimensiones del orden de 5-10 µm. También se muestra en la fig. 3d
                 material de grafeno completamente exfoliado, algo de deformación en rGO es
                 detectado debido a su espesor atómico en el rango de 1-4 nm.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
            Además, se analizó la DRX para identificar el cristalino
                 región de rGO, en la que a 2 estaba entre 10-15 y el alfarero
                 ángulo agudo 2 fue 11,40 del óxido de grafeno reducido que se muestra en
                 fig 4. El pico del grafito se observó como 26.40[11]. En
                 Además, también se presentó el FTIR del rGO fig 5, que
                 constaba de cinco componentes diferentes químicamente desplazados que
                 podría descomponerse en grupos OH (3400 cm-1), C=O (1740
                 cm-1), pico de deformación OH (1420 cm-1), C-OH (1220 cm-1), C-O
                 (1050 cm-1) y 1620 cm-1 asignados a la vibración de absorción
                 moléculas de agua.
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
              Se realizaron varias pruebas para determinar el óptimo
                 combinación para revestimiento impermeable y transpirable. Cada resultado fue
                 analizada y discutida en detalle.
              </p>
              {/* <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={silkfabrics} alt="" /> </div>  */}
              <h5>Prueba de pulverización</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               La prueba de pulverización determina la resistencia al agua del producto tratado.
                 y telas no tratadas usando el método de prueba AATCC 22 (1996). Higo
                 6 mostraron clasificaciones de prueba de rociado estándar.
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
             Las calificaciones de la prueba de rociado se muestran en la Fig. 7. En 80 – 20, la relación
                 muestras tratadas se logró una mejor clasificación de resistencia al agua de
                 alrededor de 90, en comparación con 50 -50 y 60 - 40 proporciones tratadas
                 muestras En una muestra recubierta con una proporción de 80 a 20, las gotas de agua pueden
                 ser visto en la superficie de la tela que indica impermeable
                 propiedad (Fig. 8a) y la muestra de tela sin tratar fue completamente
                 húmedo en ambas superficies (Fig. 8b).
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             De acuerdo con la tabla de índices de pulverización, la relación 80-20 de la
                 La muestra rGO/PUA logró la calificación más alta de 90 y esta calificación
                 implica que hubo "un ligero pegado o mojado al azar de
                 superficie superior". Se observó que entre estos tres
                 muestras, la muestra de 80% rGO y 20% PUA mostró máximo
                 resistencia al agua y muy ligera humectación de la superficie. Él
                 se puede notar que a medida que se redujo la cantidad de PUA, el agua
                 se incrementó la resistencia.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig7} alt="" />{" "}
              </div>
              <h5>Prueba de ángulo de contacto</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              La medición del ángulo de contacto ayuda a derivar la humectabilidad de
                 la superficie. Cuanto mayor sea el ángulo entre la superficie y el agua
                 gota, mayor es la resistencia al agua y menor la
                 humectabilidad
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
           Se observó que la relación muestra 80-20 mostró la mayor
                 ángulo de contacto 87.2o con la gota de agua. Ángulo de contacto inferior
                 se encontraron valores en el caso de la relación 50-50 que fue de 73.3o. En
                 el caso de la tela sin recubrir, la gota de agua se filtraría en
                 la tela en 2-3 segundos.
              </p>
              <h5>Resistencia a la tracción</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               La prueba de resistencia a la tracción se realiza para evaluar la
                 Propiedades mecánicas del tejido. Durante el proceso de recubrimiento,
                 el tejido puede sufrir cambios en sus propiedades físicas debido
                 a la tensión y al estiramiento. A veces, la resistencia a la tracción del
                 la tela puede reducirse debido al proceso de recubrimiento. Por lo tanto esto
                 prueba asegura que no ha ocurrido ningún cambio indeseable en el
                 resistencia de la tela debido al proceso de recubrimiento. la tracción
                 Se realizó el reforzamiento en ambos sentidos: urdimbre y trama.
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
              A partir de los resultados anteriores, se observó que la tensión
                 la fuerza aumentó en ambas direcciones después de que el recubrimiento fue
                 aplicado. El aumento máximo en la resistencia a la tracción promedio en
                 dirección de urdimbre y trama se observó en la muestra con 80-20
                 Composición rGO/PUV. Como la capa se aplicó con PUA que
                 también funcionó como un aglutinante impartido en la resistencia a la tracción de la
                 tela.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
        Al reducir la concentración de PUA, la fuerza aumentó
                 esto puede deberse a las partículas rGO que se sabe que tienen
                 mayor resistencia mecánica. Como la concentración de rGO
                 aumentó mejoró la fuerza de la capa indirectamente
                 resultando en una mayor resistencia a la tracción.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             Las partículas de rGO pueden haber actuado como refuerzo de partículas en
                 el PUA mientras mejora directamente las características de tracción de
                 el PUA, lo que se puede apreciar en los resultados obtenidos.
              </p>
              <h5>Prueba de espesor</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              La prueba de espesor se realizó para evaluar si un
                 La aplicación de recubrimiento agregó un espesor indeseable a la
                 tela.
              </p>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              En el caso de la tela sin tratar, el espesor promedio fue
                 calculado como 287 µm. La muestra compuesta por 50% GO y 50% PUA
                 tiene el espesor promedio más bajo, equivalente a 313,5 µm. Además,
                 se encontró que el espesor más alto era 3303.5 µm en rGO/PUA que
                 consiste en 80% GO y 20% PUA. Valores inferiores del estándar
                 desviación puede interpretarse como una menor diferencia entre la
                 lecturas, lo que en este caso significa más uniformidad en el recubrimiento.
                 En el caso de la Muestra 1, que tiene el espesor promedio más bajo,
                 Se añadió un espesor de 313,5 µm al tejido debido al recubrimiento.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Esto se debe a que contiene la mayor cantidad de PUA, que es
                 más fluido que la resina de óxido de grafeno. Se observó durante
                 preparación que la solución era difícil de emulsionar debido a
                 la alta cantidad de PUA. La solución era inestable y tenía alta
                 fluidez. Durante el recubrimiento, la solución se filtró a través de la tela.
                 en lugar de depositarse en la superficie. Debido a esto, hay
                 hubo una pérdida de la solución y por lo tanto el espesor fue menor.
                 La cantidad máxima de adición de espesor se puede ver en la
                 muestra con 80-20% GO/PUA, con un espesor medio de 330,5 µm.
                 Sin embargo, la desviación estándar, en ese caso, es muy alta,
                 lo que implica un revestimiento desigual.
              </p>
              <h5>Conclusión</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              De los resultados anteriores se desprende que la producción de
                 tela de algodón con impermeable con la propiedad transpirable como
                 posible a través de rGO mientras que PUV actúa como nucleación entre el
                 tejido de algodón y rGO. Las combinaciones óptimas que produjeron el
                 mejor rendimiento en términos de propiedades impermeables y
                 transpirabilidad son muestras con 80-20% rGO-PUA. Estos
                 se pueden usar combinaciones para crear ropa deportiva que se puede usar
                 en condiciones duras, así como para ropa de uso regular. Basado
                 en el resultado de la prueba estándar de prueba a prueba de agua muestra que
                 aumentar la concentración de rGO da un mejor resultado con
                 propiedad de comodidad, como resultado la concentración de hacer bueno
                 tejido impermeable y transpirable era 80% rGO y 20% PUA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
