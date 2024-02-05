import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilter] = useState("All")

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
    console.log(foods);
  }

  function handleLiClick(id){
    // const foodToRemain = foods.filter(food => food.id !== id)
    // setFoods(foodToRemain)

    const modifiedArray = foods.map(food => {
      if(food.id === id){
        return {
          ...food,
          heatLevel : food.heatLevel += 1
        }
      }else{
        return food
      }
    })
    setFoods(modifiedArray)
  }

  function handleFilter(e){
    setFilter(e.target.value)
  }

  const filteredFoods = foods.filter(food => {
    if(filterBy === "All"){
      return true
    }else{
      return food.cuisine === filterBy
    }
  })

  console.log(filteredFoods)
  //Change from foods below to filteredFoods to marry the states


  const foodList = filteredFoods.map((food) => (
    <li key={food.id} onClick={()=> handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>

      <select name="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select> 
      <br/>

      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
