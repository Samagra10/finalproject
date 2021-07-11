import React from 'react'
import {Route,Switch}  from 'react-router-dom'
import Navbar from './Navbar'
import One from './One'
import Two from './Two'
import Three from "./Three"
import Four from "./Four"
import Five from "./Five"
import Six from "./Six"



const App = () =>
{
  return(
    <React.Fragment>
      <Navbar/>
      <hr/>
      <Two/>
      <Three/>
      <br/>
      <Four/>
      <Five/>
      <br/>
      <Six/>
      <Switch>
      <Route exact path="/A" component={One}/>
      <Route exact path="/B" component={Two}/>
        </Switch>

    </React.Fragment>
  );
};

export default App;