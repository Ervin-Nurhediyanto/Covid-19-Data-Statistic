import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header/Header.jsx'
import Ringkasan from './pages/main/Ringkasan/Ringkasan.jsx'
// import Navbar from './components/Navbar/navbar.jsx'
// import Home from './pages/main/home/home.jsx'
import Detail from './pages/main/detail'
import About from './pages/main/about'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Ringkasan} /> 
        {/* <Route path='/' exact component={Home} /> */}
        <Route path='/countries/:contries' component={Detail} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
