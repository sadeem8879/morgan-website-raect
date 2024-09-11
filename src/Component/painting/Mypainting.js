// import React from "react";
// import Card from 'react-bootstrap/Card';
// import { Container, Row, Col } from "react-bootstrap"; // Correct import
// // import bg from "../../images/img-logo.png";
// import c1 from '../../images/home-card-1.jpg';
// import c2 from '../../images/home-card-2.jpg';
// import c3 from '../../images/home-card-3.jpg';
// import c4 from '../../images/home-card-4.jpg';
// import c5 from '../../images/home-card-5.jpg';
// import c6 from '../../images/home-card-6.jpg';

// import '../../pages/home/home.css';
// function Mypainting() {
//     return (
//         <>


//             <section className="ms-5 ps-5  me-5 col-lg-12">
//                 <Row>
//                     <Col lg="12">
//                         <p className="text-center mt-5 mb-5" style={{ fontSize: "45px", fontWeight: "500" }}>My Paintings</p>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col className="col-lg-4 col-md-6 col-sm-12 ms-auto">
//                         <Card style={{ width: "350px", height: "400px" }} className=" ms-3 card-2">
//                             <Card.Img variant="top" src={c1} className="custom-card-img card-1 img-fluid img-card" />
//                             <Card.Body >
//                                 <Card.Title className={`text-warning ${'card-txt2'}`}>Sea Storm</Card.Title>
//                                 <Card.Text className={`text-secondary ${'card-txt3'}`}>
//                                     This painting is one of my latest works on sea and ocean topics.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>

//                     <Col className="col-lg-4 col-md-6 col-sm-12">
//                         <Card style={{ width: "350px", height: '100px' }} className="  card-2">
//                             <Card.Img variant="top" src={c2} className="custom-card-img card-1 img-fluid img-card-1" />
//                             <Card.Body>
//                                 <Card.Title className={`text-warning ${'card-txt2'}`}>Ruins of Ancient Fortress</Card.Title>
//                                 <Card.Text className={`text-secondary ${'card-txt3'}`}>
//                                     When I’ve been to Scotland, I made this painting just in a day.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col className="pe-2 col-lg-4 col-md-6 col-sm-12 ">
//                         <Card style={{ width: "350px", height: '100px' }} className="  card-2" >
//                             <Card.Img variant="top" src={c3} className="custom-card-img card-1 img-fluid img-card" />
//                             <Card.Body>
//                                 <Card.Title className={`text-warning ${'card-txt2'}`}>Two Lovers</Card.Title>
//                                 <Card.Text className={`text-secondary ${'card-txt3'}`}>
//                                     This work was finished in two days for my customers from San Diego, CA, who needed something special.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>

//             </section>
//             <section className="container2 ms-5 ps-5  me-5 ">

//                 <Row>
//                     <Col className="col-lg-4 col-md-6 col-sm-12 ms-1auto">
//                         <Card style={{ width: "350px", height: '100px' }} className=" ms-3 card-2">
//                             <Card.Img variant="top" src={c4} className="custom-card-img card-1 img-fluid img-card" />
//                             <Card.Body>
//                                 <Card.Title className={`text-warning ${'card-txt1'}`}>Watercolor Portrait</Card.Title>
//                                 <Card.Text className={`text-secondary ${'card-txt3'}`}>
//                                     Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.                            </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col className="col-lg-4 col-md-6 col-sm-12">
//                         <Card style={{ width: "350px", height: '100px' }} className="  card-2">
//                             <Card.Img variant="top" src={c5} className="custom-card-img card-1 img-fluid img-card-1" />
//                             <Card.Body>
//                                 <Card.Title className={`text-warning ${'card-txt2'}`}>Birches in Autumn</Card.Title>
//                                 <Card.Text className={`text-secondary ${'card-txt3'}`}>
//                                     I love painting autumn trees and this work is a perfect example.                            </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col className="pe-2 col-lg-4 col-md-6 col-sm-12 ">
//                         <Card style={{ width: "350px", height: '100px' }} className="  card-2">
//                             <Card.Img variant="top" src={c6} className="custom-card-img card-1 img-fluid img-card" />
//                             <Card.Body>
//                                 <Card.Title className={`text-warning ${'card-txt2'}`}>Green Landscape</Card.Title>
//                                 <Card.Text className={`text-secondary ${'card-txt3'}`}>
//                                     Another abstract work, which appeared at my last year’s exhibition, Morgan Paintings 2016.                            </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </section>
//         </>
//     )
// }
// export default Mypainting;
import React from "react";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap"; 
import c1 from '../../images/home-card-1.jpg';
import c2 from '../../images/home2.jpg';
import c3 from '../../images/home-card-3.jpg';
import c4 from '../../images/home-card-4.jpg';
import c5 from '../../images/home-card-5.jpg';
import c6 from '../../images/home-card-6.jpg';

