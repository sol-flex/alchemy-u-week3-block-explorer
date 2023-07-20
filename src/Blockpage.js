import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import Homepage from './Homepage.js'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import './App.css';

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  
const alchemy = new Alchemy(settings);


function Blockpage() {

  const { blockNumber } = useParams();

  const [block, setBlock] = useState({})

  console.log(blockNumber)

  useEffect(() => {
    async function getBlock() {
        const block = await alchemy.core.getBlock(parseInt(blockNumber))
        console.log(block);

        console.log(block.gasLimit.toNumber());
        console.log(block.gasUsed.toNumber());
        console.log(new Date(block.timestamp * 1000))

        setBlock(block);

    }

    getBlock();

  }, [])

  return (
    <>
      <h1>Block {blockNumber}</h1>
    </>
  )
}

export default Blockpage;
