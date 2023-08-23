import "../assets/css/App.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Home from "../components/Home"
import SobreMi from "../components/SobreMi";
import Portafolio from "../components/Portafolio";
import ItemDetail from "../components/ItemDetail";
import WhatsappBtn from "../components/WhatsappBtn";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/SobreMi" element={<SobreMi/>} ></Route>
          <Route path="/portafolio" element={<Portafolio/>}></Route>
          <Route path="Home/serviceDetail/:id" element={<ItemDetail/>}> </Route>
        </Routes>
        <WhatsappBtn></WhatsappBtn>
        <Footer></Footer>
      </BrowserRouter>  
    </div>
  );
}

export default App;
