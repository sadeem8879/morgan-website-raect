import React from "react";
import "./services.css";
import Header from "../../Component/Header/Header"
import { Row, Col, Container } from "react-bootstrap";
import img1 from "../../images/SERVICE-1.jpg";
import img2 from "../../images/SERVICE-2.jpg";
import img3 from "../../images/SERVICE-3.jpg";
import img4 from "../../images/service-4.jpg";
import img5 from "../../images/home-card-2.jpg";

import Painting from "../../Component/painting/Mypainting";
import Footer from "../../Component/footer/Footer";

function Services() {
    return (
        <>
            <Header />
            <section className="bg-1 " style={{}}>
                <h1 className="text-center service-text -text" >SERVICES</h1>
            </section>
            <section>
                <Container className="mt-5 ">
                    <Row>
                        <Col className="">
                            <img src={img1} alt="img" height={200} width={40} className="img-1" />
                        </Col>
                        <Col className="ms-2">
                            <h1 style={{ fontSize: "50px" }}>Service Description
                            </h1>
                            <p className="fs- para mt-3">There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character.</p>
                            <button className="button-2">Learn More</button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section >
                <Container >
                    <Row className="mt-5 img-container">
                        <Col>
                            <img src={img2} className="img-2" />
                        </Col>
                        <Col >
                            <img src={img3} className="img-3" />
                            <h3 className="text-right mt-3 img-text" style={{ textAlign: "right" }}>Oil on Canvas of a Little Girl</h3>
                            <p className="text-right mt-auto img-text-1 fs-5">This portrait was created in 2015 for my brother’s daughter, Emily Morgan.</p>
                        </Col>

                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className="mt-4">
                        <Col>
                            <img src={img5} className="img-4" />
                            <h3 className="text-left mt-3 img-text-2" style={{  }}>Watercolor Portrait
                            </h3>
                            <p className="text-right mt-auto img-text-2 fs-5" style={{color:"#6c757d"}}>This portrait was created in 2015 for my brother’s daughter, Emily Morgan.</p>
                        </Col>
                        <Col>
                        <img src={img4} alt="img" className="img-5 pe-5 mr-5"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        <Painting/>
        <Footer/>
        </>
    )
}
export default Services;