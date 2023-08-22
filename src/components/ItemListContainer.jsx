import React from 'react'
import { useState, useEffect } from "react";
import "../assets/css/ItemListContainer.css"
import ItemList from './ItemList';
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs } from "firebase/firestore";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

function ItemListContainer()  {

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
  const [serv, setServ]= useState([])
  
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
  return (
    <div>
        <div className="items__container">
        <ItemList serv={serv}></ItemList>
        </div>    
    </div>
  )
}


export default ItemListContainer
