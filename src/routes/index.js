import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../screens/Auth';
import Registrarse from '../screens/Auth/Registrarse';
import Main from '../screens/Main';
import Cars from '../screens/Cars';
import EjemploGalerias from '../screens/EjemploGalerias';
import HomePageImageSlider from '../screens/HomePageImageSlider';
import Asignaturas from '../screens/Asignaturas';
import AgregarProfesor from '../screens/AgregarProfesor';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/registrarme" component={Registrarse} />
    <PrivateRoute exact path="/cars" component={Cars} />
    <PrivateRoute exact path="/galerias" component={EjemploGalerias} />
    <PrivateRoute exact path="/sliders" component={HomePageImageSlider} />
    <PrivateRoute exact path="/asignaturas" component={Asignaturas} />
    <PrivateRoute exact path="/profesores/agregar" component={AgregarProfesor} />
  </Switch>
);

export default Routes;
