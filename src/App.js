import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './componets/layout/Header';
import About from './componets/pages/About';
import Page404 from './componets/pages/Page404';

import Recipes from './componets/recipes/Recipes'
import AddRecipe from './componets/recipes/AddRecipe'

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header branding="Recipe Book" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Recipes} />
              <Route exact path="/recipe/add" component={AddRecipe} />
              <Route exact path="/about" component={About} />
              <Route component={Page404} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
