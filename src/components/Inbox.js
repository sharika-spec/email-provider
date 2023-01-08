import "./Inbox.css";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

export default function Inbox({ data, isCheck, setIsCheck }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPageRows = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleCheckboxClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  
  useEffect(() => {
    console.log(isCheck);
  }, [isCheck]);

  const MockData = (element) => {
    return (
      <>
        <div className="row-item">
          <input
            type="checkbox"
            onChange={handleCheckboxClick}
            id={element.data["id"]}
            checked={isCheck.includes(String(element.data["id"]))}
            className="smallCheckbox"
          />
        </div>
        <div className="row-item">{element.data["sender"]}</div>
        <div className="row-item content">
          <b>{element.data["subject"]} -</b> {element.data["description"]}
        </div>
        <div className="row-item">{element.data["date"]}</div>
      </>
    );
  };
  return (
    <>
      <div className="parent">
        {currentPageRows.map((element, index) => {
          return <MockData key={index} data={element} />;
        })}
      </div>
      {data.length > 0 ? (
        <Pagination
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      ) : (
        <div className="empty">Empty</div>
      )}
    </>
  );
}
