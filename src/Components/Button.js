import "./Buttons.css";

function Buttons() {
  const clickHandler = (e) => {
    alert("Hi! You just cliked the button.");
  };
  const clickHandlerTwo = () => {
    console.log("hello this is handler function 2- message");
  };
  return (
    <>
      <button
        className="btn1"
        onClick={(e) => {
          clickHandler(e);
        }}
      >
        Click me
      </button>
      <button
        className="btn2"
        onClick={(e) => {
          clickHandlerTwo(e);
        }}
      >
        Click Here
      </button>
    </>
  );
}

export default Buttons;
