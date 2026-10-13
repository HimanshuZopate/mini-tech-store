import React from 'react'
import './ProductCard.css'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
import { Link } from 'react-router-dom'

const ProductCard = ({ img, title, price, description, onAddToCart, inStock, id }) => {
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
        <img className='img' src={img} alt='Product'/>
        
      
        <Link to={`/product/${id}`} style={{ color: "inherit", textDecoration: "none" }}>
          <h2>{title}</h2>
        </Link>
        
        <p>{description}</p>
        <h3>{price}</h3>
        
        {inStock ? (
          <button onClick={() => { onAddToCart({title, price, img}) }}>Add To Cart</button>
        ) : (
          <button disabled>Out of Stock</button>
        )}
    </div>
  )
}

export default ProductCard