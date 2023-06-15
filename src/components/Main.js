import React from "react";
 import './Main.css';
import Drinks from "./Drinks";
import Veg from './Veg'
import Nonveg from  './Nonveg'
import Pizza from "./Pizza";

import { Link } from "react-router-dom";

 
 export default function Main ({setItem,table, setTable}) {

    
   return (
     <div className="main1" >
      <div div className="main2">
        <div className="btn1">
        <h1 className="header1">RB Restaurant</h1>
        <Link to='/react_restaurant/orders'>
        <button className="btn">Orders</button>
        </Link>
        </div>
        
        <h2 className="main3"> Please select your table number :</h2>
        <div className="main4">
          <btn className="header2" onClick={() => setTable(1)}>1</btn>
          <btn className="header2" onClick={() => setTable(2)}>2</btn>
          <btn className="header2" onClick={() => setTable(3)}>3</btn>
          <btn className="header2" onClick={() => setTable(4)}>4</btn>
          <btn className="header2" onClick={() => setTable(5)}>5</btn>
          <btn className="header2" onClick={() => setTable(6)}>6</btn>
          <btn className="header2" onClick={() => setTable(7)}>7</btn>
          <btn className="header2" onClick={() => setTable(8)}>8</btn>
          <btn className="header2" onClick={() => setTable(9)}>9</btn>
          <btn className="header2" onClick={() => setTable(10)}>10</btn>
          <h2 className="ramesh">Table:{table}</h2> 
        </div>
       
        <div className="main5">
          <div className="select"> 
         <Link to='/react_restaurant/pizza'><button className="buttons">Pizza</button></Link>
          <Link to='/react_restaurant/veg'><button className="buttons">Veg</button></Link>
          <Link to='/react_restaurant/nonveg'><button className="buttons">Non-Veg</button></Link>
          <Link to='/react_restaurant/drinks'><button className="buttons">Drinks</button></Link>
          

        </div>
          
        </div>
      
     </div>
      <Pizza  table={table} setItem={setItem}/>
      <Veg  table={table} setItem={setItem}/>
      <Nonveg table={table} setItem={setItem}/>
      <Drinks table={table} setItem={setItem}/>

     </div>
   )
 }
 
