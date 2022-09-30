import React from "react";
import './App.css';
import './index.css';
import { Switch, Route, } from 'react-router-dom';
import TopMenu from "./components/TopMenu";
import Register from "./pages/Register";
import About from "./pages/About";
import GetInvolved from "./pages/GetInvolved";
import Product from "./pages/Product";
import Home from "./pages/Home";


function App() {
  return (
<>

 <TopMenu/>
    <Switch>
        <Route  path="/product">
            <Product />
        </Route>
        <Route path="/getinvolved">
            <GetInvolved />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>




  <main>


{/*
      <p>HGeoinend</p>
      //DEZE doet het!!!
<PhotoSlider
classnaampje="topplaatje3"
quote="You only live ones (and zero's)"
greatmind="Albert Einstein"
/>*/}


  </main>

</>

  );
}

export default App;
