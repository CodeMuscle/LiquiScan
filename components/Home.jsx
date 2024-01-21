import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import toast from 'react-hot-toast';

// Internal Import 
import { IconOne, IconTwo } from './index';


const Home = ({ setActiveComponent, GET_POOL_DETAILS }) => {
  // State Variable
  const [ selectedNetwork, setSelectedNetwork ] = useState({});
  const [ poolAddress, setPoolAddress ] = useState('');
  const [ poolDetails, setPoolDetails ] = useState();

  //Notification
  const notifyError = (msg) => toast.error(msg, {duration: 4000});

  useEffect(() => {
    
  })

  return (
    <div>
      
    </div>
  )
};

export default Home;
