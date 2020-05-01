import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [s, setS] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const promise = await axios.get('https://newmedium.herokuapp.com/ping');
      setS(promise.data.news);
    };
    fetchData();
  }, [s]);

  console.log(s);
  if (s) {
    return (
      <div>
        {s.map((n: any) =>
          <div key={n}>
            <h2>{n.title}</h2>
            <img src={n.image}></img>
          </div>
        )}
      </div>

    );
  } return (
    <>
    {console.log(s)}
      loading...
    </>
  );

};
export default App;