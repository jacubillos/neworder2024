import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/img1.jpg";
import headerImg3 from "../assets/img/img3.png";
import headerImg4 from "../assets/img/img4.jpg";
import headerImg5 from "../assets/img/img5.jpg";
import headerImg6 from "../assets/img/img6.jpg";
import headerImg7 from "../assets/img/img7.jpg";
import headerImg8 from "../assets/img/img8.png";
import headerImg9 from "../assets/img/img9.jpg";
import headerImg10 from "../assets/img/img10.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';


export const Projects = () => {
return (
  <section className="banner" id="home">
  <Container>
  <Row className="aligh-items-center">
    <Col xs={12} md={6} xl={6}>
      
    <div>
         
         <h1>{`Agro`} <span className="txt-rotate" dataPeriod="1000"></span></h1>
           <p>Los productos agrícolas en polipropileno de la reconocida marca Raya Verde son una elección confiable y versátil para el sector agrícola. Desde mallas para sombra y protección, sacos resistentes para almacenamiento, cobertores para cultivos y cintas para atado, hasta otros accesorios especializados, ofrecen soluciones adaptadas a diversas necesidades. Su uso optimiza los procesos agrícolas, proporcionando protección y facilitando la gestión de cultivos. La calidad de Raya Verde garantiza productos duraderos y eficientes que contribuyen al éxito de la producción agrícola.</p>

       </div>
        
    </Col>
    <Col xs={12} md={6} xl={6}>
      
    <div>
            <img src={headerImg10} alt="Header Img" className="img2"/>
          </div>
    
     
    </Col>
  </Row>
</Container>

<Container className="espectacular">
  <Row className="aligh-items-center">
    <Col xs={12} md={6} xl={6}>
      
    <div>
            <img src={headerImg3} alt="Header Img" className="img2"/>
          </div>
        
    </Col>
    <Col xs={12} md={6} xl={6}>
      
    <div>
         
         <h1>{`Industria`} <span className="txt-rotate" dataPeriod="1000"></span></h1>
           <p>Los productos industriales fabricados con polipropileno son fundamentales en una amplia gama de aplicaciones. Desde mallas utilizadas en procesos de filtrado y tamizado hasta sacos resistentes empleados para el almacenamiento y transporte de productos, estos artículos ofrecen soluciones confiables y duraderas para las necesidades del sector industrial. La versatilidad del polipropileno permite la fabricación de una variedad de productos que cumplen con los estándares de calidad y resistencia requeridos en entornos industriales exigentes. Su capacidad para resistir la humedad, los químicos y las condiciones adversas los convierte en una opción ideal para optimizar los procesos de producción y logística en diversas industrias.</p>
       </div>
     
    </Col>
  </Row>
</Container>
<Container className="espectacular">
  <Row className="aligh-items-center">
    <Col xs={12} md={6} xl={6}>
      
    <div>
         
         <h1>{`Otros`} <span className="txt-rotate" dataPeriod="1000"></span></h1>
           <p>Los productos en polipropileno son esenciales en muchas áreas. Desde envases hasta muebles de jardín, ofrecen durabilidad y versatilidad.</p>
       </div>
        
    </Col>
    <Col xs={12} md={6} xl={6}>
      
    <div>
            <img src={headerImg6} alt="Header Img" className="img2"/>
          </div>
    
     
    </Col>
  </Row>
</Container>
<Container className="espectacular">
  <Row className="aligh-items-center">
    <Col xs={12} md={6} xl={6}>
      
        
        <div>
        <iframe width="500" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=Poly%20Agro%20S.A.S.+(Poly%20Agro%20S.A.S.)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>              
        </div>
      
    </Col>
    <Col xs={12} md={6} xl={6}>
      
          <div>
          <h1>{`Contáctanos`} <span className="txt-rotate" dataPeriod="1000"></span></h1>
            <p>Teléfono: 310 394 8356<br/><br/>Dirección: Variante Zipaquira-Bogota, La Fraguita, Zipaquirá, Cundinamarca <br/> <br/>Correo Electrónico: info@polyagro.com </p>
            
          </div>
      
    </Col>
  </Row>
</Container>
</section>
  )
}
