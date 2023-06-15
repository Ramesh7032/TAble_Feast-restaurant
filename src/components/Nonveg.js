import React from 'react'
import nonveg1 from './nonveg/chicken biryani.webp'
import nonveg2 from './nonveg/fish biryani.jpg'
import nonveg3 from './nonveg/mutton biryani.jpg'
import nonveg4 from './nonveg/prans.jpeg'
import nonveg5 from './nonveg/chicken tandoori.jpg'
import nonveg6 from './nonveg/raagi sankati naatu kodi.jpeg'
import nonveg7 from './nonveg/butter chicken.avif'
import nonveg8 from './nonveg/chicken lollipop.JPG'
import nonveg9 from './nonveg/chicken 65.cms'

export default function Nonveg({setItem , table}) {

    function itemClicked(name, price,image){
        const data = {
            name:name,
            price:price,
            image:image,
            table:table,
        }
        if(table !==0){
            alert("Order placed successfully")
        setItem(old => [...old, data])
        }
        else{
            alert("please select your table")
        }

        console.log("data sent to App.js")
    }
  return (
    <div className='nonveg1' style={{paddingTop:'80px'}}>
         <h2 className='ramesh2'>Nonveg Items</h2>
        <div className='container'>
        <div className='card'>
                <div className='image-div'>
                    <img  src={nonveg1} alt='react logo'/>
                </div>
                <h3>Chicken Biryani</h3>
                <h3>Rs: 250</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Chicken Biryani", 250, nonveg1)}> Order</button>
                </div>
                
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={nonveg2} alt='react logo'/>
                </div>
                <h3>Fish Biryani</h3>
                <h3>Rs: 180</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Fish Biryani", 180, nonveg2)}> Order</button>
                </div>
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={nonveg3} alt='react logo'/>
                </div>
                <h3>Mutton Biryani</h3>
                <h3>Rs: 300</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Mutton Biryani", 300, nonveg3)} > Order</button>
                </div>
                
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={nonveg4} alt='react logo'/>
                </div>
                <h3>prans</h3>
                <h3>Rs: 200</h3>
                <div className='card-btn'>
                    <button type='button'onClick={() => itemClicked("Prans", 200, nonveg4)} > Order</button>
                </div>
                
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={nonveg5} alt='react logo'/>
                </div>
                <h3>Chicken Tandoori</h3>
                <h3>Rs: 275</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Chicken Tandoori", 275, nonveg5)}> Order</button>
                </div>
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={nonveg6} alt='react logo'/>
                </div>
                <h3>Ragi sankati & Natu kodi</h3>
                <h3>Rs: 375</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Ragi sankati & Natu kodi", 375, nonveg6)}> Order</button>
                </div>
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={nonveg7} alt='react logo'/>
                </div>
                <h3>Butter Chicken</h3>
                <h3>Rs: 180</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Butter Chicken", 180, nonveg7)}> Order</button>
                </div>
            </div>


            <div className='card'>
                <div className='image-div'>
                    <img  src={nonveg8} alt='react logo'/>
                </div>
                <h3>Chicken lollipop</h3>
                <h3>Rs: 230</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Chicken Lollipop", 230, nonveg8)}> Order</button>
                </div>
            </div>

            <div className='card'>
                <div className='image-div'>
                    <img  src={nonveg9} alt='react logo'/>
                </div>
                <h3>Chicken-65</h3>
                <h3>Rs: 250</h3>
                <div className='card-btn'>
                    <button type='button' onClick={() => itemClicked("Chicken-65", 250, nonveg9)}> Order</button>
                </div>
            </div>

        </div>
        <br></br>
        <br></br>
    </div>


  )
}
