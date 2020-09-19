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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: '#2c7fb8',
    align: "left"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    align: "left",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
      <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          Sole Marks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>

      </header>

      <body>
      <Grid container
      justify={'center'}
      spacing={3}>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h6" className={classes.title}>
            sole(Geology)
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={11}>
          <Map />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Geology at Your Fingertips</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>Available on iOS.</Paper>
          </Grid>
      </Grid>
      </body>

    </div>
  );
}

export default App;
