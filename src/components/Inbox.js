import "./Inbox.css";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import CloseIcon from "@mui/icons-material/Close";

export default function Inbox({
  data,
  isCheck,
  setIsCheck,
  isViewEmail,
  setIsViewEmail,
  currentEmail,
  setCurrentEmail,
}) {
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
        <div
          className="row-item"
          onClick={() => {
            handleViewEmail(element);
          }}
        >
          {element.data["sender"]}
        </div>
        <div
          className="row-item content"
          onClick={() => {
            handleViewEmail(element);
          }}
        >
          <b>{element.data["subject"]} -</b> {element.data["description"]}
        </div>
        <div
          className="row-item"
          onClick={() => {
            handleViewEmail(element);
          }}
        >
          {element.data["date"]}
        </div>
      </>
    );
  };
  const handleViewEmail = (element) => {
    setIsViewEmail(true);
    setCurrentEmail(element);
  };

  const handleClose = () => {
    setIsViewEmail(false);
  };
  const ViewEmailContent = () => {
    // console.log()
    return (
      <div className="email-view-container">
        <div className="align-icon">
          <h3>Sub: {currentEmail.data["subject"]}</h3>
          <CloseIcon onClick={handleClose} />
        </div>

        <h4>From: {currentEmail.data["sender"]}</h4>
        <div className="description-item">
          Hi,
          <br />
          {currentEmail.data["description"]}
        </div>
      </div>
    );
  };

  return (
    <>
      {isViewEmail ? (
        <ViewEmailContent />
      ) : (
        <div className="parent">
          {currentPageRows.map((element, index) => {
            return <MockData key={index} data={element} />;
          })}
        </div>
      )}

      {isViewEmail === false ? (
        data.length > 0 ? (
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        ) : (
          <div className="empty">Empty</div>
        )
      ) : (
        <></>
      )}
    </>
  );
}
