import "./Header.css";

function Header({ isInbox, setIsInbox }) {
  const handleClick = () => {
    setIsInbox(false);
  };
  const handleCancel = () => {
    setIsInbox(true);
  };

  return (
    <div className="header">
      {isInbox ? (
        <>
          <div>Inbox</div>
          <button className="btn" onClick={handleClick}>
            COMPOSE
          </button>
        </>
      ) : (
        <>
          <div>New Email</div>
          <div className="btn-compose-email">
            <button className="btn" onClick={handleClick}>
              SEND
            </button>
            <button className="btn" onClick={handleCancel}>
              CANCEL
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
