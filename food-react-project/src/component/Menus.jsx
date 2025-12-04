import React, { useState } from "react";
import { use } from "react";
import Menu from "../ menu/Menu";
import "./Menus.css";

const Menus = ({ foodFech }) => {
  const foodMenu = use(foodFech);
  const meals = foodMenu.meals;

  const [addtoFavourtie , setAddtoFavourite] = useState([]);

  const favouriteFoodHandler=()=>{
    const newAddtoFavourite = [...addtoFavourtie,meals]
    setAddtoFavourite(newAddtoFavourite);
  }

  const [addFoodPic, setAddFood] = useState([]);

  const addtoFoodPic=()=>{
    const newAddtoFoodPic = [...addFoodPic,meals];
    setAddFood(newAddtoFoodPic);
  }
  
//   console.log(meals);
  return (
    <div>
      <h2>Total food item: {meals.length}</h2>
      <h2>Total Add to favourite cart: {addtoFavourtie.length}</h2>
   
      <div className="card-grid">
        {meals.map((meal) => (
          <Menu key={meals.idMeal} meal={meal} favouriteFoodHandler={favouriteFoodHandler}></Menu>
        ))}
      </div>
    </div>
  );
};

export default Menus;
