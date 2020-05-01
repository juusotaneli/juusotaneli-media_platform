import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [s, setS] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const promise = await axios.get('https://newmedium.herokuapp.com/ping');
      if (promise.data.news !== undefined) {
        setS(promise.data.news);
      }
    };
    fetchData();
  }, [setS]);

  console.log(s);
  if (s !== undefined) {
    return (
      <div>
        {s.slice(0, 15).map((n: any) =>
          <div key = {n}>
            <h2>{n.title}</h2>
            <img src={n.image}></img>
          </div>
        )}
      </div>

    );
  } return (
    <>
    loading...
    </>
  );

};
export default App;