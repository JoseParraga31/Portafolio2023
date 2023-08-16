const servicios = [
    {
    categoria:"servicio", 
    nombre: "Desarrollo web", 
    descripcion: "Pelota Dura de Soga Trenzada, Nudo De Juguete Para Perros y otras Mascotas",
    img:"/Soga2Nudos.jpg", 
    precio:600, 
    precioTotal:600,
    cantidad:1 , 
    stock:10,
    id:1
    }
]


export const getProducts = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(productos);
                    
                }, 2000);
            });
          }
      
      export default { productos }