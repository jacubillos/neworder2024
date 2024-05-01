import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/img1.jpg";
import headerImg3 from "../assets/img/img3.png";
import headerImg4 from "../assets/img/img4.jpg";
import headerImg5 from "../assets/img/img5.png";
import headerImg6 from "../assets/img/img22.png";
import headerImg7 from "../assets/img/img23.png";
import headerImg8 from "../assets/img/img8.png";
import headerImg9 from "../assets/img/img9.png";
import headerImg10 from "../assets/img/img10.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            
              
              <div>
               
                <h1>{`Bienvenidos a`} <br /> {`POLY - AGRO`} <span className="txt-rotate" dataPeriod="1000"></span></h1>
                  <p>En Poly-Agro nos destacamos por el compromiso con la calidad, ofreciendo empaques de polipropileno innovadores y duraderos para sectores agrícolas e industriales.</p>
                  <button onClick={() => console.log('connect')}>Más información<ArrowRightCircle size={25} /></button>
              </div>
            
          </Col>
          <Col xs={12} md={6} xl={5}>
            
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>
            
          </Col>
        </Row>
      </Container>
      <Container className="espectacular">
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            
          <div>
                  <img src={headerImg3} alt="Header Img" className="img2"/>
                </div>
              
          </Col>
          <Col xs={12} md={6} xl={5}>
            
          <div>
               
               <h1>{`¿Quienes Somos?`} <span className="txt-rotate" dataPeriod="1000"></span></h1>
                 <p>Con más de dos décadas de trayectoria en el mercado, Polyagro se erige como una destacada empresa industrial colombiana. Nuestro enfoque se centra en la fabricación y comercialización de una amplia gama de empaques en polipropileno, adaptados tanto para aplicaciones agrícolas como industriales. A lo largo de estos años, hemos consolidado un sólido compromiso con la excelencia y la innovación, lo que nos ha permitido posicionarnos como líderes en nuestro sector. Nuestra experiencia y dedicación nos respaldan, garantizando a nuestros clientes productos de calidad superior que cumplen con los más altos estándares de rendimiento y durabilidad.</p>
                 <button onClick={() => console.log('connect')}>Más información<ArrowRightCircle size={25} /></button>
             </div>
           
          </Col>
        </Row>
      </Container>
     
      <Container className="espectacular">
      <h2>{`Galeria`} <span className="txt-rotate" dataPeriod="1000"></span></h2>
      <Row className="fase1">
        <Col xs={12} md={8}>
        <img src={headerImg4} alt="Header Img" className="img2"/>
        </Col>
        <Col xs={6} md={4}>
        <img src={headerImg5} alt="Header Img" className="img2"/>
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row className="fase2">
        <Col xs={6} md={4}>
        <img src={headerImg6} alt="Header Img" className="img2"/>
        </Col>
        <Col xs={6} md={4}>
        <img src={headerImg7} alt="Header Img" className="img2"/>
        </Col>
        <Col xs={6} md={4}>
        <img src={headerImg8} alt="Header Img" className="img2"/>
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className="fase3">
        <Col xs={6}><img src={headerImg9} alt="Header Img" className="img2"/></Col>
        <Col xs={6}><img src={headerImg10} alt="Header Img" className="img2"/></Col>
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
