import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ProductDetails  ({products})  {
    //1.Grab the dynamic ID from the URL
    const {id} = useParams();

    //2.Find the product in the array that matches this ID
    //(we use Number() because the URL ID is a string!)
    const product  = products.find(p=> p.id === Number(id));

// If products haven't loaded from the fake API yet
  if (products.length === 0) return <h2>Loading product details...</h2>;

  // If products loaded, but this specific ID doesn't exist
  if (!product) return <h2>Product not found...</h2>;

  return (
    <div style={{padding:"20px"}}>
        <Link to="/"> Back to Store</Link>
        <h1>{product.title}</h1>
        <img src={product.img} alt={product.title} width="400"/>
        <p>{product.description}</p>
        <h2>{product.price}</h2>
    </div>
  )
}

