import React, { useState } from "react";
import "./contact.css";
import Header from "../../Component/Header/Header";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Footer from "../../Component/footer/Footer";

function Services() {
  const [validated, setValidated] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isVerified, setIsVerified] = useState(true);

  // Handle form submission
  const handleSubmit = (event) => {
    const form = event.currentTarget;

    // Prevent form submission if validation fails
    if (form.checkValidity() === false || !isVerified) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // Handle input change for verification code
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Check if the input value matches '7102'
    if (value === '7102') {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  return (
    <>
      <Header />
      <section className="bg-1" style={{}}>
        <h1 className="text-center service-text">CONTACT US</h1>
      </section>

      <Container className="mt-5">
        <h1>Get in Touch</h1>
        <Row>
          {/* Left Column - Contact Form */}
          <Col md={6}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="input">
              <Row className="mb-3">
                <Col md="12">
                  <Form.Group controlId="validationCustom01">
                    <Form.Control type="text" placeholder="Your Name" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide your name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md="12">
                  <Form.Group controlId="validationCustom02">
                    <Form.Control type="email" placeholder="Enter Email Address" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md="12">
                  <Form.Group controlId="validationCustom03">
                    <Form.Control type="text" placeholder="Enter Mobile Number" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid mobile number.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md="12">
                  <Form.Group controlId="validationCustom04">
                    <Form.Control type="text" placeholder="Your City" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md="12">
                  <Form.Group controlId="validationCustom05">
                    <Form.Control as="textarea" rows={3} placeholder="Your Message" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide your message.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <p>Verify you're a human - Please enter the following code in the box below: 7102</p>

              <Row className="mb-3">
                <Col md="12">
                  <Form.Group controlId="verificationCode">
                    <Form.Control
                      as="textarea"
                      rows={1}
                      placeholder="Enter verification code"
                      required
                      value={inputValue}
                      onChange={handleChange}
                      isInvalid={!isVerified && inputValue !== ""}
                    />
                    <Form.Control.Feedback type="invalid">
                      {isVerified ? "Please provide a valid code." : "Verification code is incorrect."}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Button type="submit" className="button-2 mb-auto" id="b1">Submit form</Button>
            </Form>
          </Col>

          {/* Right Column - Additional Content */}
          <Col md={6}style={{}} className=" address ms-auto">
            <h1>Our Address</h1>
            <p><i class="bi bi-building-fill-add pe-2"></i>
   2130 Fulton Street, San Diego, CA 94117-1080 USA
</p>
           <p><i class="bi bi-telephone-fill pe-2"></i> 1-800-1234-567
           </p>
           <p><i class="bi bi-envelope-fill pe-2"></i> info@demolink.org
           </p>
           <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3153.574918681343!2d-122.45290738546568!3d37.77656427975912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2130%20fulton%20street%20san%20diego%20ca%2094117%201080!5e0!3m2!1sen!2sin!4v1594393998426!5m2!1sen!2sin" width="100%" height="400"  style={{border:0}} aria-hidden="false" ></iframe>

            {/* You can add more content here as needed */}
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Services;
