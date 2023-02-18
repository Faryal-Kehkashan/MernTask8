import "./App.css";
import Message from "./Components/Message.js";
import Buttons from "./Components/Button.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message isSuccess={true} />
        <Buttons />
      </header>
    </div>
  );
}

export default App;
