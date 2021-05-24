import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div>
      <h1>Solo-Project-Spike!</h1>
      <div className="navBar">
        <ul className="navList">
          <li><Button variant="contained">Sign Out</Button></li>
          <li><Button variant="contained">Events</Button></li>
          <li><Button variant="contained">Add Restaurant</Button></li>
          <li><Button variant="contained">Home</Button></li>
        </ul>
      </div><br /><br /><br /><br />

    <div>
      <h2>Welcome, Test-Username!</h2>
    </div>
    <div className="inputDirection">
      <p>What are you craving?</p>
      <p>Add a restaurant of your choice here:</p>
    </div><br />
    <div>
      <h3>Basic HTML/CSS styling:</h3>
      <form>
      <p>   
        <label>Restaurant: </label>
        <input type="text" placeholder="Restaurant Name" name="username" />
      </p>
      <p>
        <label>Cuisine: </label>
        <input type="text" placeholder="Type of cuisine" name="password" />
      </p>
      <p>
        <label>Restaurant URL: </label>
        <input type="text" placeholder="Enter Restaurant's website" />
      </p><br />
        <Button variant="contained">ADD</Button>
      </form> <hr />

      <div>
        <h3>Material-UI Examples:</h3>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField
          required
          id="filled-required"
          label="Restaurant Name"
          variant="filled"
        /><br />
        <TextField
          required
          id="filled-required"
          label="Cuisine"
          defaultValue="i.e. Mexican"
          variant="filled"
        /> <br />
        <TextField
          required
          id="filled-required"
          label="Required"
          variant="filled"
        />
      </form>
      </div>

      <div>
        <h3>List of your added restaurants:</h3>
        <ul>
          <li>Chipotle &nbsp;&nbsp;<Button variant="outlined">Edit</Button></li>
          <li>Cafe Zupas &nbsp;&nbsp;<Button variant="outlined">Edit</Button></li>
          <li>El Centro &nbsp;&nbsp;<Button variant="outlined">Edit</Button></li>
          <li>Five Guys &nbsp;&nbsp;<Button variant="outlined">Edit</Button></li>
        </ul>
      </div>
    </div>

    </div>
  );
}

export default App;
