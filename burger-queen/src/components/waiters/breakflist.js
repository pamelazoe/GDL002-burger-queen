import React from 'react'
import Breakfastlist from '../data/breakfast.json'

const Breakfoptions = () =>{
    return(
        <div>
        {Breakfastlist.map((option)=>{
            return <button id={`${option.id}`} key={`${option.item}`}>{`${option.item} $${option.price}`}</button>
        })}
        </div>
    )
};

export default Breakfoptions
