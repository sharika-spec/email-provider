import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination pagination-container">
      <ul>
        {totalPosts === 1 || currentPage === 1 ? (
          <li className="">
            <a href="!#" className="page-link disabled">
              {"<"}
            </a>
          </li>
        ) : (
          <li className="">
            <a
              onClick={() => paginate(currentPage - 1)}
              href="!#"
              className="page-link"
            >
              {"<"}
            </a>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}

        {currentPage === Math.ceil(totalPosts / postsPerPage) ? (
          <li className="">
            <a href="!#" className="page-link disabled">
              {">"}
            </a>
          </li>
        ) : (
          <li className="">
            <a
              onClick={() => paginate(currentPage + 1)}
              href="!#"
              className="page-link"
            >
              {">"}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
