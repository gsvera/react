import React, {Fragment} from 'react';

import "./style/style.scss";

import Home from './Home';
import Formulario from './Formulario';
import CourseGrid from "./CourseGrid";
import Course from "./Course";
import Menu from "./Menu";
// import Users from "./Users"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"


const App = () => (
  <Router>
    <Menu />
   <Switch>
   <Route path="/" exact component = {Home} />
   <Route path="/cursos:id" component = {Course} />
    <Route path="/cursos" component = {CourseGrid} /> 
    {/* <Route path="/usuarios" component = {Users}/> */}
    <Route path="/formulario" component = {() => <Formulario name= "Pagina de contacto"/>} />
    <Route component = {() => (
      <div className = "ed-grid">
      <h1>Error 404</h1>
      <span>Pagina no encontrada</span>
      </div>
    )}/>
   </Switch>
  </Router>)

export default App;