/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar () {
  return (
    <nav className='bg-warning col-2'>
      <ul>
        <li>Ringkasan</li>
        <li>Statistik</li>
        <li>Informasi Kesehatan</li>
        <li>Koping</li>
        <li>Berita</li>
        <li>Lokasi Tes</li>
      </ul>
    </nav>
    // <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    //   <div className='container'>
    //     <a className='navbar-brand' href='#'><h4 className='text-danger'><b>InfoCovid</b></h4></a>
    //     <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
    //       <span className='navbar-toggler-icon' />
    //     </button>
    //     <div className='collapse navbar-collapse' id='navbarNav'>
    //       <ul className='navbar-nav'>
    //         <li className='nav-item active mr-3'>
    //           <Link className='nav-link' to='/'>Home</Link>
    //         </li>
    //         <li className='nav-item mr-3'>
    //           <Link className='nav-link' to='/about'>About</Link>
    //         </li>
    //         <li className='nav-item'>
    //           <Link className='nav-link' to='#'>FAQ</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navbar
