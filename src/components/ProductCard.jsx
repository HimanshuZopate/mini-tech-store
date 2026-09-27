import React from 'react'
import './ProductCard.css'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const ProductCard = ({img, title, price, description,onAddToCart,inStock}) => {
  const theme = useContext(ThemeContext);
  return (
    <div className='product-card' style={{ 
      border: "1px solid gray", 
      padding: "16px", 
      margin: "10px", 
      borderRadius: "8px",
      
      backgroundColor: theme === "dark" ? "#333333" : "#ffffff",
      color: theme === "dark" ? "#ffffff" : "#000000"
    }}>
        <img className='img'src={img} alt='Product'/>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{price}</h3>
        {inStock ? (<button onClick={onAddToCart}>Add To Cart</button>):(<button disabled>Out of Stock</button>)}
        
        
    </div>
  )
}

export default ProductCard