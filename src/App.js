import React, { Component } from "react";
// import classes from "./App.css";
import Layout from "./components/Layout/Layout";
import SandwichBuilder from "./containers/SandwichBuilder/SandwichBuilder";
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SandwichBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
