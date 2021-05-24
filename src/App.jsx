import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div>
      <h1>Solo-Project-Spike!</h1>
      <div className="navBar">
        <ul>
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
      </form>
    </div>

    </div>
  );
}

export default App;
