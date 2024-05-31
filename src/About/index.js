import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../img/about-1.jpg';
import image2 from '../img/about-2.jpg';
import image3 from '../img/about-3.jpg';
import image4 from '../img/about-4.jpg';
import { FaUtensils} from 'react-icons/fa';
import './about.scss';

function Service() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="image-grid">
            <div className="image">
              <img src={image1} alt="Image 1" className="responsive-img"/>
            </div>
            <div className="image">
              <img src={image2} alt="Image 2" className="responsive-img"/>
            </div>
            <div className="image">
              <img src={image3} alt="Image 3" className="responsive-img"/>
            </div>
            <div className="image">
              <img src={image4} alt="Image 4" className="responsive-img"/>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="content">
          <h3 className='abt'>About Us</h3>
            <h2 className='abt-head'>Welcome to<FaUtensils className="icon-larges " /> Restoran</h2>
          
         
<p>
Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.

Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Service;
