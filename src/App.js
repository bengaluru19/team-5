import React from 'react';
import './App.css';
import store from "./Store/Store"
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Landing from "./Components/Common/Landing"
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <div className="container">
    <Route path="/" component={ Landing } />
    
    </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
