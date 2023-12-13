import React from "react";
import "./App.css";
import Quote from "./Quote";
import { mystore } from ".";
import { Provider } from "react-redux";

function App() {
  return (

    <Provider store={mystore}>
    <Quote />
  </Provider>

  );
}

export default App;