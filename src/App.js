import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header/Header.jsx'
// import Navbar from './components/Navbar/navbar.jsx'
import Home from './pages/main/home/home.jsx'
import Detail from './pages/main/detail'
import About from './pages/main/about'

function App () {
  return (
    <BrowserRouter>
      <Header />
      {/* <Navbar /> */}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/countries/:contries' component={Detail} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
