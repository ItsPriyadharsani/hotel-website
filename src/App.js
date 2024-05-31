import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ExampleCarouselImage from '../src/img/food1.jpg';
import ExampleCarouselImage1 from '../src/img/food8.webp';
import { FaUtensils, FaUserTie, FaCartPlus, FaHeadset } from 'react-icons/fa';
import Service from './About';
function App() {

  return (
    <div className='Content'>
      <Navbar expand="lg" className="bg-dark Light">
        <Container fluid className="Light">
          <FaUtensils className="icon-larges ms-5" />
          <h2 className="text-warning ms-3">Restaurant</h2>


          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className='mr-5'>Home</Nav.Link>
              <Nav.Link href="#action1">About</Nav.Link>
              <Nav.Link href="#action1">Service</Nav.Link>
              <Nav.Link href="#action1">Menu</Nav.Link>
              <NavDropdown title="Pages" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Booking</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Our team</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Testimonal</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-warning">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item interval={5000}>

          <img
            className="d-block w-100 carousel-image"
            src={ExampleCarouselImage}
            alt="First slide"

          />
          <Carousel.Caption>
            <div>
              <h3 className='head'>Enjoy Our  <br></br>
                Delicious Meal</h3>
              <div className='para'>
                Our restaurant, nestled in the city center, is a culinary oasis where flavor reigns supreme. With a menu boasting locally-sourced ingredients and expertly crafted dishes, each visit is a journey for the palate.
                <Button variant="warning" className='buttons'>Book a Table</Button>{' '}</div></div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>

          <img
            className="d-block w-100 carousel-image"
            src={ExampleCarouselImage1}
            alt="First slide"

          />
          <Carousel.Caption>
            <div>
              <h3 className='head'>Enjoy Our  <br></br>
                Delicious Meal</h3>
              <div className='para'>
                Our restaurant, nestled in the city center, is a culinary oasis where flavor reigns supreme. With a menu boasting locally-sourced ingredients and expertly crafted dishes, each visit is a journey for the palate.
                <Button variant="warning" className='buttons'>Book a Table</Button>{' '}</div></div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='container'>
        <div className='box'><FaUserTie className="icon-large ms-5" />
          <p className='headings'>Meet Our Chefs</p>
          <p>Our talented chefs craft each dish with passion and creativity, bringing the finest culinary experiences to your table.</p></div>

        <div className='box'><FaUtensils className="icon-large ms-5" />   <p  className='headings'>Delicious Cuisine</p>
        <p>Experience a diverse menu with fresh, locally-sourced ingredients, meticulously crafted to satisfy your culinary cravings.</p>


        </div>
        <div className='box'>  <FaCartPlus className="icon-large ms-5" />  <p className='headings'>Easy Reservations</p>
          <p >Book your table effortlessly through our user-friendly online reservation system, ensuring a seamless dining experience.</p>
        </div>

        <div className='box'><FaHeadset className="icon-large ms-5" />
        <p  className='headings'>Customer Support</p>
          <p>Our dedicated support team is always ready to assist you with any inquiries, ensuring a delightful experience every time.</p></div>
          </div>
          <section className="section">
            <Service />
      </section>
    </div>
 
  );
}

export default App;
