import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar/index'
import Home from './pages/main/home'
import Detail from './pages/main/detail'
import About from './pages/main/about'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/countries/:contries" component={Detail} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
