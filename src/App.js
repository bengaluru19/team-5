import React from 'react';
import './App.css';
import store from "./Store/Store"
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
//components area
import Landing from "./Components/Common/Landing";
import Navigation  from "./Components/Common/Navigation";
import UserLogin from "./Components/Auth/subcomponents/UserLogin";
import VendorLogin from "./Components/Auth/subcomponents/VendorLogin";
import UserRegister from "./Components/Auth/subcomponents/UserRegister"
import VendorRegister from "./Components/Auth/subcomponents/VendorRegister";
import UserDashboard from "./Components/Dashboard/UserDashboard"
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Navigation />
    <div className="container">
    <Route exact path="/" component={ Landing } />
    <Route path="/user/register" component={UserRegister} />
    <Route path="/vendor/login" component={VendorLogin}/>
    <Route path="/vendor/register" component={VendorRegister}/>
    <Route path="/user/login" component={UserLogin}/>
    <Route path="/user/dashboard" component={UserDashboard} />

    </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
