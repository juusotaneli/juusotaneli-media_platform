import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [s, setS] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const promise = await axios.get<string>('https://newmedium.herokuapp.com/ping');
      setS(promise.data);
      console.log(promise)
    };
    fetchData();
    
  }, [setS]);
  return (
    <div>
      <h1>{s}</h1>
      <p>setting things up, this is going to be _the_ new media!</p>
    </div>
  );
};
export default App;