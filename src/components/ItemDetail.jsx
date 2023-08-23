import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore,collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "../assets/css/ItemDetail.css"
import ButtonContacto from './ButtonContacto';

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
    console.log('====================================');
    console.log(serv);
    console.log('====================================');
    
        useEffect(()=>{
            getServiceid(id)
          },[id])

    const getServiceid = async (id) =>{
        try{
    
          const collectionRef = collection(db, "servicios");
          const snapShot = await getDocs(collectionRef)
          const serviciosFb = snapShot.docs.map((d) =>({id: d.id, ...d.data()}))
          const servId = serviciosFb.find(s => s.id == id) 
          setServ(servId)
          
         
    
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
                    {serv.titulo}
                </h1>
            </div>
            <div className="ItemDetail__Intro">
                <p className="Intro__ItemDetail">
                    {serv.Intro}
                </p>
            </div>
            <div className="ItemDetail__img">
                <img className='img__ItemDetail' src={serv.imgDetail} alt={serv.titulo} />
            </div>
            <div className="ItemDetail__SubTitulo">
                <h2 className="SubTitulo__ItemDetail">
                    {serv.SubTitulo}
                </h2>
            </div>

            <div className="ItemDetail__Desarrollo">
                <ul className="Desarrollo__ItemDetail">
                    <li className="Desarrollo__item--A">{serv.Desarrollo1A}</li>
                    <br></br>
                    <li className="Desarrollo__item--B">{serv.Desarrollo1B}</li>
                    <br></br>
                    <li className="Desarrollo__item--C">{serv.Desarrollo1C}</li>
                    <br></br>
                    <li className="Desarrollo__item--D">{serv.Desarrollo1D}</li>
                    <br></br>
                </ul>
            </div>
            <div className="ItemDetail__SubTitulo2">
                <h2 className="SubTitulo__ItemDetail2">
                    {serv.SubTitulo2}
                </h2>
            </div>
            <div className="ItemDetail__Desarrollo2">
                <ul className="Desarrollo__ItemDetail2">
                    <li className="Desarrollo__item2--A">{serv.Desarrollo2A}</li>
                    <br></br>
                    <li className="Desarrollo__item2--B">{serv.Desarrollo2B}</li>
                    <br></br>
                    <li className="Desarrollo__item2--C">{serv.Desarrollo2C}</li>
                    <br></br>
                </ul> 
            </div>
            <div className="ItemDetail__Remate">
                <p className="Remate__ItemDetail">
                    {serv.Remate}
                </p>
            </div>
            <div className="IdenDetail__btn">
                <ButtonContacto></ButtonContacto>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail