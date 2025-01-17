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
            href="https://drive.google.com/file/d/1qmjgoDiGu-MElhmRjcxegR4O_JRQv-5z/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            >
          <img 
            src="https://media.licdn.com/dms/image/v2/D4E03AQFKq1xAhaRovw/profile-displayphoto-shrink_400_400/B4EZRx_GqlG0Ao-/0/1737079156186?e=1742428800&v=beta&t=2cpI52TQL4oVWl6uPb-qJJ5c1Y-RLA2qUxtFLgdiRrg" 
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
