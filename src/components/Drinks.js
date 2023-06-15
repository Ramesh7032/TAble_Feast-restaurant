import React from 'react'
import d1 from './drinks/frozen lemonade.webp'
import d2 from './drinks/coca cola.webp'
import d3 from './drinks/mango juice.jpg'
import d4 from './drinks/pine apple juice.jpg'
import d5 from './drinks/sprite.webp'
import d6 from './drinks/sweet lassi.jpg'
import d7 from './drinks/watermelon juice.jpg'
import d8 from './drinks/apple juice.jpg'



export default function Drinks({setItem, table}) {



    function itemClicked(name, price,image){
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
           
        console.log("data sent to App.js")
        
    }
  return (
    <div className='drinks1' style={{paddingTop:'80px'}}>
         <h2 className='ramesh2'>Drink Items</h2>
        <div className='container'>
           
            <div className='card'>
                <div className='image-div'>
                    <img  src={d1} alt='react logo'/>
                </div>
                <h3>frozen lemanade</h3>
                <h3>Rs: 140</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("frozen lemando", 140, d1)} > Order</button>
                </div>
            </div>


            <div className='card'>
                <div className='image-div'>
                    <img  src={d2} alt='react logo'/>
                </div>
                <h3>Coca cola</h3>
                <h3>Rs: 80</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Coca cola", 80, d2)} > Order</button>
                </div>
            </div>


            <div className='card'>
                <div className='image-div'>
                    <img  src={d3} alt='react logo'/>
                </div>
                <h3>Mango juice</h3>
                <h3>Rs: 70</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Mango Juice",70,d3)} > Order</button>
                </div>
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={d4} alt='react logo'/>
                </div>
                <h3>Pine apple</h3>
                <h3>Rs: 75</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Pine Apple",75,d4)}> Order</button>
                </div>
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={d5} alt='react logo'/>
                </div>
                <h3>Sprite</h3>
                <h3>Rs: 70</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Sprite",70,d5)}> Order</button>
                </div>
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={d6} alt='react logo'/>
                </div>
                <h3>Sweet Lassi</h3>
                <h3>Rs: 140</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Sweet Lassi",140,d6)}> Order</button>
                </div>
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={d7} alt='react logo'/>
                </div>
                <h3>watermelon juice</h3>
                <h3>Rs: 80</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("watermelon juice",80,d7)}> Order</button>
                </div>
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={d8} alt='react logo'/>
                </div>
                <h3>Apple Juice</h3>
                <h3>Rs: 90</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Apple Juice",90,d8)} > Order</button>
                </div>
            </div>

        </div>
    </div>
  )
}
