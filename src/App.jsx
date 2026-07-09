import { useState } from "react";
import FoodCard from "./FoodCard";
import "./App.css";

function App() {

  const [cart, setCart] = useState(0);

  const foods = [
    { id: 1, name: "Pizza", price: 250, available: true },
    { id: 2, name: "Burger", price: 180, available: true },
    { id: 3, name: "", price: 150, available: false },
    { id: 4, name: "Sandwich", price: 120, available: true }
  ];

  // Sorting
  const sortedFoods = [...foods].sort((a, b) => a.price - b.price);

  // Filtering
  const filteredFoods = sortedFoods.filter(food => food.price >= 150);

  function addToCart() {
    setCart(cart + 1);
  }

  return (
    <div className="container">

      <h1>🍔 Food Ordering Website</h1>

      <h2>Cart Items : {cart}</h2>

      {filteredFoods.map(food => (
        <FoodCard
          key={food.id}
          name={food.name}
          price={food.price}
          available={food.available}
          add={addToCart}
        />
      ))}

    </div>
  );
}

export default App;


