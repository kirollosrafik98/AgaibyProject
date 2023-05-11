import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import firstBlog from "../images/firstBlog.png";

export default function Blog4Sp() {
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
              Avances en tecnologías de tejido de telas
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
              El énfasis en la productividad y la calidad ha desarrollado la
                 tecnología de tejido mucho y como resultado las horas de trabajo
                 necesarios para tejer telas en telar se han reducido de aproximadamente
                 20 a 0,25 durante los últimos 125 años, y en los últimos 50 años
                 ha habido una reducción del 95% de horas inoperativas por estándar
                 unidad producida.
              </p>
              <h5>Tecnologías de tejido: antes y ahora</h5>
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
             La tejeduría es un proceso de formación de tejido con
                 entrelazamiento de dos o más juegos de hilos usando un establo
                 máquina llamada telar. Todavía no es seguro cuando el tejido
                 proceso fue introducido a la sociedad humana. Excepto por unos pocos
                 actividades en otros lugares, los principales desarrollos en la industria textil tuvieron lugar
                 lugar en Inglaterra. En Inglaterra, el gran cambio de la agricultura
                 a la industria de la lana llegó en el siglo XIV. Durante todos estos
                 años y unos cientos de años después del siglo XIV, la tela
                 fue producido en telares manuales que no estaban equipados con una mosca
                 lanzadera.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
             En 1733, John Kay inventó la lanzadera voladora que permitió que la trama
                 insertarse más rápidamente. Edmund Cart Wright, un inglés
                 clérigo, inventó el llamado telar mecánico que podía ser
                 operado desde un solo punto por dos hombres fuertes. Afortunadamente,
                 la energía de vapor estaba disponible en 1765. Pronto se impulsaron los telares mecánicos
                 por vapor y la mayoría de las piezas de madera fueron reemplazadas por hierro.
                 Luego, estos telares se detenían cada pocos minutos para
                 reemplace las bobinas de trama vacías o la canilla en la lanzadera y esto
                 limitado el número de telares, un tejedor podría operar a aproximadamente
                 cuatro James Northrop, un inglés inventó una trama automática
                 sistema de transferencia que reemplazó el hilo de trama en la lanzadera
                 sin frenar ni detener el telar en 1889.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
              Acontecimientos similares tuvieron lugar en otros lugares también, Ruti, un importante
                 El fabricante de telares de Suiza fabricó el cambio automático de bobinas.
                 Northrop telar en 1898. Después de la Segunda Guerra Mundial, más productividad y
                 eficiencia eran esenciales para superar los crecientes costos laborales en
                 países occidentales. Limitaciones de los telares de lanzadera a pesar de la
                 relativamente alta velocidad y eficiencias en el telar con
                 picking convencional, la productividad de estas máquinas
                 siguen estando limitadas en tanto sus fundamentos
                 Las construcciones involucraron el uso de propulsión de lanzadera. Es
                 Se sabe que la potencia necesaria para el picking es proporcional a la
                 cubo de la velocidad del telar. Si la velocidad del telar aumenta de 200
                 a 300 selecciones por minuto, el requerimiento de energía aumentaría en
                 un factor de (3/2) 3 es decir 3,4 veces aproximadamente.
              </p>
              <h5>Era necesaria la transmisión de la tecnología del telar de lanzadera?</h5>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
               El énfasis en la productividad y la calidad ha desarrollado la
                 tecnología de tejido mucho y como resultado las horas de trabajo
                 necesarios para tejer telas en telar se han reducido de aproximadamente
                 20 a 0,25 durante los últimos 125 años, y en los últimos 50 años
                 ha habido una reducción del 95% de horas inoperativas por estándar
                 unidad producida. La mayoría de los desarrollos están ocurriendo en
                 los telares sin lanzadera en las siguientes direcciones:
              </p>
              <ul className="dot-list">
              <li>Para aumentar la productividad del telar.</li>
                 <li>
                   Para hacer los telares más flexibles para diferentes tipos de tela.
                 </li>
                 <li>Para reducir el tiempo de inactividad para cambiar un estilo, etc.</li>
                 <li>
                   Aplicación de mecanismos de control electrónico para incrementar
                   automatización
                 </li>
                 <li>
                   Desarrollo de complementos como dobby, jacquards, etc.
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
           Además de estos, los telares más nuevos son de diseño simple, los
                 Los movimientos son más fiables, consumen menos energía y tienen un menor
                 costo de mantenimiento.
              </p>
              <h5>Desventajas de los telares de lanzadera</h5>
              <ul className="dot-list">
                <li>
                Mayor tensión impuesta sobre el mecanismo de recolección, por lo tanto
                   haciéndola propensa a fallas frecuentes.
                </li>
                <li>La mayor cantidad de ruido y vibraciones.</li>
                <li>
                Debido a la energía superior en un transbordador, se requiere una mayor tensión
                   impone de nuevo al mecanismo de control.
                </li>
                <li>
                El movimiento de la lanzadera será más difícil de controlar.
                   y habrá una mayor posibilidad de su expulsión de
                   el telar
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
              Los problemas dinámicos creados por el picking y el control
                 mecanismo y el proceso inherente de bobinado de canilla para lanzadera
                 telares había alentado a los fabricantes de telares a desarrollar alternativas
                 medios de inserción de trama en los que no se proyecta una lanzadera pesada
                 adelante y atrás a lo ancho del telar. Es
                 Es costumbre referirse a estos telares como telares sin lanzadera.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
              >
   Los diversos telares sin lanzadera que se han desarrollado a lo largo de un
                 período de unos 50 años se pueden clasificar en varios grupos.
              </p>
              <ul className="dot-list">
              <li>Telares de proyectiles</li>
                 <li>Telares de pinzas</li>
                 <li>Telares de chorro de fluido</li>
                 <li>Telares multifase</li>
              </ul>
              <h5>Ventajas de la tecnología de tejido sin lanzadera</h5>
              <ul className="dot-list">
                <li>
                El tejido sin lanzadera se está volviendo cada vez más popular debido
                   a las siguientes ventajas en comparación con los telares convencionales.
                </li>
                <li>
                Alta productividad de la mano de obra y de la máquina debido a la alta velocidad y
                   mayor ancho de telares.
                </li>
                <li>
                Reducción del costo de mano de obra debido a una mayor asignación de telares y
                   productividad.
                </li>
                <li>Paño sin defectos para mayor longitud.</li>
                <li>Mejor ambiente debido al bajo nivel de ruido.</li>
                 <li>Se elimina el proceso de bobinado Pirn.</li>
                 <li>Menor pérdida de valor de las telas.</li>
                 <li>Bajo consumo de reservas y repuestos.</li>
                 <li>Menos necesidad de espacio por metro de tela.</li>
                 <li>
                   Más colores en la dirección de la trama (hasta 12) con Pick and Pick
                   método.
                 </li>
                 <li>
                   Se pueden tejer telas de ancho más ancho y telas de ancho múltiple, alto
                   grado de flexibilidad para adaptarse a una amplia gama de fibras y
                   cuenta
                 </li>
                 <li>Fácilmente adaptable a las tendencias del mercado.</li>
                 <li>Los rebordes más grandes pueden acomodar 3 veces más hilo.</li>
                 <li>
                   Debido a la menor cantidad de cambios de haz, menor tiempo de inactividad y menores desperdicios.
                 </li>
                 <li>Menos dependencia de la mano de obra calificada.</li>
                 <li>
                   Mayores capacidades de diseño debido al microprocesador y
                   controles electronicos
                 </li>
                 <li>Fácil mantenimiento y menos carga de trabajo para los Jobbers.</li>
                 <li>Accidentes menores.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
