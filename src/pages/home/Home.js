import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bg from "../../images/img-logo.png";
// import c1 from "../../images/home-card-1.jpg";
// import c2 from "../../images/home-card-2.jpg";
// import c3 from "../../images/home-card-3.jpg";
// import c4 from "../../images/home-card-4.jpg";
// import c5 from "../../images/home-card-5.jpg";
// import c6 from "../../images/home-card-6.jpg";
import Header from "../../Component/Header/Header"
import Footer from "../../Component/footer/Footer"; import './Home.css';
import Mypainting from '../../Component/painting/Mypainting';
// import Card from 'react-bootstrap/Card';
function Home() {
    return (<>
        <Header />
        <section className="bg-img1 mb-5   d-flex align-items-center justify-content-center col-lg-12 col-md-12  img-fluid" lg="12">
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <img src={bg} alt="bg" className="img-fluid me-5" />
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="mt-5  txt-1 " >
            <Row>
                <Col className="text-center" lg={6} md={12}  >
                    <h2 style={{ fontSize: "45px" }}>A Few Words About Me</h2><br />
                    <p className="text-secondary pt-3 text-center" style={{ fontSize: "17px" }}>My name is Samantha Morgan, and I have been a fine artist since <br />my youth. I find inspiration from the innovative styles of <br />contemporary and urban art, such as graphic and graffiti <br />illustrations. I strongly believe that art is a global form of <br />communication. It educates visually by either moving you, pleasing<br /> you, or even inspiring you.</p>
                    {/* <button className="btn btn-lg  text-warning border-warning btn-1">Learn More</button> */}
                    <button className="button-2">Learn More</button>

                </Col>
                <Col className="text-center profile-img offset-btn-1" lg={6}>
                    <img className="img-1 img-fluid" src={"https://github.com/HussainKhan43/react-project/blob/main/src/assets/home.jpg?raw=true"} alt="img" />
                </Col>
            </Row>
        </section>

        <Mypainting />
        <section>
            <Row>
                <Col>  <h1 className="text-center mt-5" style={{ fontSize: "45px", fontWeight: "500" }}>Services</h1>
                    <p className={`text-secondary text-center col-lg-12 mt-3 ${'card-txt3'}`}>If you are looking for custom paintings, which will decorate your home or office, consider booking one or several <br /> of my services listed below. They will add more colors and emotions to your daily life.</p>
                </Col>
            </Row>

        </section>
        <section className=" text-center">
            <Row className="col-lg-10 offset-lg-1 ">
                <Col className="mt-5 services-border g-1 " style={{ paddingTop: "80px ", fontSize: "50px" }}>
                    <i class="bi bi-person-fill   "></i>
                    <p style={{ fontSize: "25px", color: "black" }} className="  g1-text pt-0">Potrait</p>
                </Col>
                <Col className="mt-5 services-border g-1 " style={{ paddingTop: "80px ", fontSize: "50px" }}>
                    <i class="fa-brands fa-pagelines  "></i>
                    <p style={{ fontSize: "25px", color: "black" }} className="  g1-text pt-0">Landscape
                    </p>
                </Col>
                <Col className="mt-5 services-border g-1" style={{ paddingTop: "80px ", fontSize: "50px" }}>
                    <i className="bi bi-apple  "></i>
                    <p style={{ fontSize: "25px", color: "black" }} className="  g1-text pt-0">
                        Still Life
                    </p>
                </Col>
                <Col className="mt-5 services-border g-1 " style={{ paddingTop: "80px ", fontSize: "50px" }}>
                    <i class="fa-solid fa-house-chimney  fs-1"></i>
                    <p style={{ fontSize: "25px", color: "black" }} className="  g1-text pt-0">Urban</p>
                </Col>
            </Row>
        </section>
        
        <section>
            <button className="button-1 mt-5 ">View All Services</button>
        </section>
        <Footer />
    </>

    );

}
export default Home;

