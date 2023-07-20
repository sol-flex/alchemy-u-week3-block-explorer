import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import Homepage from './Homepage.js'
import Blockpage from './Blockpage.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {

  return (
    <>
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/block/:blockNumber" component={Blockpage}/>
      </Router>
    </>
  )
}

export default App;
