import React, {useEffect, useState} from "react";
import { fetchData } from "../../data/apiCall";
import './Home.css'



export const Home = () => {
  const [randomDog, setRandomDog] = useState('');
  const [error, setError] = useState('');

  const fetchRandomDog = () => {
    fetchData('breeds/image/random')
      .then(data => {
        setRandomDog(data.message);
      })
      .catch(err => {
        setError(err);
      });
  }

  useEffect(() => {fetchRandomDog()}, []);

  return(
    <section className="home-page">
      <h2>Welcome Dawgs</h2>
      <p>about us goes here</p>
      <button onClick={() => fetchRandomDog()} >Get Random Dog!</button>
      <img className="random-dog" src={randomDog}/>
    </section>
  );
}

