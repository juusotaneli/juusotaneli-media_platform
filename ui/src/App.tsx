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
  }, [setS]);

  console.log(s)
  if (s.length !== 0) {
    return (
      <div>
        {s.map((n: any) =>

          <div>
            <h2>{n.title}</h2>
            <img src={n.image}></img>
          </div>
        )}
      </div>

    );
  } return (
    <>
    </>
  )

};
export default App;