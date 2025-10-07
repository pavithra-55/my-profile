import React from "react";
import { Container, Row, Col, Button,Image } from 'react-bootstrap';
import aboutImage from './assets/img/about3.png';
import Resume from './assets/pdf/Pavithra-frontend.pdf';
import './css/About.css';

export default function About() {
    const accentColor = {
        '--bs-btn-bg': 'var(--accent)',
        '--bs-btn-border-color': 'var(--accent)',
        '--bs-btn-hover-bg': '#44aead',
        '--bs-btn-hover-border-color': '#44aead',
        color: '#082b2a',
        };
    return (
        <section id="about" className="aboutSection">
            <Container>
                <Row>
                    <Col lg='6'>
                        <Image src={aboutImage} alt="About Image" className="about-img"/>
                    </Col>
                    <Col lg='6' className="py-3">
                        <h2 className="heading2 text-center h1 mb-3">About</h2>
                        <p className="mb-3">
                        Frontend Developer with 2+ years of experience in web development, skilled in <span
                            className="fw-semibold">React,
                            JavaScript, HTML, CSS, and
                            Bootstrap.</span> Previously worked with PHP & Laravel on backend projects, now specializing in creating
                        modern,
                        responsive,
                        and user-friendly interfaces. Passionate about building accessible and performant web applications,
                        optimizing
                        UI/UX,
                        and collaborating with cross-functional teams.
                        </p>
                        <a href={Resume} target="_blank"><Button style={accentColor}><i className="bi bi-file-earmark-text me-2"></i>View my
                        CV</Button></a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}