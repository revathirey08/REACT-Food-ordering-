import { useState } from "react";
import FoodCard from "./FoodCard";
import "./App.css";

function App() {

  const [cart, setCart] = useState(0);

  const foods = [
    { id: 1, name: "Pizza", price: 250, rating: 4.8, available: true },
    { id: 2, name: "Burger", price: 180, rating: 4.3, available: true },
    { id: 3, name: "", price: 350, rating: 4.9, available: false },
    { id: 4, name: "Pasta", price: 220, rating: 4.6, available: true },
    { id: 5, name: "Sandwich", price: 120, rating: 3.9, available: true }
  ];

  // Sorting
  const sortedFoods = [...foods].sort((a, b) => a.price - b.price);

  // Filtering
  const filteredFoods = sortedFoods.filter(food => food.rating >= 4);

  function addToCart() {
    setCart(cart + 1);
  }

  return (
    <div className="container">

      <h1>🍔  Fast Food Delivery </h1>

      <h2>🛒 Cart Items : {cart}</h2>

      {filteredFoods.length > 0 ? (
        filteredFoods.map(food => (
          <FoodCard
            key={food.id}
            name={food.name}
            price={food.price}
            rating={food.rating}
            available={food.available}
            add={addToCart}
          />
        ))
      ) : (
        <h2>No Food Available</h2>
      )}

    </div>
  );
}

export default App;