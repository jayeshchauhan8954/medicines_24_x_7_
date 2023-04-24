import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';


const Data= () => {
    var productList = {
        "/type/person": {
          "type": "/type/type",
          "name": "Person",
          "properties": {
            "name": {"name": "Name", "type": "string", "required": true},
            "origin": {"name": "Origin", "type": "/type/location" }
          }
        },
        "/type/location": {
          "type": "/type/type",
          "name": "Location",
          "properties": {
            "name": { "name": "Name", "unique": true, "type": "string", "required": true },
            "citizens": {"name": "Citizens", "unique": false, "type": "/type/person"}
          }
        }
      };


 
const dispatch =useDispatch()

const addToCartHandler = (options)=>{
 
  dispatch({type:"addToCart" , payload : options });
  toast.success("Added To Cart")
}

  return (
    <div className='home'>
      {productList.map((i) => (
        <ProductCard 
        key={i.id}
        // imgSrc={i.imgSrc}
        name={i.name}
        price={i.price}
        id={i.id}
        handler={addToCartHandler}
        />
        ))}
    </div>
  )
}
  const ProductCard = ({name,id,price,handler,imgSrc})=>(
    <div className='productCard'>
        <img src={imgSrc} alt={name}/>
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler({name,price,id,quantity:1, imgSrc})}>Add to Cart</button>

    </div>
  ) 

  

export default Data
