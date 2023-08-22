import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore,collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "../assets/css/ItemDetail.css"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNCnEAVuztb7Mw554clNlv7Kt3SKlb2jY",
  authDomain: "devjoseparraga-b6fee.firebaseapp.com",
  projectId: "devjoseparraga-b6fee",
  storageBucket: "devjoseparraga-b6fee.appspot.com",
  messagingSenderId: "147807644630",
  appId: "1:147807644630:web:2abd0ecddfe01a503d1277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function ItemDetail() {
    
    const {id} = useParams()
    const [serv, setServ]= useState([])

    const servId = serv.find(s => s.id == id) 


        console.log('====================================');
        console.log(servId);
        console.log('====================================');
    useEffect(()=>{
        getService()
      },[])

    const getService = async () =>{
        try{
    
          const collectionRef = collection(db, "servicios");
          const snapShot = await getDocs(collectionRef)
          const serviciosFb = snapShot.docs.map((d) =>({id: d.id, ...d.data()}))
          setServ(serviciosFb)
          console.log('====================================');
          console.log(serviciosFb);
          console.log('====================================');
         
    
        }catch (error){
          console.log(error);
        }  
      } 
 
    useEffect(()=>{
       
    },[id])

  return (
    <div>
       <div className="itemDetail__container">
        <div className="ItemDetail__titulo">
            <h1 className="titulo__ItemDetail">
                {servId.titulo}
            </h1>
        </div>
        <div className="ItemDetail__Intro">
            <p className="Intro__ItemDetail">
                {servId.Intro}
            </p>
        </div>
        <div className="ItemDetail__img">
            <img className='img__ItemDetail' src={servId.imgDetail} alt={servId.titulo} />
        </div>
        <div className="ItemDetail__SubTitulo">
            <h2 className="SubTitulo__ItemDetail">
                {servId.SubTitulo}
            </h2>
        </div>

        <div className="ItemDetail__Desarrollo">
            <p className="Desarrollo__ItemDetail">
                {servId.Desarrollo}
            </p>
        </div>
        <div className="ItemDetail__SubTitulo2">
            <h2 className="SubTitulo__ItemDetail2">
                {servId.SubTitulo2}
            </h2>
        </div>
        <div className="ItemDetail__Desarrollo2">
            <p className="Desarrollo__ItemDetail2">
                {serv.desarrollo2}
            </p>
        </div>




       </div>

    </div>
  )
}

export default ItemDetail