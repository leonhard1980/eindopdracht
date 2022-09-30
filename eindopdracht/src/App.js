import React from "react";
import './App.css';
import './index.css';
import { Switch, Route, } from 'react-router-dom';
import TopMenu from "./components/TopMenu";
import Register from "./pages/Register";
import About from "./pages/About";
import GetInvolved from "./pages/GetInvolved";
import Product from "./pages/Product";
import PhotoSlider from "./components/photoslider/PhotoSlider";
import Home from "./pages/Home";
import afbeelding05 from "./assets/header05.jpg";


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

  {/*    //DEZE doet het!!!           */}
<PhotoSlider
classnaampje="topplaatje3"
title="You only live ones (and zero's)"
quote="Albert Einstein"
/>

      <p>ryty</p>
        <header className="topplaatje">
            <h1>The lazy way to get
                sustainable ingredients</h1>
        </header>

<p>ryty</p>

      <header className="topplaatje2">
          <h1>_ _ _ _ _ _</h1>
      </header>

      <div className="bumper">
          <h3> be lazy save the planet! </h3>
      </div>





      <header className="topplaatje3">
          <h1>_ _ _ _ _ _</h1>
      </header>


  </main>

</>
  );
}

export default App;
