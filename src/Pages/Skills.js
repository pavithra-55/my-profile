import React from "react";
import { Container, Row, Col, Card,ProgressBar  } from "react-bootstrap";
import './css/Skills.css';

export default function Skills() {
    return (
        <section id="skills" className="skillSection">
            <Container>
                <h2 className="h1 text-center mb-4">Skills</h2>
                <Row>
                    <Col md='6'>
                        <Card>
                            <Card.Body>
                                <h3>Frontend</h3>
                                    <div className="mb-3 light-text">
                                        <div className="d-flex justify-content-between"><span>HTML5</span><span>90%</span></div>
                                        <ProgressBar variant="info" now={90} />
                                </div>
                                <div className="mb-3 light-text">
                                        <div className="d-flex justify-content-between"><span>CSS</span><span>85%</span></div>
                                        <ProgressBar variant="info" now={85} />
                                </div>
                                <div className="mb-3 light-text">
                                        <div className="d-flex justify-content-between"><span>JavaScript</span><span>80%</span></div>
                                        <ProgressBar variant="info" now={80} />
                                </div>
                                <div className="mb-3 light-text">
                                        <div className="d-flex justify-content-between"><span>ReactJS</span><span>90%</span></div>
                                        <ProgressBar variant="info" now={90} />
                                    </div>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col md='6'>
                        <Card>
                            <Card.Body>
                                <h3>Tools</h3>
                                    <div className="mb-3 light-text">
                                        <div className="d-flex justify-content-between"><span>Visual Studio Code</span><span>90%</span></div>
                                        <ProgressBar variant="info" now={90} />
                                </div>
                                <div className="mb-3 light-text">
                                        <div className="d-flex justify-content-between"><span>Git / GitHub</span><span>70%</span></div>
                                        <ProgressBar variant="info" now={70} />
                                </div>
                                <div className="mb-3 light-text">
                                        <div className="d-flex justify-content-between"><span>FileZilla</span><span>80%</span></div>
                                        <ProgressBar variant="info" now={80} />
                                </div>
                                <div className="mb-3 light-text">
                                        <div className="d-flex justify-content-between"><span>Canva</span><span>65%</span></div>
                                        <ProgressBar variant="info" now={65} />
                                    </div>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}