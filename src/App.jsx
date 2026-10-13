import "./App.css";
import Modal from "./components/Modal";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import About from "./Pages/About";
import useCart from './Hooks/useCart'
import ProductDetails from "./Pages/ProductDetails";

function App() {
  const {cartCount, handleAddToCart,handleRemoveFromCart} = useCart()
 
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const timerId = setTimeout(() => {
      const fakeDb = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    price: "$150",
    title: "Boat Nirvana Headphones",
    description: "Wireless over-ear headphones with deep bass, comfortable ear cushions, and long battery life.",
    inStock: true,
    category: "Headphones",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    price: "$190",
    title: "Sony WH-1000XM Headphones",
    description: "Premium wireless headphones featuring active noise cancellation and high-resolution audio.",
    inStock: true,
    category: "Headphones",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    price: "$120",
    title: "JBL Tune Wireless",
    description: "Lightweight Bluetooth headphones designed for everyday music listening and clear calls.",
    inStock: true,
    category: "Headphones",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    price: "$85",
    title: "Sennheiser HD Series",
    description: "Comfortable headphones offering detailed audio reproduction for music and entertainment.",
    inStock: true,
    category: "Headphones",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    price: "$65",
    title: "Boat Airdopes Pro",
    description: "Compact true wireless earbuds with a charging case, touch controls, and Bluetooth connectivity.",
    inStock: true,
    category: "Earbuds",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500",
    price: "$99",
    title: "Samsung Galaxy Buds",
    description: "Wireless earbuds with a compact design, rich audio, and convenient charging case.",
    inStock: true,
    category: "Earbuds",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=500",
    price: "$45",
    title: "Realme Buds Air",
    description: "Affordable wireless earbuds with clear sound, a portable case, and touch controls.",
    inStock: true,
    category: "Earbuds",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500",
    price: "$75",
    title: "Anker Soundcore Earbuds",
    description: "Everyday wireless earbuds offering balanced audio, a secure fit, and extended playback.",
    inStock: false,
    category: "Earbuds",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    price: "$899",
    title: "ASUS VivoBook Laptop",
    description: "Versatile laptop for programming, productivity, browsing, and everyday multitasking.",
    inStock: true,
    category: "Laptops",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    price: "$1299",
    title: "Apple MacBook Pro",
    description: "Premium laptop designed for software development, creative workflows, and demanding applications.",
    inStock: true,
    category: "Laptops",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
    price: "$749",
    title: "HP Pavilion Laptop",
    description: "Everyday laptop for students featuring a portable design and versatile productivity capabilities.",
    inStock: true,
    category: "Laptops",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
    price: "$999",
    title: "Dell Inspiron Laptop",
    description: "Reliable notebook computer suitable for office work, web development, and daily computing.",
    inStock: true,
    category: "Laptops",
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    price: "$1499",
    title: "Lenovo Legion Gaming Laptop",
    description: "Performance-focused gaming laptop built for demanding games, development, and multitasking.",
    inStock: true,
    category: "Laptops",
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=500",
    price: "$1199",
    title: "Acer Nitro Gaming Laptop",
    description: "Gaming notebook with powerful hardware capabilities and a display suited to immersive gameplay.",
    inStock: false,
    category: "Laptops",
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    price: "$1599",
    title: "Apple MacBook Air",
    description: "Slim and lightweight laptop designed for portability, programming, and daily productivity.",
    inStock: true,
    category: "Laptops",
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    price: "$679",
    title: "Lenovo IdeaPad Slim",
    description: "Practical everyday laptop for online classes, documents, browsing, and software development basics.",
    inStock: true,
    category: "Laptops",
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    price: "$799",
    title: "Samsung Galaxy Smartphone",
    description: "Modern smartphone with a vibrant display, capable camera system, and smooth everyday performance.",
    inStock: true,
    category: "Smartphones",
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    price: "$999",
    title: "Apple iPhone",
    description: "Premium smartphone featuring a high-quality camera, responsive interface, and powerful processor.",
    inStock: true,
    category: "Smartphones",
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    price: "$499",
    title: "OnePlus Nord Smartphone",
    description: "Feature-rich smartphone designed for smooth multitasking, photography, and everyday entertainment.",
    inStock: true,
    category: "Smartphones",
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
    price: "$399",
    title: "Redmi Note Smartphone",
    description: "Budget-friendly smartphone offering a large display, versatile cameras, and practical daily features.",
    inStock: true,
    category: "Smartphones",
  },
  {
    id: 21,
    img: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500",
    price: "$599",
    title: "Google Pixel Smartphone",
    description: "Smartphone focused on computational photography, clean software, and useful intelligent features.",
    inStock: false,
    category: "Smartphones",
  },
  {
    id: 22,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    price: "$299",
    title: "Motorola Edge Smartphone",
    description: "Stylish smartphone featuring a modern display, responsive performance, and convenient connectivity.",
    inStock: true,
    category: "Smartphones",
  },
  {
    id: 23,
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
    price: "$699",
    title: "Nothing Phone",
    description: "Distinctive smartphone design paired with a modern interface, capable cameras, and daily performance.",
    inStock: true,
    category: "Smartphones",
  },
  {
    id: 24,
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    price: "$249",
    title: "Samsung Galaxy A Series",
    description: "Practical smartphone for communication, social media, streaming, and everyday photography.",
    inStock: true,
    category: "Smartphones",
  },
  {
    id: 25,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    price: "$249",
    title: "Apple Watch",
    description: "Smartwatch with activity tracking, notifications, and convenient smartphone integration.",
    inStock: true,
    category: "Smartwatches",
  },
  {
    id: 26,
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    price: "$199",
    title: "Samsung Galaxy Watch",
    description: "Smartwatch with customizable watch faces, activity monitoring, and useful everyday notifications.",
    inStock: true,
    category: "Smartwatches",
  },
  {
    id: 27,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    price: "$79",
    title: "Noise ColorFit Watch",
    description: "Affordable smartwatch featuring a colorful display, activity tracking, and smartphone notifications.",
    inStock: true,
    category: "Smartwatches",
  },
  {
    id: 28,
    img: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500",
    price: "$129",
    title: "Fitbit Fitness Watch",
    description: "Wearable fitness tracker designed to monitor activity, workouts, and daily movement.",
    inStock: true,
    category: "Smartwatches",
  },
  {
    id: 29,
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500",
    price: "$89",
    title: "Amazfit Smartwatch",
    description: "Everyday wearable with fitness tracking, customizable watch faces, and activity monitoring.",
    inStock: false,
    category: "Smartwatches",
  },
  {
    id: 30,
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    price: "$59",
    title: "Fire-Boltt Smartwatch",
    description: "Budget smartwatch offering a large display, workout modes, and basic notification support.",
    inStock: true,
    category: "Smartwatches",
  },
  {
    id: 31,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    price: "$89",
    title: "Mechanical Gaming Keyboard",
    description: "Mechanical keyboard with tactile switches, responsive typing, and a durable construction.",
    inStock: true,
    category: "Keyboards",
  },
  {
    id: 32,
    img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
    price: "$129",
    title: "RGB Gaming Keyboard",
    description: "Gaming keyboard featuring customizable lighting, programmable controls, and responsive keys.",
    inStock: true,
    category: "Keyboards",
  },
  {
    id: 33,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    price: "$49",
    title: "Logitech Wireless Keyboard",
    description: "Wireless keyboard with a compact layout, comfortable typing experience, and simple connectivity.",
    inStock: true,
    category: "Keyboards",
  },
  {
    id: 34,
    img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
    price: "$69",
    title: "Compact Mechanical Keyboard",
    description: "Space-saving mechanical keyboard suited to gaming, programming, and minimalist desktop setups.",
    inStock: true,
    category: "Keyboards",
  },
  {
    id: 35,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    price: "$99",
    title: "Wireless Ergonomic Keyboard",
    description: "Ergonomic wireless keyboard designed to provide comfortable typing during long work sessions.",
    inStock: false,
    category: "Keyboards",
  },
  {
    id: 36,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    price: "$39",
    title: "Logitech Wireless Mouse",
    description: "Reliable wireless mouse featuring responsive tracking and an ergonomic shape for everyday computing.",
    inStock: true,
    category: "Mice",
  },
  {
    id: 37,
    img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
    price: "$59",
    title: "RGB Gaming Mouse",
    description: "Gaming mouse with customizable lighting, adjustable sensitivity, and programmable buttons.",
    inStock: true,
    category: "Mice",
  },
  {
    id: 38,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    price: "$29",
    title: "Dell Optical Mouse",
    description: "Simple wired mouse with accurate optical tracking and plug-and-play USB connectivity.",
    inStock: true,
    category: "Mice",
  },
  {
    id: 39,
    img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
    price: "$79",
    title: "Razer Gaming Mouse",
    description: "Performance-oriented gaming mouse with high-precision tracking and configurable controls.",
    inStock: true,
    category: "Mice",
  },
  {
    id: 40,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    price: "$45",
    title: "Bluetooth Travel Mouse",
    description: "Portable wireless mouse designed for laptops, travel, office work, and everyday browsing.",
    inStock: true,
    category: "Mice",
  },
  {
    id: 41,
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    price: "$299",
    title: "LG Full HD Monitor",
    description: "Desktop monitor suited to office productivity, coding, browsing, and everyday multimedia use.",
    inStock: true,
    category: "Monitors",
  },
  {
    id: 42,
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    price: "$449",
    title: "Samsung Curved Monitor",
    description: "Curved desktop display designed to create an immersive workspace for gaming and productivity.",
    inStock: true,
    category: "Monitors",
  },
  {
    id: 43,
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    price: "$599",
    title: "Dell 4K Monitor",
    description: "High-resolution monitor suitable for detailed creative work, programming, and multitasking.",
    inStock: true,
    category: "Monitors",
  },
  {
    id: 44,
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    price: "$349",
    title: "ASUS Gaming Monitor",
    description: "Gaming-oriented display designed for responsive gameplay and a smooth visual experience.",
    inStock: false,
    category: "Monitors",
  },
  {
    id: 45,
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    price: "$229",
    title: "Acer IPS Monitor",
    description: "IPS desktop display for comfortable viewing, productivity, and everyday entertainment.",
    inStock: true,
    category: "Monitors",
  },
  {
    id: 46,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    price: "$129",
    title: "JBL Bluetooth Speaker",
    description: "Portable Bluetooth speaker designed for wireless music playback at home or outdoors.",
    inStock: true,
    category: "Speakers",
  },
  {
    id: 47,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    price: "$199",
    title: "Sony Portable Speaker",
    description: "Wireless speaker offering room-filling sound and convenient Bluetooth connectivity.",
    inStock: true,
    category: "Speakers",
  },
  {
    id: 48,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    price: "$89",
    title: "Boat Stone Speaker",
    description: "Compact portable speaker for casual listening, small gatherings, and everyday entertainment.",
    inStock: true,
    category: "Speakers",
  },
  {
    id: 49,
    img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
    price: "$149",
    title: "Desktop Stereo Speakers",
    description: "Desktop audio speakers designed for music, video calls, movies, and computer entertainment.",
    inStock: true,
    category: "Speakers",
  },
  {
    id: 50,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    price: "$69",
    title: "Mini Wireless Speaker",
    description: "Small portable Bluetooth speaker with a lightweight design for music on the go.",
    inStock: false,
    category: "Speakers",
  },
  {
    id: 51,
    img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
    price: "$39",
    title: "Anker Power Bank",
    description: "Portable battery pack for charging compatible smartphones, earbuds, and other USB devices.",
    inStock: true,
    category: "Accessories",
  },
  {
    id: 52,
    img: "https://images.unsplash.com/photo-1591290619762-c588d3b1b8a3?w=500",
    price: "$29",
    title: "USB-C Fast Charger",
    description: "Compact USB-C wall charger for compatible phones, tablets, and electronic accessories.",
    inStock: true,
    category: "Accessories",
  },
  {
    id: 53,
    img: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500",
    price: "$49",
    title: "USB-C Hub Adapter",
    description: "Multiport adapter that expands compatible laptops with additional USB and display connections.",
    inStock: true,
    category: "Accessories",
  },
  {
    id: 54,
    img: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=500",
    price: "$19",
    title: "Braided USB-C Cable",
    description: "Durable charging and data cable for compatible USB-C electronic devices.",
    inStock: true,
    category: "Accessories",
  },
  {
    id: 55,
    img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
    price: "$59",
    title: "High-Capacity Power Bank",
    description: "Portable charging solution designed to provide additional battery power while traveling.",
    inStock: true,
    category: "Accessories",
  },
  {
    id: 56,
    img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500",
    price: "$899",
    title: "Custom Gaming PC",
    description: "Desktop gaming computer concept designed for high-performance gaming and demanding applications.",
    inStock: true,
    category: "Computers",
  },
  {
    id: 57,
    img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500",
    price: "$1299",
    title: "RGB Gaming Desktop",
    description: "Gaming desktop concept featuring a showcase-style chassis and performance-focused components.",
    inStock: true,
    category: "Computers",
  },
  {
    id: 58,
    img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500",
    price: "$799",
    title: "Office Desktop Computer",
    description: "Desktop computer concept for professional work, web development, and everyday computing tasks.",
    inStock: true,
    category: "Computers",
  },
  {
    id: 59,
    img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500",
    price: "$1099",
    title: "Creator Workstation",
    description: "Desktop workstation concept suited to software development, content creation, and multitasking.",
    inStock: false,
    category: "Computers",
  },
  {
    id: 60,
    img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500",
    price: "$649",
    title: "Compact Mini PC",
    description: "Space-saving computer concept for home offices, web browsing, and everyday productivity.",
    inStock: true,
    category: "Computers",
  },
  {
    id: 61,
    img: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=500",
    price: "$299",
    title: "DJI Camera Drone",
    description: "Aerial photography drone concept designed for capturing landscapes and overhead video footage.",
    inStock: true,
    category: "Cameras",
  },
  {
    id: 62,
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    price: "$899",
    title: "Canon Mirrorless Camera",
    description: "Digital camera concept for photography, interchangeable lenses, and creative image capture.",
    inStock: true,
    category: "Cameras",
  },
  {
    id: 63,
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
    price: "$699",
    title: "Sony Digital Camera",
    description: "Versatile digital camera concept for travel photography, portraits, and everyday content creation.",
    inStock: true,
    category: "Cameras",
  },
  {
    id: 64,
    img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500",
    price: "$399",
    title: "Action Camera",
    description: "Compact action camera concept for recording outdoor adventures and fast-moving activities.",
    inStock: true,
    category: "Cameras",
  },
  {
    id: 65,
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    price: "$129",
    title: "Webcam Pro",
    description: "External webcam concept for video meetings, online classes, and streaming setups.",
    inStock: true,
    category: "Cameras",
  },
  {
    id: 66,
    img: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500",
    price: "$499",
    title: "PlayStation Gaming Console",
    description: "Home gaming console concept for immersive games, digital entertainment, and multiplayer sessions.",
    inStock: true,
    category: "Gaming",
  },
  {
    id: 67,
    img: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500",
    price: "$399",
    title: "Xbox Gaming Console",
    description: "Console gaming concept for playing modern video games and enjoying digital entertainment.",
    inStock: true,
    category: "Gaming",
  },
  {
    id: 68,
    img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500",
    price: "$299",
    title: "Nintendo Gaming Console",
    description: "Gaming console concept designed for casual play, portable entertainment, and multiplayer fun.",
    inStock: true,
    category: "Gaming",
  },
  {
    id: 69,
    img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500",
    price: "$79",
    title: "Wireless Gaming Controller",
    description: "Game controller concept with ergonomic grips, responsive buttons, and wireless connectivity.",
    inStock: true,
    category: "Gaming",
  },
  {
    id: 70,
    img: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500",
    price: "$59",
    title: "Gaming Headset",
    description: "Over-ear gaming headset concept designed for immersive audio and team communication.",
    inStock: false,
    category: "Gaming",
  },
  {
    id: 71,
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500",
    price: "$49",
    title: "Retro Handheld Console",
    description: "Portable gaming device concept inspired by classic arcade games and retro entertainment.",
    inStock: true,
    category: "Gaming",
  },
  {
    id: 72,
    img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500",
    price: "$39",
    title: "Gaming Mouse Pad",
    description: "Desk mat concept providing a smooth surface for mouse tracking and comfortable gaming.",
    inStock: true,
    category: "Gaming",
  },
  {
    id: 73,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    price: "$89",
    title: "Stream Deck Controller",
    description: "Customizable desktop control device concept for managing streaming and productivity shortcuts.",
    inStock: true,
    category: "Accessories",
  },
  {
    id: 74,
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    price: "$799",
    title: "Smart LED Television",
    description: "Smart television concept for streaming, home entertainment, and viewing digital content.",
    inStock: true,
    category: "Televisions",
  },
  {
    id: 75,
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    price: "$1099",
    title: "4K Ultra HD Television",
    description: "Large-screen television concept designed for high-resolution movies, sports, and entertainment.",
    inStock: true,
    category: "Televisions",
  },
  {
    id: 76,
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    price: "$499",
    title: "Android Smart TV",
    description: "Smart TV concept with internet streaming, app support, and a modern home entertainment interface.",
    inStock: true,
    category: "Televisions",
  },
  {
    id: 77,
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500",
    price: "$299",
    title: "Home Theater Projector",
    description: "Projector concept for creating a large-screen movie experience in a home entertainment setup.",
    inStock: true,
    category: "Televisions",
  },
  {
    id: 78,
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    price: "$149",
    title: "Streaming Media Player",
    description: "Compact streaming device concept for accessing online video services on compatible televisions.",
    inStock: false,
    category: "Televisions",
  },
  {
    id: 79,
    img: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500",
    price: "$79",
    title: "Wi-Fi 6 Router",
    description: "Wireless router concept for distributing network connectivity across home and office devices.",
    inStock: true,
    category: "Networking",
  },
  {
    id: 80,
    img: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=500",
    price: "$129",
    title: "Mesh Wi-Fi System",
    description: "Multi-node networking system concept designed to improve wireless coverage throughout a home.",
    inStock: true,
    category: "Networking",
  },
  {
    id: 81,
    img: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500",
    price: "$39",
    title: "Gigabit Ethernet Switch",
    description: "Wired networking device concept for connecting multiple computers and other Ethernet-enabled equipment.",
    inStock: true,
    category: "Networking",
  },
  {
    id: 82,
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500",
    price: "$199",
    title: "Network Storage Server",
    description: "Network storage concept for centralizing files, backups, and shared resources on a local network.",
    inStock: true,
    category: "Networking",
  },
  {
    id: 83,
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500",
    price: "$149",
    title: "Mini Home Server",
    description: "Compact server concept for development experiments, local services, and personal file management.",
    inStock: true,
    category: "Networking",
  },
  {
    id: 84,
    img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500",
    price: "$399",
    title: "External Graphics Enclosure",
    description: "External graphics enclosure concept for connecting compatible graphics hardware to a computer.",
    inStock: false,
    category: "Computer Components",
  },
  {
    id: 85,
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500",
    price: "$299",
    title: "DDR5 Desktop Memory Kit",
    description: "Desktop memory kit concept designed to expand compatible computer memory capacity.",
    inStock: true,
    category: "Computer Components",
  },
  {
    id: 86,
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
    price: "$129",
    title: "NVMe SSD Storage",
    description: "Solid-state storage concept for fast file access, application loading, and computer upgrades.",
    inStock: true,
    category: "Computer Components",
  },
  {
    id: 87,
    img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500",
    price: "$499",
    title: "Graphics Card",
    description: "Dedicated graphics card concept for gaming, GPU-accelerated applications, and creative workloads.",
    inStock: true,
    category: "Computer Components",
  },
  {
    id: 88,
    img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500",
    price: "$199",
    title: "Liquid CPU Cooler",
    description: "Computer cooling component concept designed to help manage processor temperatures under load.",
    inStock: true,
    category: "Computer Components",
  },
  {
    id: 89,
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500",
    price: "$249",
    title: "AMD Ryzen Processor",
    description: "Desktop processor concept for multitasking, software development, and demanding computing workloads.",
    inStock: true,
    category: "Computer Components",
  },
  {
    id: 90,
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
    price: "$89",
    title: "Portable External SSD",
    description: "Compact external storage concept for transferring files and carrying project backups between devices.",
    inStock: true,
    category: "Computer Components",
  },
  {
    id: 91,
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
    price: "$69",
    title: "Laptop Cooling Pad",
    description: "Laptop stand and cooling accessory concept designed to improve airflow during extended computer use.",
    inStock: true,
    category: "Accessories",
  },
  {
    id: 92,
    img: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500",
    price: "$35",
    title: "Laptop Stand",
    description: "Adjustable laptop stand concept for a more comfortable desk setup and improved screen positioning.",
    inStock: true,
    category: "Accessories",
  },
  {
    id: 93,
    img: "https://images.unsplash.com/photo-1591290619762-c588d3b1b8a3?w=500",
    price: "$49",
    title: "65W GaN Charger",
    description: "Compact high-power charger concept for compatible laptops, smartphones, and tablets.",
    inStock: true,
    category: "Accessories",
  },
  {
    id: 94,
    img: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=500",
    price: "$25",
    title: "Multi-Device Charging Cable",
    description: "Everyday charging cable concept for compatible electronic devices and convenient desk organization.",
    inStock: false,
    category: "Accessories",
  },
  {
    id: 95,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500",
    price: "$119",
    title: "USB-C Docking Station",
    description: "Desktop docking station concept that expands laptop connectivity for displays and peripherals.",
    inStock: true,
    category: "Accessories",
  },
  {
    id: 96,
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    price: "$299",
    title: "Portable Monitor",
    description: "Compact secondary display concept for mobile workstations, travel, and extended desktop setups.",
    inStock: true,
    category: "Monitors",
  },
  {
    id: 97,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    price: "$59",
    title: "Vertical Ergonomic Mouse",
    description: "Ergonomic mouse concept with an alternative grip designed for comfortable everyday computer use.",
    inStock: true,
    category: "Mice",
  },
  {
    id: 98,
    img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
    price: "$109",
    title: "Wireless Mechanical Keyboard",
    description: "Wireless mechanical keyboard concept combining tactile typing, a clean desk setup, and portability.",
    inStock: true,
    category: "Keyboards",
  },
  {
    id: 99,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    price: "$179",
    title: "Studio Monitoring Headphones",
    description: "Over-ear headphone concept designed for focused listening, audio editing, and music production.",
    inStock: true,
    category: "Headphones",
  },
  {
    id: 100,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    price: "$249",
    title: "Premium Home Audio System",
    description: "Home audio system concept designed for music playback, movies, and an immersive listening experience.",
    inStock: true,
    category: "Speakers",
  },
];



      setProducts(fakeDb);
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);
 
  

  

  

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const cartTotal = cartCount.reduce((sum, item)=>{
    //1.Remove the dollar sign: "$150" -> "150"
    const priceWithoutDollar = item.price.replace("$","");

    //2.Turn it into a number: "150" -> 150
    const priceAsNumber = Number(priceWithoutDollar);
  
    //3.Add it to the running total
    return sum+priceAsNumber;
   
  },0);

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          padding: "20px",
          backgroundColor: theme === "dark" ? "#121212" : "#ffffff",
          color: theme === "dark" ? "#ffffff" : "#000000",
        }}
      >
        <header>
          <nav style={{marginBottom:"20px"}}>
            <Link to="/" style={{marginRight:"15px", color:"inherit"}}>Home</Link>
            <Link to="/about" style={{ color:"inherit"}}>About Us</Link>
          </nav>
          <h1>My Tech Store</h1>
          <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
          <button onClick={() => setIsModalOpen(true)}>
            View Cart ({cartCount.length})
          </button>
        </header>
                <Routes>
          <Route
            path="/"
            element={
              <div>
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
                        p.title.toLowerCase().includes(searchItem.toLowerCase())
                      )
                      .map((product) => (
                        <ProductCard
                          key={product.id}
                          id={product.id}
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
              </div>
            }
          />
          <Route path="/about" element={<About />} />

          <Route path="/product/:id" element={<ProductDetails products={products} />}/>
        </Routes>


        
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <h2 style={{ color: "black" }}>Your Shopping Cart</h2>
            {cartCount.length===0 ? (
            <p style={{color:"black"}}>Your cart is empty. Go and buy something!</p>
            ):(
              <ul style={{color:"black", paddingLeft:"20px"}}>
                {/*We map the CART array this time, not the products array!*/}
                {cartCount.map((item, index)=>(
                  //We use 'index' as a fallback key since our cart items might not have unique IDs 
                  <li key={index} style={{marginBottom:"10px"}}>
                    <img src={item.img} alt={item.title} width="30" style={{marginRight:"10px"}}/>
                    {item.title}-{item.price}

                    <button
                    onClick={()=> handleRemoveFromCart(index)}
                    style={{marginLeft:"10px",color:"red"}}>
                      X
                    </button>
                  </li>
                ))}

              </ul>
              
            )}
            <hr />
            <h3 style={{color:"black", textAlign:"right"}}>
              Total:${cartTotal}
            </h3>
          </Modal>
        )}
      </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
