import "./ComposeEmail.css";

function ComposeEmail({ setEmail }) {
  const handleChange = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setEmail((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <div className="">
      <div className="mail-container">
        <form className="email-box">
          <input
            className="email-to email-item"
            placeholder="To"
            onChange={handleChange}
            name="sendTo"
          ></input>
          <input
            className="email-subject email-item"
            placeholder="Subject"
            onChange={handleChange}
            name="subject"
          ></input>
          <textarea
            rows="30"
            cols="60"
            name="description"
            className="email-body email-item"
            placeholder="Enter message here..."
            onChange={handleChange}
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default ComposeEmail;
