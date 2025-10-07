import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { BookList } from '../Components/BookList';
import './css/Projects.css';
import PaginationList from "../Components/PaginationList";

export default function Books() {
    const [activePage, setActivePage] = useState(1);
    const booksPerPage = 3;
    const usePagination = false;
    const totalPages = Math.ceil(BookList.length / booksPerPage);
    const startIndex = (activePage - 1) * booksPerPage;
    const currentBooks = usePagination ?BookList.slice(startIndex,startIndex+booksPerPage): BookList;
    return (
        <section className="projectSection">
            <Container>
                <Row>
                    {currentBooks.map(book => (
                        <Col md={6} lg={4} className="mb-4" >
                            <Card key={book.id} className="h-100 shadow-sm text-light">
                                <Card.Body>
                                    <h3>{book.bookName}</h3>
                                    <Card.Text className="text-white">{book.description}</Card.Text>
                                </Card.Body>
                             </Card>
                        </Col>
                    ))}
                </Row>

            </Container>

            {usePagination && <PaginationList
                totalItems={BookList.length}
                itemsPerPage={booksPerPage}
                activePage={activePage}
                setActivePage={setActivePage}
                />
            }
        </section>
    );
}