// Import the CSS module
import styles from './painting.module.css'; 

function Mypainting() {
    return (
        <>
            <section className={`ms-5 ps-5 me-5 col-lg-12 ${styles.container2}`}>
                <Row>
                    <Col lg="12">
                        <p className="text-center mt-5 mb-5" style={{ fontSize: "45px", fontWeight: "500" }}>My Paintings</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-lg-4 col-md-6 col-sm-12 ms-auto">
                        <Card style={{ width: "350px", height: "400px" }} className={`ms-3 ${styles['card-2']}`}>
                            <Card.Img variant="top" src={c1} className={`${styles['custom-card-img']} ${styles['card-1']} img-fluid ${styles['img-card']}`} />
                            <Card.Body >
                                <Card.Title className={`text-warning ${styles['card-txt2']}`}>Sea Storm</Card.Title>
                                <Card.Text className={`text-secondary ${styles['card-txt3']}`}>
                                    This painting is one of my latest works on sea and ocean topics.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="col-lg-4 col-md-6 col-sm-12">
                        <Card style={{ width: "350px", height: '100px' }} className={styles['card-2']}>
                            <Card.Img variant="top" src={c2} className={`${styles['custom-card-img']} ${styles['card-1']} img-fluid ${styles['img-card-1']}`} />
                            <Card.Body>
                                <Card.Title className={`text-warning ${styles['card-txt2']}`}>Ruins of Ancient Fortress</Card.Title>
                                <Card.Text className={`text-secondary ${styles['card-txt3']}`}>
                                    When I’ve been to Scotland, I made this painting just in a day.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="pe-2 col-lg-4 col-md-6 col-sm-12 ">
                        <Card style={{ width: "350px", height: '100px' }} className={styles['card-2']} >
                            <Card.Img variant="top" src={c3} className={`${styles['custom-card-img']} ${styles['card-1']} img-fluid ${styles['img-card']}`} />
                            <Card.Body>
                                <Card.Title className={`text-warning ${styles['card-txt2']}`}>Two Lovers</Card.Title>
                                <Card.Text className={`text-secondary ${styles['card-txt3']}`}>
                                    This work was finished in two days for my customers from San Diego, CA, who needed something special.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
            <section className={`container2 ms-5 ps-5 me-5 ${styles.container2}`}>
                <Row>
                    <Col className="col-lg-4 col-md-6 col-sm-12 ms-1auto">
                        <Card style={{ width: "350px", height: '100px' }} className={`ms-3 ${styles['card-2']}`}>
                            <Card.Img variant="top" src={c4} className={`${styles['custom-card-img']} ${styles['card-1']} img-fluid ${styles['img-card']}`} />
                            <Card.Body>
                                <Card.Title className={`text-warning ${styles['card-txt1']}`}>Watercolor Portrait</Card.Title>
                                <Card.Text className={`text-secondary ${styles['card-txt3']}`}>
                                    Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-sm-12">
                        <Card style={{ width: "350px", height: '100px' }} className={styles['card-2']}>
                            <Card.Img variant="top" src={c5} className={`${styles['custom-card-img']} ${styles['card-1']} img-fluid ${styles['img-card-1']}`} />
                            <Card.Body>
                                <Card.Title className={`text-warning ${styles['card-txt2']}`}>Birches in Autumn</Card.Title>
                                <Card.Text className={`text-secondary ${styles['card-txt3']}`}>
                                    I love painting autumn trees and this work is a perfect example.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="pe-2 col-lg-4 col-md-6 col-sm-12 ">
                        <Card style={{ width: "350px", height: '100px' }} className={styles['card-2']}>
                            <Card.Img variant="top" src={c6} className={`${styles['custom-card-img']} ${styles['card-1']} img-fluid ${styles['img-card']}`} />
                            <Card.Body>
                                <Card.Title className={`text-warning ${styles['card-txt2']}`}>Green Landscape</Card.Title>
                                <Card.Text className={`text-secondary ${styles['card-txt3']}`}>
                                    Another abstract work, which appeared at my last year’s exhibition, Morgan Paintings 2016.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Mypainting;
