import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MealItem from './MeaItem';

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
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      );
}

export default Meals
