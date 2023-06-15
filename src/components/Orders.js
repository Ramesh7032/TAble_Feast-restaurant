import React from 'react'
import './Orders.css'



const Orders = ({item}) => {
  return (
    <div className='order2' > 
      <h1 className='order0'>Your Orders</h1>
      <div className='order'>
     {
      item.map((item,idx) => (
        <div key={idx} className='order1'> 
        <img src={item.image} alt='rfre' width={300}/>
        <h2>{item.name}</h2>
        <h3>Price- {item.price} Rs</h3>
        <h3>Table: {item.table}</h3>
        </div>
      ))
     }
    </div>
    </div>
  )
}

export default Orders