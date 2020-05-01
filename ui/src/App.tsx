import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [s, setS] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const promise = await axios.get('http://localhost:3001/ping');
      setS(promise.data.news);
    };
    fetchData();
  }, [s]);

  console.log(s);
  if (s !== undefined) {
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