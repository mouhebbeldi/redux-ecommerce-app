import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

//Components
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cart from './Components/Cart'

function App() {
  return (
    <div className='ui container'>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/cart" exact component={Cart}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
