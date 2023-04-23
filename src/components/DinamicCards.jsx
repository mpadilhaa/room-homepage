import React from 'react';
import { useState } from 'react';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import arrow from "../assets/icon-arrow.svg"



//data
import { dinamicProducts } from '../data';

//css
import "./DinamicCards.css"


const DinamicCards = () => {
  
  const [dinamicIndex, setDinamicIndex] = useState(0);

  const nextProduct = () => {
    if(dinamicIndex === dinamicProducts.length - 1) return;
    
    setDinamicIndex(dinamicIndex + 1)
  }

  const previousProduct= () => {
    if(dinamicIndex === 0) return;

    setDinamicIndex(dinamicIndex - 1);
  }

  
  

  
  
  
  return (
    <div className='container'>
    
    <div className='col-1'>
    
    
    
    <img className="img-main"src={dinamicProducts[dinamicIndex].imgMobile} alt="imagem promocional" />
    </div>
    <div className='col-2'>
      <div className='content'>
        <h1>{dinamicProducts[dinamicIndex].title}</h1>
         <p>{dinamicProducts[dinamicIndex].description}</p>

         
    <div className='shop-arrow'>
      <a className='shop' href="#home">shop now</a> 
      <img className="arrow" src={arrow} alt="arrow shop" />  

    </div>
      </div>
        <div className="btn">

        <button onClick={() => previousProduct()}><IoIosArrowBack/> </button>
        
        <button onClick={() => nextProduct()} > <IoIosArrowForward/></button>
        </div>
        </div>
</div>
         
    
  
    
  )
  };

export default DinamicCards