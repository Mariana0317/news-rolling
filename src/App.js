import React from 'react';
import Navabar from './Components/Navbar/Navbar';
import Sections from './Components/Sections/Sections';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notice from './Components/Notice/Notice';
function App() {
  return (
    <>
     <Router>
       <Navabar />
       <Switch>
         <Route exact path={"/sections/:category"}>
           <Sections />
         </Route> 
         <Route exact path={"/sections/:category/:id"} >
           <Notice />
         </Route>
       </Switch>
       </Router> 
    </>
  );
}

export default App;
