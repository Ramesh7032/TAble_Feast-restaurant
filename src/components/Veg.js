import React from 'react'
import veg2 from './veg/basmathi rice.avif'
import veg3 from './veg/curdrice.webp'
import veg1 from './veg/images.jpeg'
import veg4 from './veg/Chole Bhature-min.jpg'

import veg6 from './veg/parantha.webp'
import veg7 from './veg/veg friedrice.jpg'
import veg8 from './veg/veg manchuria.jpg'
import veg9 from './veg/panner.jpeg'




export default function Veg({setItem, table}) {

    function itemClicked(name, price,image){
        const data = {
            name:name,
            price:price,
            image:image,
            table:table
        }
        if(table !==0){
        setItem(old => [...old, data])
        alert("Order successfully added")}
        else{
            alert("Please select your table")

            console.log("data sent to App.js")}
    }

  return (
    <div className='pizza1' style={{paddingTop:'80px'}}>
         <h2 className='ramesh2'>Veg Items</h2>
        <div className='container'>
            <div className='card'>
                <div className='image-div'>
                    <img  src={veg2} alt='react logo'/>
                </div>
                <h3>Veg Biryani Rice</h3>
                <h3>Rs: 210</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Veg Biryani Rice", 210, veg2)}> Order</button>
                </div>
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={veg3} alt='react logo'/>
                </div>
                <h3>Curd Rice</h3>
                <h3>Rs: 120</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Curd Rice", 120, veg3)}> Order</button>
                </div>
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={veg1} alt='react logo'/>
                </div>
                <h3>Veg Meals</h3>
                <h3>Rs: 300</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Veg Meals", 250, veg1)}> Order</button>
                </div>
            </div>


            <div className='card'>
                <div className='image-div'>
                    <img  src={veg4} alt='react logo'/>
                </div>
                <h3>Chole Bhature</h3>
                <h3>Rs: 160</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Chole Bhature", 160, veg4)}> Order</button>
                </div>
            </div>


            

            <div className='card'>
                <div className='image-div'>
                    <img  src={veg6} alt='react logo'/>
                </div>
                <h3>Veg Parantha</h3>
                <h3>Rs: 130</h3>
                <div className='card-btn'>
                    <button type='button'onClick={() => itemClicked("veg parantha", 130, veg6)}> Order</button>
                </div>
            </div>


            <div className='card'>
                <div className='image-div'>
                    <img  src={veg7} alt='react logo'/>
                </div>
                <h3>Veg Fried rice</h3>
                <h3>Rs: 120</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("veg Fried Rice", 120, veg7)}> Order</button>
                </div>
            </div>


            <div className='card'>
                <div className='image-div'>
                    <img  src={veg8} alt='react logo'/>
                </div>
                <h3>Veg Manchuria</h3>
                <h3>Rs: 130</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Veg Mancuria", 130, veg8)}> Order</button>
                </div>
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={veg9} alt='react logo'/>
                </div>
                <h3>panner Roti</h3>
                <h3>Rs: 180</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("panner Roti", 180, veg9)}> Order</button>
                </div>
            </div>



        </div>
    </div>
  )
}
