import "./ComposeEmail.css";

function ComposeEmail() {
  return (
    <div className="">
      <div className="mail-container">
        <form className="email-box">
          <input className="email-to" placeholder="To"></input>
          <input className="email-subject" placeholder="Subject"></input>
          <textarea
            rows="30"
            cols="60"
            name="description"
            className="email-body"
            placeholder="Enter message here..."
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default ComposeEmail;
