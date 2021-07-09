import logo from './logo.svg';
import Home from './pages/Home'
import Error from './pages/Error'
import Results from './pages/Results'
import Login from './pages/Login'
import Description from './pages/Description'
import Addtocart from './pages/Addtocart'
import Buynow from './pages/Buynow'
import Placed from './pages/Placed'

import ReactDOM from 'react-dom';
import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {

  


  return (
  <>
  <Router>
   
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/error'>
        <Error />
      </Route>
      <Route  path='/results/'  >
        <Results/>
      </Route>
      <Route  path='/description/'  >
        <Description/>
      </Route>
      <Route  path='/addtocart/'  >
        <Addtocart/>
      </Route>
      <Route  path='/buynow/'  >
        <Buynow/>
      </Route>
      <Route  path='/placed/'  >
        <Placed/>
      </Route>
      <Route exact path='/login'>
        <Login/>
      </Route>
      <Route exact path='/prime'>
        <Login/>
        </Route>
    </Switch>


      {/* <Route path='*'>
        <Error />
      </Route>  */}
   
  </Router>
    </>
  );
}

export default App;
