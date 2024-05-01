import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import headerImg from "../assets/img/img1.jpg";
import headerImg3 from "../assets/img/img3.png";
import headerImg4 from "../assets/img/img4.jpg";
import headerImg5 from "../assets/img/img5.jpg";
import headerImg6 from "../assets/img/img6.jpg";
import headerImg7 from "../assets/img/img7.jpg";
import headerImg8 from "../assets/img/img8.png";
import headerImg9 from "../assets/img/img9.png";
import headerImg10 from "../assets/img/img10.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';



export const Gallery = () => {


  return (
    <section className="banner" id="home">
        <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            
              
              <div>
               
                <h1>{`Trabaja con`} <br /> {`POLY - AGRO`} <span className="txt-rotate" dataPeriod="1000"></span></h1>
                  <p>Te invitamos a hacer parte de nuestro equipo polyagro enviando tu información a nuestros correos de talento humano y sumarte a este reto</p>
                  <p>Teléfono: +57 320 840 7916<br/><br/>Dirección: Variante Zipaquira-Bogota, La Fraguita, Zipaquirá, Cundinamarca <br/> <br/>Correo Electrónico: recursoshumanos@poly-agro.com </p>
              </div>
            
          </Col>
          <Col xs={12} md={6} xl={5}>
            
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}
