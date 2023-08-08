import "../assets/css/App.css"
import NavBar from "../components/NavBar"
import Description from "../components/Description";
import ImgResponsivo  from "../components/ImgResponsivo";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Description></Description>
      <ImgResponsivo></ImgResponsivo>

    </div>
  );
}

export default App;
