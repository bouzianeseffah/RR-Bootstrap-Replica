
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/TopBar";
import Background from "./components/BackGround";
import Columns from "./components/StoreListing";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>;

function App() {
  return (
    <div className="App">
      <Navbars />
      <Background />
      <Columns />
    </div>
  );
}

export default App;