import React from 'react';
import './App.css';
import store from "./Store/Store"
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
//components area
import Landing from "./Components/Common/Landing";
import Navigation  from "./Components/Common/Navigation";
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Navigation />
    <div className="container">
    <Route path="/" component={ Landing } />
    
    </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
