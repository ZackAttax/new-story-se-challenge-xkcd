import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import  Latest  from './Components/Latest/Latest'
import  Search  from './Components/Search/Search'

function App() {
  return (
    <Router>
      <NavBar className='navBar' />
        <Switch>
               <Route path='/search' component={Search} />
               <Route path='/' component={Latest} />
        </Switch>
    </Router>
  );
}

export default App;
