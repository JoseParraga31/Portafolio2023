
import Description from "./Description";
import ImgResponsivo  from "./ImgResponsivo";
import ItemListContainer from "./ItemListContainer";
import WhatsappBtn from "./WhatsappBtn";

function Home() {
  return (
    <div className="App">
        <Description></Description>
        <ImgResponsivo></ImgResponsivo>
        <ItemListContainer></ItemListContainer>
        <WhatsappBtn></WhatsappBtn>
    </div>
  );
}

export default Home;