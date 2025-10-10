import React from "react";
import { Pagination } from "react-bootstrap";


function PaginationList({ totalItems, itemsPerPage, activePage, setActivePage }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null; // hide if only one page

  const items = [];
  for (let num = 1; num <= totalPages; num++) {
    items.push(
      <Pagination.Item
        key={num}
        active={num === activePage}
        onClick={() => setActivePage(num)}
      >
        {num}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="justify-content-center mt-3 mb-5 w-1">
      <Pagination.First onClick={() => setActivePage(1)} disabled={activePage === 1} />
      <Pagination.Prev onClick={() => setActivePage(activePage - 1)} disabled={activePage === 1} />
      {items}
      <Pagination.Next onClick={() => setActivePage(activePage + 1)} disabled={activePage === totalPages} />
      <Pagination.Last onClick={() => setActivePage(totalPages)} disabled={activePage === totalPages} />
    </Pagination>
  );
}

export default PaginationList;
