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

  // Notification
  const notifyError = (msg) => toast.error(msg, {duration: 4000});

  useEffect(() => {
    const network = JSON.parse(localStorage.getItem('activeNetwork'));
    setSelectedNetwork(network);
  }, []);

  // Calling Function
  const CALL_POOL_DETAIL = async(inputAddress) => {
    const { rpcUrl } = selectedNetwork;

    const zeroAddress = "0x";

    if(!inputAddress || !rpcUrl || inputAddress == zeroAddress){
      return notifyError('Provide Data or Invalid Address')
    }

    const poolDetails = await GET_POOL_DETAILS(inputAddress, selectedNetwork);

    setPoolDetails(poolDetails);
  }

  return (
    <section className="relative overflow-hidden pt-[72px] bg-default-950/40 backdrop-blur-3xl ">
      <div className="absolute h-14 w-14 bg-primary/10 top-2/3 start-80 -z-1 rounded-2xl rounded-tl-none rounded-br-none animate-[spin_10s_linear_infinite]">
      </div>
      <div className="absolute h-14 w-14 bg-primary/10 top-2/3 start-80-z-1 rounded-full animate-ping">
      </div>

      <div className="px-6 pt-20 overflow-hidden">
        <div className="relative">
          <div className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-default-300/70 [mask-image:linear-gradient(to_bottom, white_20%, transparent_75%)] sm:top-16 sm:-translate-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
            <IconOne />
            <IconTwo />
          </div>

          <div className="container">
            <div className="py-14 text-center relative">
              <div className="flex justify-center">
                <div className="max-w-2xl">
                  <h2 className="md:text-6xl/tight text-5xl text-default-100 font-semibold mb-6">
                   Liquidity Finder for your favourite crypto!
                  </h2>
                  <p className="text-base text-default-200 font-medium px-5">
                    Need information about any pool address? We&apos;ve got you covered!
                  </p>

                  <div className="backdrop-blur-2xl bg-white/10 rounded-md max-w-xl mx-auto">
                    <div className="w-full flex items-center justify-between mt-7">
                      <input type="text" className="w-full p-4 border-0 focus:outline-none focus:ring-0 text-sm text-white placeholder:text-white bg-transparent" placeholder="Enter pool address" autoComplete="off" onChange={(e) => setPoolAddress(e.target.value)} />

                      <button className="py-2 px-6 me-2 border-0 text-white font-semibold text-sm rounded-md backdrop-blur-2xl bg-primary hover:bg-primary-hover hover:text-white transition-all duration-500">
                          <div className="flex items-center justify-center gap-1" onClick={() => CALL_POOL_DETAIL(poolAddress)}>
                            <span>Submit</span>
                          </div>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
                    <a href="" onClick={() => setActiveComponent('Liquidity History')} className="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">
                      {
                        poolAddress ? 'Check liquidity' : 'Get pool liquidity'
                      }
                      <FaArrowRightLong />
                    </a>
                    <a href="" onClick={() => setActiveComponent('Liquidity')} className="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">
                      Liquidity
                      <FaArrowRightLong />
                    </a>
                  </div>

                  <p className="text-sm font-md text-default-400 mt-5">
                    Get all details about pools and liquidity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Home;
