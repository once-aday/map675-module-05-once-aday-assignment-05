import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SOLE!Geology
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="body1" gutterBottom>
       What's that you stepped in?<br></br>That's the simple question we answer.
       It's Geology at your finger tips.
       <br></br>Check out a sample of our Oregon dataset below.
       Available on iOS.
      </Typography>
      </header>
      <body>
      <Map />
      <p>
        <h3>by SoleMarks</h3>
      </p>
      </body>

    </div>
  );
}

export default App;
