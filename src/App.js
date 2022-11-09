import React, {useState, useEffect }from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from './components/NasaPhoto'

function App() {
  const[data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=yUaOPrL5zfU0pp2piQZLZbcViWUbpv4ZYHsLRBWg')
      .then(res => {
        setData(res.data)
      }, [])
      .catch(err => console.log(err))
  })
  return (
    <div className="App">
     {data && <NasaPhoto photo={data} /> }

    </div>
  );
}

export default App;


