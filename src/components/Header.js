import "./Header.css";

function Header({
  isInbox,
  setIsInbox,
  email,
  setEmail,
  setIsValid,
  data,
  setData,
  isCheck
}) {
  const handleClick = () => {
    setIsInbox(false);
  };
  const handleSend = () => {
    setIsInbox(false);
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.sendTo.toLowerCase().match(validRegex)) {
      alert("Please enter a valid email address");
    } else if (email.subject.length === 0) {
      alert("Please enter subject");
    } else if (email.description.length === 0) {
      alert("Please enter a mesaage");
    } else {
      setIsValid(true);
      alert("Message Sent");
      setEmail({
        sendTo: "",
        subject: "",
        description: "",
      })
      setIsInbox(true);
    }
  };
  const handleCancel = () => {
    setIsInbox(true);
  };
  const handleDelete = () => {
    if(isCheck.length===0)
    {
      alert("Please select the checkbox")
    }
    const newRows = data.filter((element) => !isCheck.includes(String(element['id'])));
    setData(newRows);
  };
  return (
    <div className="header">
      {isInbox ? (
        <>
          <div>Inbox</div>
          <div className="btn-compose-email">
            <button className="btn" onClick={handleClick}>
              COMPOSE
            </button>
            <button className="btn" onClick={handleDelete}>
              DELETE
            </button>
          </div>
        </>
      ) : (
        <>
          <div>New Email</div>
          <div className="btn-compose-email">
            <button className="btn" onClick={handleSend}>
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
