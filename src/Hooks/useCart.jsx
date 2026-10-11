import {React, useState, useEffect} from 'react'


const useCart = () => {
     const [cartCount, setCartCount] = useState(()=>{
        const savedCart = localStorage.getItem("my-react-cart");
        //If a save file exists, parse the string back into an array, otherwise, return an empty array.
        return savedCart ? JSON.parse(savedCart) :[];
      });

       useEffect(() => {
    //We must turn the array into a string before saving 
    localStorage.setItem("my-react-cart", JSON.stringify(cartCount));
  }, [cartCount]);

  function handleAddToCart(item) {
    // setCartCount((prev) => prev + 1);
    setCartCount((prev)=>[...prev,item]);
  }

  function handleRemoveFromCart(indexToRemove){
    //We use _ for the first parameter because we dont care about the item itself, we only care about the index position.
    const newCart = cartCount.filter((_, index)=> index!==indexToRemove);
    setCartCount(newCart);
  }
  return {cartCount, handleAddToCart, handleRemoveFromCart}

  
}

export default useCart