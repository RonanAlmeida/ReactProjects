import React from "react";
import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";

import ItemList from "./Components/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemList></ItemList>

      <Footer />
    </div>
  );
}

export default App;
