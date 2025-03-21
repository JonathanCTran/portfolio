import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
       
          
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">From Concept to Deployment | Jonathan Tran’s Tech Journey</h1>
           {/* Clickable profile image */}
          <a
            href="https://drive.google.com/file/d/14I2f47A7LOVRE1RS8pBkIRC2Itji6dpe/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            >
          <img 
            src="https://drive.google.com/file/d/1KnY04mohOtuA_G45_tCL55JDihUYtgiy/view?usp=drive_link" 
            alt="Jonathan Tran's profile" 
            className="user-image" 
          />
          </a>
        </header>

    
        <Route exact path="" component={Customers} />

      </div>
    </Router>
    );
  }
}

export default App;
