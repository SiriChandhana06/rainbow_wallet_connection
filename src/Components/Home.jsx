import React, { useState } from 'react';
import img from '../Assets/Digital wallet and online banking (1).png';
import Connect from './Connect';

const Home = () => {
  const [accountDetails, setAccountDetails] = useState({
    displayName: '',
    displayBalance: '',
  });

  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <h1 className='text-white text-6xl flex justify-center p-10 font-bold'>WALLET CONNECTION</h1>
      </div>
      <div className='flex justify-between'>
        <div>
          <div className='ml-40 pl-96 pt-10'>
            <Connect setAccountDetails={setAccountDetails} />
          </div>
          <div className='pt-10'>
            <h1 className='text-white text-4xl pl-20 pt-10'>Address: {accountDetails.displayName}</h1>
          </div>
          <div className='pt-10'>
            <h1 className='text-white text-4xl pl-20 pt-10'>Balance: {accountDetails.displayBalance}</h1>
          </div>
        </div>
        <div>
          <img src={img} alt='Image' />
        </div>
      </div>
    </div>
  );
}

export default Home;
