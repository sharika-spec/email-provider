import "./Header.css";

function Header({
  isInbox,
  setIsInbox,
  email,
  setEmail,
  setIsValid,
  data,
  setData,
  isCheck,
  setIsViewEmail,
  isViewEmail,
  currentEmail
}) {
  const handleClick = () => {
    setIsInbox(false);
  };
  const handleSend = () => {
    setIsInbox(false);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // var validRegex =
    //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.sendTo.toLowerCase().match(mailformat)) {
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
    setIsViewEmail(false);
  };
  const handleDelete = () => {
    if(isCheck.length===0 && isViewEmail===false)
    {
      alert("Please select the checkbox")
    }
    const newRows = data.filter((element) => !isCheck.includes(String(element['id'])));
    setData(newRows);
    if(isViewEmail)
    {
      alert("Deleted");
      const newRows = data.filter((element) => element["id"] !== currentEmail.data["id"]);
      setData(newRows);
      // console.log(newRows)
      setIsViewEmail(false);
      // const newRows = rows.filter((user) => user.id !== userId);
      // setRows(newRows);
    }
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
