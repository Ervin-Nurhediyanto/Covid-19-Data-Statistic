import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar () {
  return (
    <nav className='bg-warning col-2'>
      <ul>
        <li><Link className='link' to='/'>Ringkasan</Link></li>
        <li><Link className='link' to='/statistik'>Statistik</Link></li>
        <li><Link className='link' to='/informasi-kesehatan'>Informasi Kesehatan</Link></li>
        <li><Link className='link' to='/koping'>Koping</Link></li>
        <li><Link className='link' to='/berita'>Berita</Link></li>
        <li><Link className='link' to='/lokasi-tes'>Lokasi Tes</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
