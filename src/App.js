import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Share from "./pages/Share";
import Restaurant from "./pages/Restaurant";
import Default from "./pages/Default";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/share" component={Share} />
        <Route exact path="/restaurants/:id" component={Restaurant}></Route>
        <Route component={Default}></Route>
      </Switch>
    </>
  );
}

export default App;
