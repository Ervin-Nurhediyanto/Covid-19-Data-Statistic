import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar (props) {
  return (
    <nav className='bg-dark col-2'>
      <ul>
        <li><Link className={`link ${props.color1}`} to='/'>Ringkasan</Link></li>
        <li><Link className={`link ${props.color2}`} to='/statistik'>Statistik</Link></li>
        <li className='info'><Link className={`link ${props.color3}`} to='/informasi-kesehatan'>Informasi Kesehatan</Link></li>
        <li><Link className={`link ${props.color4}`} to='/koping'>Koping</Link></li>
        <li><Link className={`link ${props.color5}`} to='/berita'>Berita</Link></li>
        <li><Link className={`link ${props.color6}`} to='/lokasi-tes'>Lokasi Tes</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
