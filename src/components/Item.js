import React, {useState} from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false)

  function handleCart() {
      setAddToCart((addToCart) =>!addToCart)
    }

  return (
    <li className={addToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{addToCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;


/*

Component Hierarchy

  App
  ├───Header
  └───PetCard
  
*/