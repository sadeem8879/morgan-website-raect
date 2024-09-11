import React from "react";
import "./About.css";
import Header from "../../Component/Header/Header"
import { Row, Col, Container } from "react-bootstrap";
import img1 from "../../images/about-2.jpg";
import Painting from "../../Component/painting/Mypainting";
import Footer from "../../Component/footer/Footer";

function About() {
    return (
        <>
            <Header />
            <section className="bg-1 jumbotron-banner " style={{ backgroundColor: "red" }}>
                <h1 className="text-center about-text" >ABOUT US</h1>
            </section>
            <section>
                <Container>
                    <Row className="mt-5">
                        <Col>
                            <h1 style={{ fontSize: "50px" }}>Few Words About us
                            </h1>
                            <p className="text-1"> There are always situations that call for more than just a<br /> photograph. Have your portrait painted by a really experienced fine<br /> artist who can literally paint anything you can dream up! A portrait<br /> is a representation of a particular person. Such paintings have<br /> always been more than just a record. They have been used to show<br /> the power, importance, virtue, beauty, wealth, taste, learning or<br /> other important qualities that characterize the sitter. It is one of<br /> the best ways to depict a person and show his/her character. I am <br />always ready to meet all your wishes and preferences in your <br />portrait, whether it’s created as a personal painting or a piece of<br /> art for an official person. Contact me today to discuss your future <br />portrait.</p>
                            <button className="button-2">Learn More</button>
                        </Col>
                        <Col>
                            <img src={img1} alt="img" className="img ps-5 ms-5"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        <Painting/>
        <Footer/>
        </>
    )
}
export default About;