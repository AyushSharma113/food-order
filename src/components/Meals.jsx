import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Meals = () => {
    const [loadedMeals, setLoadedMeals] = useState([])

    useEffect(() => {
        async function fetchMeals(){
            const response = await fetch ('http://localhost:3000/meals')
            const meals = await response.json()

            if (!response.ok) {
                throw new Error('Could not fetch meals!')
            }
            
            setLoadedMeals(meals)
        }
        fetchMeals()
    }, [])
    
    console.log(loadedMeals)
    
    return (
        <ul id="meals">
          {loadedMeals.map((meal) => (
            <li key={meal.id}>{meal.name}</li>
          ))}
        </ul>
      );
}

export default Meals
