import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react'
import Login from './Components/Login/Login';
import Home from './views/Home';
import Cadastro from './Components/Login/Cadastro';
import Profile from './views/Profile';
import JobPage from './views/JobPage';
function routes() {
    return (
        <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/cadastro' exact component={Cadastro}/>
          <Route path='/perfil' exact component={Profile}/>
          <Route path='/empregos' exact component={JobPage}/>
        </Switch>
      </Router>
        </>
    )
}

export default routes
