import { createContext, useState, useEffect } from "react";
import { maharashtraCities, cityDescriptions } from "../constants/maharashtraCities";

// Initial sample properties for Maharashtra
const initialProperties = [
  {
    id: 1,
    name: "Luxury Villa in Mumbai",
    location: "Mumbai",
    price: 85000,
    description: cityDescriptions["Mumbai"],
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80"
  },
  {
    id: 2,
    name: "Modern Apartment in Pune",
    location: "Pune",
    price: 45000,
    description: cityDescriptions["Pune"],
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    name: "Spacious Bungalow in Nagpur",
    location: "Nagpur",
    price: 38000,
    description: cityDescriptions["Nagpur"],
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cartItems")) || []
  );
  
  const [properties, setProperties] = useState(
    () => JSON.parse(localStorage.getItem("properties")) || initialProperties
  );

  // Save cart items to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  
  // Save properties to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(properties));
  }, [properties]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    let id = cartItems.findIndex((e) => {
      return e.id === item.id;
    });
    if (id >= 0) {
      let arr = cartItems;

      (arr[id].quantity = arr[id].quantity + item.quantity),
        setCartItems([...arr]);
    } else {
      setCartItems([...cartItems, item]);
    }
  };
  
  // Function to add a new property
  const addProperty = (property) => {
    setProperties([...properties, property]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        setCartItems,
        modal,
        setModal,
        properties,
        setProperties,
        addProperty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
