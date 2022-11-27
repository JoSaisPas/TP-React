import React, { useEffect } from 'react';
import './meal.css';


const Meal = ({mypropos}) => {
    
    return (
        <div id='meal'>
            <h4>{mypropos.strMeal}</h4>
            <h5>{mypropos.strArea}</h5>
            <img src={mypropos.strMealThumb}/>
            <p>{mypropos.strInstructions}</p>
        </div>
    );
};

export default Meal;