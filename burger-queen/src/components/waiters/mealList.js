import React from 'react';
import MealList from '../data/meal.json'

const MealOpt = () => {
    return (
        <div>
            {MealList.map((option)=>{
                return <button id={`${option.id}`} key={`${option.item}`}>{`${option.item}`} ${`${option.price}`}</button>
            })}
        </div>
    )
};

export default MealOpt