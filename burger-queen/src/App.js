import React from 'react';
import './firebase/firebase';
import Nav from './components/nav'
// import MealOptions from './components/waiters/meal'
import IncomingOrders from './components/kitchen/orders'
import './css/App.css';
import MenuOptions from './components/waiters/menu'
import BreakfastOptions from './components/waiters/breakfast'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/waiters' component={MenuOptions} />
      <Route path='/kitchen' component={IncomingOrders} /> 
      <Switch>
      <Route path='/breakfast' component={BreakfastOptions} />      
      </Switch>
      </Switch>
    </div>
    </Router>
  );
}

const Home = () =>(
  <div>
    <h1>Home Page</h1>
  </div>
)


export default App;
