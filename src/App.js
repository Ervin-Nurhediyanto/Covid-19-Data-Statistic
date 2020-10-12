import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header/Header.jsx'
import Ringkasan from './pages/main/Ringkasan/Ringkasan.jsx'
import Statistik from './pages/main/Statistik/Statistik.jsx'
import Informasi from './pages/main/Informasi-Kesehatan/Informasi-Kesehatan.jsx'
import Koping from './pages/main/Koping/Koping.jsx'
import Berita from './pages/main/Berita/Berita.jsx'
import Lokasi from './pages/main/Lokasi-Tes/Lokasi-Tes.jsx'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Ringkasan} />
        <Route path='/statistik' component={Statistik} />
        <Route path='/informasi-kesehatan' component={Informasi} />
        <Route path='/koping' component={Koping} />
        <Route path='/berita' component={Berita} />
        <Route path='/lokasi-tes' component={Lokasi} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
