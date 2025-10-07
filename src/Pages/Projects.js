import React, { use, useState } from "react";
import { Container, Row, Col, Badge, Stack, Card,Modal,Pagination } from "react-bootstrap";
import './css/Projects.css';
import { projectData } from '../Components/ProjectList';
import PaginationList from "../Components/PaginationList";


export default function Projects() {
    const [show, setShow] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [proName, setProName] = useState("");
 
    //Pagination
    const [activePage, setActivePage] = useState(1);
    const projectPerPage = 3;
    const usePagination = true; //if you don't need pagination change true -> false
     
    
    //Pagination get current Projects
    const totalPages = Math.ceil(projectData.length / projectPerPage);
    const startIndex = (activePage - 1) * projectPerPage;
    const currentProjects = usePagination? projectData.slice(startIndex, startIndex + projectPerPage):projectData;

    const handleClose = () => {
            setShow(false);
            setSelectedVideo(null);
            setProName("");
        }
        const handleShow = (videoUrl,name) => {
            setShow(true);
            setSelectedVideo(videoUrl);
            setProName(name);
    }
    return (
        <div className="projectSection">
            <h1>Projects</h1>
            <Container >
                <Row>
                    {currentProjects.map(project => (
                        <Col key={project.id} md="6" lg="4" className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <div style={{ position: 'relative' }} className="play">
                                    <Card.Img src={project.image} />
                                    {project.video && (<span
                                        className="play-btn"
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            fontSize: '2rem',
                                            color: '#5bc0be',
                                            cursor: 'pointer',
                                        }}
                                    onClick={() => handleShow(project.video, project.projectName)}>
                                        <i className="bi bi-play-btn-fill"></i>
                                    </span>)}
                                </div>
                                <Card.Body>
                                    <a><h3>{project.projectName}</h3></a>
                                    <Card.Text className="text-white">{project.description}</Card.Text>
                                    <Stack direction="horizontal" gap={2}>
                                        {project.techStack.map((tech,index) => (
                                            <Badge bg="secondary" key={index}>{tech}</Badge>
                                        ))}
                                        
                                    </Stack>
                                </Card.Body>
                        </Card>
                        </Col>
                        
                        
                    ))}
                    <Modal show={show} onHide={handleClose} size="lg" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{proName &&(proName)}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {selectedVideo && (
                                <video controls autoPlay style={{ width: '100%', borderRadius: '8px' }} loop muted>
                                <source src={selectedVideo} type="video/mp4" />
                            </video>
                            )}
                            
                        </Modal.Body>
                                
                    </Modal>


                </Row>
            </Container>
            {/* Pagination  */}
            {usePagination && <PaginationList
                totalItems={projectData.length}
                itemsPerPage={projectPerPage}
                activePage={activePage}
                setActivePage={setActivePage}
            />}
        </div>
    );
}