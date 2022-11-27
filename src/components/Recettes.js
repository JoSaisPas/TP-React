import Meal from './Meal'
import axios from "axios";
import NavList from './NavList';
import './recettes.css'

import React from 'react';

const divStyle = {
    content: "",
    display: 'table',
    clear: 'both',
  }

  
    
const Recettes = () => {


    let baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const [meal, setMeal] = React.useState();
  
    const [currentMeal, setMessageMeal] = React.useState('potatoes')
    const [inputMeal, setInputMeal] = React.useState(currentMeal);
   
  
      React.useEffect(() =>{
          axios.get(baseUrl+inputMeal).then((d) =>{
              console.log(d.data.meals);
              setMeal(d.data.meals);
          });
      },[inputMeal, setInputMeal]);
  
  
      if (!meal) return (
          <div>
              <p> Pas de post</p>
          </div>
      );
  
     const  handleChange = (event) =>{
          setMessageMeal(event.target.value);
     }
     const  handleClick = () => {
      setInputMeal(currentMeal);
     }
  
      const listItem = meal.map((m) => <Meal mypropos={m} key={m.idMeal}/>); 
      return (
          <div >
          
            <NavList/>
            <div id='input'>
              <input type="search" id="search-meal" name="" placeholder="Tapez le nom d'un aliment en anglais" onChange={handleChange}/>
              <button onClick={handleClick}>Search</button>
            </div>
              <div style={divStyle}>{listItem}</div>
          </div>
      );
};

export default Recettes;