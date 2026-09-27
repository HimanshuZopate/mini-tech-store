import "./App.css";
import Modal from "./components/Modal";

import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const timerId = setTimeout(() => {
      const fakeDb = [
        {
          id: 1,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3f4K63iWlH6mX8Kj46o20BCX5QLJ7GUxZkeIf9YGVtg7k_W-I2GoB4jE&s=10",
          price: "$150",
          title: "Boat Nirvana",
          description:
            "Premium wireless headphones with powerful bass, clear sound, and active noise cancellation. Designed for music, gaming, and everyday use with a comfortable over-ear design and long-lasting battery.",
          inStock: true,
        },
        {
          id: 2,
          img: "https://m.media-amazon.com/images/I/61QlOKvUE-L.jpg",
          price: "$190",
          title: "Beribes Hybrid Active",
          description:
            "Lightweight wireless headphones offering balanced audio and a comfortable fit. Features Bluetooth connectivity, built-in microphone, and up to 30 hours of playback on a single charge.",
          inStock: true,
        },
        {
          id: 3,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFoVpmWo4rzbMNrcrj7VWXtC-5lg_5lmm83syo1SbRA&s",
          price: "$300",
          title: "Rock-n-Roll H6 Wireless Headset",
          description:
            "Experience deep bass and immersive audio with these stylish wireless headphones. Equipped with fast Bluetooth pairing, soft ear cushions, and a powerful battery suitable for long listening sessions.",
        },
        {
          id: 4,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsozPlZKGo-9JvaCOxtGoYsg4DIapQANZfLzsalJkVw&s",
          price: "$1450",
          title: "Trully Wireless",
          description:
            "Modern wireless headphones designed for crystal-clear calls and high-quality music. Includes noise reduction, intuitive controls, quick charging, and a foldable design that makes them convenient for travel.",
          inStock: true,
        },
      ];

      setProducts(fakeDb);
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);

  function handleAddToCart() {
    setCartCount((prev) => prev + 1);
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          minHeight: "100vh",
          padding: "20px",
          backgroundColor: theme === "dark" ? "#121212" : "#ffffff",
          color: theme === "dark" ? "#ffffff" : "#000000",
        }}
      >
        <header>
          <h1>My Tech Store</h1>
          <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
          <button onClick={() => setIsModalOpen(true)}>
            View Cart ({cartCount})
          </button>
        </header>

        <input
          type="text"
          placeholder="Search products..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />

        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <div>
            {products
              .filter((p) =>
                p.title.toLowerCase().includes(searchItem.toLowerCase()),
              )
              .map((product) => (
                <ProductCard
                  key={product.id}
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  inStock={product.inStock}
                  onAddToCart={handleAddToCart}
                />
              ))}
          </div>
        )}
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <h2 style={{ color: "black" }}>Your Shopping Cart</h2>
            <p style={{ color: "black" }}>
              You have {cartCount} items in your cart.
            </p>
          </Modal>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
