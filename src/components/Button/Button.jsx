import React from 'react'
import './Button.css'

export default function Button (props) {
  return (
    <button className={`${props.color} mr-2`} onClick={`${props.click}`}>
      {props.name}
    </button>
  )
}
