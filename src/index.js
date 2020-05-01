import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {Typography, AppBar, Toolbar} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from "@material-ui/icons/Search";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";

import store from './data';
import Movies from './components/Movies';
import Favorites from './components/Favorites';



const root = document.getElementById('root')

const App = props => {
  return(
    <Provider store={store}>
      <Router>
        <AppBar position="static" >
          <Toolbar variant="dense">
            <Link to='/'>
             <SearchIcon />
            </Link>
            <Link to='/favorites'>
             <FavoriteIcon />
            </Link>
              <Typography className='h1' variant="h3">
                Movies & Series
              </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
        </Switch>
      </Router>
     
    </Provider>
  )
}

render( <App />, root );

