import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import firstBlog from "../images/image-34.png";
import image35 from "../images/image-35.png";
import image36 from "../images/image-36.png";

import image40 from "../images/image-40.png";

export default function Blog8Sp() {
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
              Futuro de los Textiles con Nanotecnología
              </h1>
            </div>
            <div className="col-md-8">
              <h5>Md. Golam Rabbani</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             Una tecnología cada vez más interdisciplinaria que a menudo se ve
                 como nueva revolución industrial es la nanotecnología. Nanotecnología
                 poco a poco está atrayendo la atención mundial debido a su enorme
                 potencial en una amplia gama de usos finales. Debido a su enorme
                 potencial económico, los nanomateriales han atraído empresas.
                 Para la industria textil, la nanotecnología también tiene ventajas comerciales reales.
                 potencial.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Las nanopartículas tienen una gran relación área superficial/volumen y
                 alta energía superficial, presentando así una mejor afinidad por los tejidos
                 y conduce a un aumento en la durabilidad de la función. También,
                 una capa de nanopartículas en los tejidos no afectará a su
                 transpirabilidad o tacto de la mano. Aumento de la demanda de los clientes por
                 prendas duraderas y funcionales fabricadas de forma sostenible
                 ha creado una oportunidad para que los nanomateriales sean
                 integrado en sustratos textiles. Esta tecnología puede inducir
                 repelencia de manchas, antiarrugas, eliminación de estática y
                 conductividad eléctrica a las fibras sin comprometer su
                 comodidad y flexibilidad.
              </p>

              <div
                className="imgCont p-2"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={firstBlog} alt="" />{" "}
              </div>
              {/* <p  style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>Oh, summer, the season of sweat and heat! Choosing the perfect fabrics for summer to wear during this time is crucial for staying comfortable. Natural fabrics like cotton, linen, and silk are a few choices out of many for summer. These fabrics are breathable and lightweight. Synthetic fabrics like polyester and nylon can trap heat and cause discomfort. Light-coloured fabrics are also preferable as they reflect heat and keep you cool. So, let's swap out those heavy winter clothes for some breezy cotton and enjoy the summer!</p> */}
              <h5>Nanotecnología</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               La nanotecnología es una nueva sección de manipulación, comprensión,
                 controlar y determinar los aspectos biofísicos o químicos
                 y factores de material conducidos a nanoescala que tienen al menos
                 menos una dimensión inferior a 100 nm. Las ideas y conceptos
                 detrás de esta increíble tecnología comenzó con una charla titulada
                 "Hay mucho espacio en el fondo" por el físico Richard
                 Feynman en una reunión de la Sociedad Americana de Física en el
                 Instituto de Tecnología de California (CalTech) el 29 de diciembre de
                 1959, mucho antes de que se utilizara el término nanotecnología. En su
                 discurso, Feynman describió un proceso en el que los científicos serían
                 capaz de manipular y controlar átomos y moléculas individuales.
                 Más de una década después, el profesor Norio Taniguchi precisó
                 el término nanotecnología en sus exploraciones de ultraprecisión
                 mecanizado. De hecho, ha comenzado en 1981, con el desarrollo
                 del microscopio de túnel de barrido que podría "ver" individuos
                 átomos donde comenzó la nanotecnología moderna.
              </p>

              <div
                className="imgCont p-2"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={image35} alt="" />{" "}
              </div>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Es realmente difícil imaginar cuán pequeña puede ser la nanotecnología.
                 Un nanómetro es la mil millonésima parte de un metro. Puede haber 25.400.000
                 nanómetros en una pulgada. El grosor de una hoja de periódico es
                 unos 100.000 nanómetros. En una escala comparativa, si una canica
                 fuera un nanómetro, entonces un metro sería el tamaño de la Tierra.
                 Todo lo que existe físicamente en este mundo está hecho de
                 átomos: los alimentos que comemos, la ropa que vestimos, los edificios y
                 las casas en las que vivimos y nuestros propios cuerpos, incluso el aire que inhalamos.
                 Los átomos no se pueden ver a simple vista. Dos procesos básicos son
                 utilizados en la producción de nanopartículas: Top-down y
                 Procesos productivos bottom-up/quimiofísicos. 'De arriba hacia abajo' se refiere
                 a la trituración mecánica del material de origen utilizando una molienda
                 proceso.
              </p>
              {/* <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>It's available in various styles, such as Oxford, chambray, and poplin, and is perfect for casual and formal wear. Examples include cotton T-shirts, polo shirts, and dress shirts. Its durability and easy care make it a cost-effective option for your summer wardrobe.</p> */}
              {/* <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={cotton} alt="" /> </div>  */}
              <div
                className="imgCont p-2"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={image36} alt="" />{" "}
              </div>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
                Es un proceso mecánico-físico de producción de partículas basado en
                 los principios de la tecnología de microsistemas. Puramente mecánico
                 la molienda puede ir acompañada de una molienda reactiva: aquí, un químico
                 o una reacción quimiofísica acompaña al proceso de molienda. En
                 la estrategia 'de abajo hacia arriba', las estructuras se construyen
                 procesos. La selección del proceso respectivo depende de
                 la composición química y las características deseadas especificadas para
                 las nanopartículas Además, existen las síntesis sol-gel (la
                 producción de un gel a partir de materiales en forma de polvo) que son
                 procesos químicos húmedos para producir nanomateriales porosos). Nano
                 Los textiles pueden ser producidos por una variedad de métodos. La clave
                 diferencia entre ellos es si las nanopartículas sintéticas son
                 integrados en las fibras o el tejido, o se aplican como
                 recubrimiento en la superficie si se agregan nanopartículas a la
                 fibras o revestimientos a nanoescala.
              </p>

              {/* <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>It is available in various styles, such as pure linen fabric shirts , pants, and shorts, making it an ideal choice for any summer outfit. The fabric's natural wrinkles and creases give it character, and its durability is a profitable investment for the season.</p> */}

              <h5>Nanotecnología en Textiles y Prendas de Vestir</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               La nanotecnología es una nueva puerta de entrada al sector textil y de la confección
                 industria. Su aplicación viene ofreciendo una amplia gama de
                 oportunidades y atraer grupos de empresarios, inversionistas,
                 y otros por el potencial y crecimiento que ofrece
                 económicamente. Ha supuesto una revolución tecnológica en el
                 industria textil. Nuestro mundo está en un constante estado de revolución.
                 o cambiar Los consumidores de la industria textil exigen nuevos
                 tecnología e innovaciones para una mejor experiencia. Nanotecnología
                 combinado con fibras ha hecho nanofibras. Estos tejidos inteligentes
                 son avanzados y multifuncionales en moda, deportes,
                 protección, transporte, etc. Son duraderos, cómodos
                 y rentable y tiene múltiples usos.
              </p>
              {/* <h5>Traditional Production Process of Milk Fiber:</h5> */}
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               Varios tipos de nano textiles están presentes en el mercado. Algunos de
                 estos son,
              </p>

              <ul className="dot-list">
                <li>
                Textiles nanoacabados: abrigos, guantes, blusas y ropa de cama
                   las cubiertas están hechas de tales materiales textiles
                </li>
                <li>
                Textiles nanocompuestos: Nanofibras y nanotubos de carbono.
                </li>
                <li>
                Textiles nanofibrosos: los textiles nanofibrosos pueden tener una gran
                   potencial en el campo de la medicina debido a su singular
                   características que cumplen con los criterios de médico
                   aplicaciones
                </li>
                <li>Nano-habilitado o, no tejidos: Medicamento de cobertura usado.</li>

                <li>
                Nanopartículas de arcilla: se utilizan en electrónica, alimentos, ropa, neumáticos,
                   medicamentos, protectores solares, cosméticos, deportes, etc.
                </li>
                <li>
                Nanotubos de carbono: estos tubos tienen conductividad eléctrica,
                   fuerza, elasticidad, conductividad térmica también expansión.
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
                Algunos nano-textiles populares son,
              </p>
              <ul className="dot-list">
                <li>
                Trajes de baño diseñados con nanotecnología: estos nuevos avances
                   Los trajes de baño tienen una capa de plasma, dirigido y mejorado por
                   nanotecnología Esta capa de plasma ayuda a repeler el agua.
                   moléculas, resultando en un mejor buceo y natación.
                </li>
                <li>
                Sábanas autolimpiables: Estas sábanas no dejan que la suciedad o
                   el agua permanece en su superficie por más tiempo. Tales telas
                   también se conocen como telas nano-cuidado. Estas telas funcionan
                   descartando todos los puntos de contacto de elementos externos, tales como
                   polvo, suciedad, etc
                </li>
                <li>
                Chaquetas de protección contra rayos ultravioleta: la nanotecnología mejora
                   la capacidad de los tejidos para proteger a la persona añadiendo
                   Delustrante, absorbente de rayos ultravioleta y pigmentación colorante.
                   Estas tecnologías desvían los rayos nocivos del sol y hacen que el
                   tejido comparativamente mejor que otros ya que proporciona
                   mejor protección.
                </li>
              </ul>

              <div
                className="imgCont p-2"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={image40} alt="" />{" "}
              </div>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
           También existen hilos antimanchas y antiarrugas,
                 calentadores corporales que utilizan materiales de cambio de fase (PCM) que responden
                 a cambios de temperatura corporal, nanocalcetines tratados con plata
                 nanopartículas, etc. disponibles en el mercado actual. nanopatrón
                 superficies pueden explotar el efecto Lotus, haciendo que sean
                 lo suficientemente hidrofóbico para que las gotas de agua se formen bolas y rueden
                 la superficie del tejido, eliminando las partículas de suciedad a su paso.
              </p>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Hay algunas propiedades útiles de las nanofibras:
              </p>

              <ul className="dot-list">
              <li>Propiedades repelentes al agua</li>
                 <li>Propiedades antibacterianas</li>
                 <li>Propiedades resistentes a las arrugas</li>
                 <li>Propiedades protectoras contra los rayos ultravioleta</li>
                 <li>Propiedades ignífugas</li>
                 <li>Propiedades antipolen</li>
              </ul>
              {/* <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>In this way, no formaldehyde is used and certain cost efficiency and minimal CO2 emissions are achieved. It is 100% natural, soft and silky smooth. It fulfils the requirement of skin-friendly and innovative material development.</p> */}
              <h5>El mercado mundial de nanotextiles</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              El mercado global de nanotextiles debería crecer de $ 5.1 mil millones
                 en 2019 a $ 14.8 mil millones para 2024 a un crecimiento anual compuesto
                 (CAGR) del 23,6% para el período 2019-2024. Lo global
                 Se estima que el mercado de textiles técnicos aumentará de
                 $197,800 millones en 2022 a $255,400 millones en 2027, a una tasa compuesta
                 tasa de crecimiento anual (CAGR) de 5.2% desde 2022 hasta 2027. La
                 el mercado mundial de medios filtrantes no tejidos debería crecer de $ 5,7
                 mil millones en 2021 a $7.2 mil millones para 2026 con una tasa anual compuesta
                 tasa de crecimiento (CAGR) de 4.9% para el período 2021-2026. El
                 El mercado mundial de nanofibras debería crecer de $ 2.2 mil millones en
                 2021 a $ 6.7 mil millones para 2026 con una tasa de crecimiento anual compuesta
                 (CAGR) del 25,1 % para el período 2021-2026 (bccresearch). A
                 continuar esta tendencia favorable de nanotextiles emergentes, el
                 industria textil debe contribuir más a la investigación en
                 nanotecnología e intensificar su colaboración con otros
                 disciplinas Hay innumerables textiles y telas basados en nano
                 aplicaciones, tales como medicina, militar, moda/entretenimiento,
                 ropa deportiva, y muchos más. Estas aplicaciones y desarrollos
                 muestran que la nanotecnología surgirá para dominar la industria textil
                 campo en el futuro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
