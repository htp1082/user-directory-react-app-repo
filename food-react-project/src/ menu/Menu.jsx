import React, { useState } from "react";
import "./Menu.css";

const Menu = ({ meal, favouriteFoodHandler }) => {
  //   console.log(meal);
  const [food, setFood] = useState(false);
  const addfoodhandler = () => {
    // setFood(true);
    setFood(!food);
    favouriteFoodHandler();
    alert("Add to favourite button");
  };

  return (
    <div className={`food-card ${food && "add-to-cart"}`}>
      <img id="card-img" src={meal.strMealThumb} alt="" />
      <div className="text-left">
        <h3>Food Item :{meal.strMeal}</h3>
        <h4>Catagori: {meal.strCategory}</h4>
        <p>Country: {meal.strArea}</p>
      </div>

      <button onClick={addfoodhandler}>
        {food ? "Favourite Food" : "Add to Favourite"}
      </button>
      <button>Favourite Food Pic</button>
    </div>
  );
};

export default Menu;
