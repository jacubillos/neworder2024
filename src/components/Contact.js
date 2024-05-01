import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
   return (
    <section className="banner" id="home">
      <Container>
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
