import React from 'react'
import "./card.css"
const Card = ({ degimon }) => {

    console.log(degimon)

    return (
        <div className='card'>
            <div className='cardImg'>
                <img src={degimon.img}></img>
            </div>
            <h3 className="cardName">{degimon.name}</h3>
            <div className='cardInfo'>
                <div>Level : {degimon.level}</div>
            </div>
        </div>
    )
}

export default Card