 const servicios = [
    {
    categoria:"servicio", 
    titulo: "Desarrollo web", 
    descripcion: "Desarollamos tu sitio web en las tecnologias mas agiles del mercado, especialistan en E-Comerce, entre otros modelos de negocios digitales",
    img:"/src/assets/multimedia/images/development.png", 
    id:1
    },
    {
        categoria:"servicio", 
        titulo: "Ux / Ui", 
        descripcion: "Diseño personalizado para tu web, siguiendo las ultimas tendencia del mercado, lleva con nosotros a otro nivel la experiencia de tus usuarios",
        img:"/src/assets/multimedia/images/interfaz-de-usuario.png", 
        id:2
        },
    {
        categoria:"servicio", 
        titulo: "Google y meta Ads", 
        descripcion: "llega efectivamente a tu cliente ideal, maximisa tus ventas con los mejores asesores en las Ads del momento",
        img:"/src/assets/multimedia/images/publicidad-digital.png", 
        id:3
        },  
] 


export const getProducts = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(servicios);
                    
                }, 2000);
            });
          }
      
export default { servicios }