import "./Home.css";

export default function Home() {
  let sample = new Array(15).fill(0);

  const MockData = () => {
    return (
      <>
        <div className="row-item">
          <input type="checkbox" />
        </div>
        <div className="row-item">Lorem ipsum</div>
        <div className="row-item content">
          <b>Deserunt mollit anim id est laborum -</b> Quis commodo exercitation
          ea commodo derit in voluptate velit esse cillum dolore culpa
          officia...
        </div>
        <div className="row-item">7:05 PM</div>
      </>
    );
  };
  return (
    <div>
      <div className="parent">
        {sample.map((element, index) => {
          return <MockData key={index} />;
        })}
      </div>
    </div>
  );
}
