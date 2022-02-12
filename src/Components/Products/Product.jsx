import React from "react";
import { useSelector } from 'react-redux';

 export const Product =() =>{
     const selectorData = useSelector((state)=>state.ProductData.data);
     return(
         <div>
             {selectorData.map((item)=>{
             return(
                 
             <div kye= {item.id}>
                 <h1>{item.title}</h1>
                 <img src= {item.img} alt="" />
                 <p>{item.price}</p>
                 <p>{item.desc}</p>

             </div> 
             )
 })}
         </div>
     )
 }