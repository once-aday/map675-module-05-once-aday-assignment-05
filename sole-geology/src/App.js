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

import { styled } from '@material-ui/core/styles';

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: (props) =>
    props.color === 'red'
      ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: (props) =>
    props.color === 'red'
      ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
      : '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: 8,
});

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
          <Paper className={classes.paper}>You stepped in what?!</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>Geology at Your Fingertips</Paper>
          </Grid>

      </Grid>
      <Grid container
      justify={'center'}
      spacing={3}>
      <Grid item xs={6} sm={3}>
          <MyButton color="red">Available on iOS.</MyButton>
        </Grid>
        </Grid>
      </body>

    </div>
  );
}

export default App;
