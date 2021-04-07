import IconText from "components/IconText";
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IconText />
      </BrowserRouter>
    </div>
  );
}

export default App;
