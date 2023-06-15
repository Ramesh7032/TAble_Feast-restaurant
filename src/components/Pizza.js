import React from 'react'

import './Pizza.css';
import Pizza1 from './pizza/aussie pizza.webp';
import pizza2 from './pizza/bbq chicken pizza.webp';
import pizza3 from './pizza/cheese n corn.webp';
import pizza4 from './pizza/farmhouse pizza.webp';
import pizza5 from './pizza/pappy panner pizza.webp';
import pizza6 from './pizza/potato pizza.webp';
import pizza7 from './pizza/mashrooms pizza.jpg';
import pizza8 from './pizza/chickenpizza.jpg';


export default function Pizza({setItem , table}) {

    function itemClicked(name, price, image){
        const data = {
            name:name,
            price:price,
            image:image,
            table:table,
        }
        if(table !== 0){
            setItem(old => [...old, data]);
            alert("Order placed successfully")
        }
        else {
            alert("Please select a table")
        }
    }

  return (
    <div className='pizza1' style={{paddingTop:'30px'}}>
         <h2 className='ramesh2'>Pizza Items</h2>
        <div className='container'>
            <div className='card'>
                <div className='image-div'>
                    <img  src={Pizza1} alt='react logo'/>
                </div>
                <h3>Aussie Pizza</h3>
                <h3>Rs: 300</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Aussie Pizza", 300, Pizza1)} > Order</button>
                </div>
                
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={pizza2} alt='react logo'/>
                </div>
                <h3>BBQ chicken Pizza</h3>
                <h3>Rs: 350</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("BBQ chicken Pizza", 350, pizza2)}> Order</button>
                </div>
                
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={pizza3} alt='react logo'/>
                </div>
                <h3>Cheeze n-corn Pizza</h3>
                <h3>Rs: 270</h3>
                <div className='card-btn'>
                    <button type='button'  onClick={() => itemClicked("Cheeze n-corn Pizza", 270, pizza3)}> Order</button>
                </div>
                
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={pizza4} alt='react logo'/>
                </div>
                <h3>Farmhouse Pizza</h3>
                <h3>Rs: 320</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Farmhouse Pizza", 320, pizza4)}> Order</button>
                </div>
                
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={pizza5} alt='react logo'/>
                </div>
                <h3>Pappy panner Pizza</h3>
                <h3>Rs: 360</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Pappy panner Pizza",360,pizza5)}> Order</button>
                </div>
                
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={pizza6} alt='react logo'/>
                </div>
                <h3>Potato pizza Pizza</h3>
                <h3>Rs: 240</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Potato pizza Pizza",240,pizza6)}> Order</button>
                </div>
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={pizza7} alt='react logo'/>
                </div>
                <h3>Mashrooms pizza</h3>
                <h3>Rs: 250</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Mashrooms pizza",250,pizza7)}> Order</button>
                </div>
                
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={pizza8} alt='react logo'/>
                </div>
                <h3>Chicken Pizza</h3>
                <h3>Rs: 360</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Chicken Pizza",360,pizza8)}> Order</button>
                </div>
                
            </div>
        
          
        </div>
    </div>
  )
}

