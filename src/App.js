import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <div className="container">
    <Route path="/" component={ Landing } />
    
    </div>
    </div>
    </Router>
  );
}

export default App;
