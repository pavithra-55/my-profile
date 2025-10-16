import React from "react";
import { Container,Card,Row,Col,Form,Button } from "react-bootstrap";
import './css/Contact.css';

export default function Contact() {
    const accentColor = {
        '--bs-btn-bg': 'var(--accent)',
        '--bs-btn-border-color': 'var(--accent)',
        '--bs-btn-hover-bg': '#44aead',
        '--bs-btn-hover-border-color': '#44aead',
        color: '#082b2a',
        };

    return (
        <section className="contactSection" >
            <Container>
                <Row>
                    <Col lg={6}>
                        <Card className=" p-4 h-100">
                            <Card.Title style={{color:'var(--accent)'}} className="m-2">ContactInfo</Card.Title>
                            <Card.Body>
                                <ul className="list-unstyled p-4 light-text">
                                    <li className="mb-2"><i className="bi bi-envelope me-2"></i> pavithra@email.com</li>
                                    <li className="mb-2"><i className="bi bi-telephone me-2"></i> +91 96883 37366</li>
                                    <li className="mb-2"><i className="bi bi-geo-alt me-2"></i> Coimbatore, India</li>
                                </ul>
                                <div className="d-flex gap-3 fs-5">
                                    <a className="light-text" href="https://github.com/pavithra-55" aria-label="GitHub" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                                    <a className="light-text" href="https://www.linkedin.com/in/pavithra1755ns" aria-label="LinkedIn" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                                    <a className="light-text" href="https://leetcode.com/u/Pavi_55/" aria-label="Leetcode" target="_blank" rel="noreferrer"><i className="bi bi-code-slash"></i></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className=" contact-card p-4 h-100">
                            <Form>
                                <Form.Group className="mb-3" controlId="formGridName">
                                    <Form.Label className="light-text">Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridEmail">
                                    <Form.Label className="light-text">Email</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="floatingTextarea">
                                    <Form.Label className="light-text">Message</Form.Label>
                                    <Form.Control as="textarea" />
                                </Form.Group>
                                <Button style={accentColor}><i className="bi bi-send me-2"></i> Send
                                Message</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}