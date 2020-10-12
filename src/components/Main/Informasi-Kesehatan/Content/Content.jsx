import React from 'react'
import Navbar from '../../../Navbar/navbar'
import Button from '../../../Button/Button'

export default function Content (props) {
  return (
    <div className='container-flut row bg-dark home'>
      <Navbar color3='red' />
      <div className='container col-10 pt-3'>
        <div className='d-flex justify-content-center'>
          <Button name='Gejala' color={`${props.color01}`} onClick={`${props.click01}`} />
          <Button name='Pencegahan' color={`${props.color02}`} onClick={`${props.click02}`} />
          <Button name='Perawatan' color={`${props.color03}`} onClick={`${props.click03}`} />
        </div>
        <h4>Ini Gejala</h4>
      </div>
    </div>
  )
}
