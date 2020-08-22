import React from "react";
import HelloWorld from "../Components/HelloWorld";

function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl">This is the Home Page</h1>
      <HelloWorld name="Tom" />
    </div>
  );
}

export default Home;
