import React from 'react';
import './App.css';
import store from "./Store/Store"
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
//components area
import Landing from "./Components/Common/Landing";
import Navigation  from "./Components/Common/Navigation";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Navigation />
    <div className="container">
    <Route exact path="/" component={ Landing } />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login}/>
    </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
