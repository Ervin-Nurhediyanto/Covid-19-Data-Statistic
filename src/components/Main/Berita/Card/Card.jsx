import React from 'react'
import './Card.css'

export default function Card (props) {
  return (
    <div className='news row'>
      <div className='col-2'>
        <a href={`${props.link}`}>
          <div className='news-img'>
            <img src={`${props.image}`} alt='' />
          </div>
        </a>
      </div>
      <div className='col-10 content-news'>
        <h6>{props.reference}</h6>
        <a href={`${props.link}`}>
          <h4>{props.title}</h4>
        </a>
        <p>{props.news}</p>
      </div>
    </div>
  )
}
