import "../assets/css/App.css"
import NavBar from "../components/NavBar"
import Description from "../components/Description";
import ImgResponsivo  from "../components/ImgResponsivo";
import ItemListContainer from "../components/ItemListContainer";
import Footer from "../components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Description></Description>
      <ImgResponsivo></ImgResponsivo>
      <ItemListContainer></ItemListContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
