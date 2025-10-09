import React from "react";
import './css/Home.css';
import {Container, Row, Col,Button,Image} from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import profileImage from './assets/img/home2.png';
import { Link } from "react-router-dom";

export default function Home() {
    const accentColor = {
        '--bs-btn-bg': 'var(--accent)',
        '--bs-btn-border-color': 'var(--accent)',
        '--bs-btn-hover-bg': '#44aead',
        '--bs-btn-hover-border-color': '#44aead',
        color: '#082b2a',
        };
    return (
        <div className="hero section" id="hero">
            <Container>
                <Row className="align-items-center">
                    <Col lg='6' className="text-lg-start text-center">
                        <h1>Hi, I'm <span className="names">Pavithra</span></h1>
                        <p>Frontend Developer | responsive interfaces with <span className="fw-semibold">HTML, CSS,
                            Bootstrap, JavaScript, ReactJS.</span></p>
                        <Link to="/contact"><Button style={accentColor}><i className="bi bi-envelope me-2"></i>Hire me</Button></Link>
                        <div className="gap-3 mt-4 fs-4">
                             <a className="text-decoration-none text-light link-underline p-2" rel="noreferrer" href="https://github.com/pavithra-55" aria-label="GitHub" target="_blank"><i
                            className="bi bi-github"></i></a>
                            <a className="text-decoration-none text-light link-underline p-2" rel="noreferrer" href="https://www.linkedin.com/in/pavithra1755ns" aria-label="LinkedIn" target="_blank"><i
                                    className="bi bi-linkedin"></i></a>
                            {/* <a className="text-decoration-none text-light link-underline p-2" rel="noreferrer" href="https://leetcode.com/u/Pavi_55/" aria-label="LeetCode" target="_blank"><i
                                    className="bi bi-code-slash"></i></a> */}
                        </div>
                    </Col>
                    <Col lg='6'>
                        <Image src={profileImage} className="profile"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}