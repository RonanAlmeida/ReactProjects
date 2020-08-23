import React from "react";
import CounterExample from "./Components/CounterExample";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";
function App() {
  return (
    <div className='relative pb-10'>
      <Router>
        <Header />
        <div className="p-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
        </Switch>

        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
