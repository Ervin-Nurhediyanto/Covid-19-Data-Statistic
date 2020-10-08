import React from 'react'
import './card.css'

function CardStatus(props) {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h1 className={`card-title text-center ${props.color && props.color}`}>
            {props.data}
          </h1>
          <p className="card-subtitle mb-2 text-center text-white">
            {props.title}
          </p>
        </div>
      </div>
    );
}

export default CardStatus