import React from 'react';
import Home from './Components/Home';
import { AccountProvider } from './Components/AccountContext';

function App() {
  return (
    <AccountProvider>
      <Home/>
    </AccountProvider>
    
  );
}

export default App;

