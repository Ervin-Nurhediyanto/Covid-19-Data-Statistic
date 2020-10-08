import React from 'react'
import './card.css'

function CardInfo(props) {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title mb-3">
            {props.info}
          </h5>
          <p className="card-subtitle mb-2 text-white">
            {props.desc}
          </p>
        </div>
      </div>
    );
}

export default CardInfo