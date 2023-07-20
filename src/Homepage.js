import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


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

function Homepage() {
  const [last10Blocks, setLast10Blocks] = useState([])

  useEffect(() => {
    async function getBlockNumber() {
      let latestBlock = await alchemy.core.getBlockNumber()
      let last10Blocks = [];

      console.log(latestBlock)

      for (let i = 0; i < 10; i++) {
        
        last10Blocks.push(latestBlock);
        latestBlock--;

      }

      setLast10Blocks(last10Blocks);
    }

    getBlockNumber();
  }, []);


  return (
    <>
      <h1>Latest 10 blocks</h1>
      <div className="block-container">
        {last10Blocks.map(block => {
          return (
            <Link key={block} to={`/block/${block}`} className="block-link">
              <div key={block} className="block">
                {block}
              </div>  
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Homepage;
