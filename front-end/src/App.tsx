import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Header from "./components/Header"
import Signup from "./pages/Signup"
import Counsellors from './pages/Counsellors';
import Counsellor from './pages/Counsellor';
import Appointments from './pages/Appointments';
import User from "./pages/User"
import Chat from "./pages/Chat"
import Reviews from "./pages/Reviews"
import FAQ from "./pages/FAQ"


function App() {
  return (
    <Router>
      <div>
        <Header />
      <Switch>
      <Route path="/faq">
             <FAQ /> 
        </Route>
      <Route path="/reviews">
             <Reviews /> 
        </Route>
      <Route path="/chat/user:id">
             <Chat /> 
        </Route>
      <Route path="/user/user:id">
             <User /> 
        </Route>
      <Route path="/bookings/counsellor:id">
             <Appointments /> 
          </Route>
      <Route path="/counsellors:id">
             <Counsellor /> 
          </Route>
          <Route path="/counsellors">
             <Counsellors /> 
          </Route>
          <Route exact path="/signup">
            <Signup /> 
          </Route>
          <Route exact path="/login">
            <Login /> 
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
