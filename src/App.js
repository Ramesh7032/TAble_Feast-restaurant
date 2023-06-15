import React, { useState } from 'react';
import './App.css';
import Pizza from './components/Pizza';
import Veg from './components/Veg';
import Nonveg from './components/Nonveg';
import Drinks from './components/Drinks'
import Main from './components/Main'
import Orders from './components/Orders';
import { Routes,Route } from 'react-router-dom';

function App() {

  const [item, setItem] = useState([]);
  const [table, setTable] = useState(0);
  console.log(item)
  return (
    <div>
      <Routes>
          <Route path='/react_restaurant' element={<Main table={table} setItem={setItem} setTable={setTable} />} />
          <Route path='/react_restaurant/pizza' element={<Pizza table={table} setItem ={setItem}/>}/>  
          <Route path='/react_restaurant/veg' element={<Veg table={table} setItem ={setItem}/>}/>
          <Route path='/react_restaurant/nonveg' element={<Nonveg table={table} setItem={setItem}/>}/>
          <Route path='/react_restaurant/drinks' element={<Drinks table={table} setItem={setItem}/>}/>  
          <Route path='/react_restaurant/orders' element={<Orders item={item}/>}/>
    </Routes>
    
    </div>
    
    
    
    

  );
}

export default App;