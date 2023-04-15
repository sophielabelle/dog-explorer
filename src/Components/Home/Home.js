import React, {useContext, useEffect, useState} from "react";
import { DogContext } from '../../DogContext/DogContext';
import { fetchData } from "../../data/apiCall";
import './Home.css'

export const Home = () => {
  const { showError } = useContext(DogContext);
  const [randomDog, setRandomDog] = useState('');
  const [error, setError] = showError

  const fetchRandomDog = () => {
    fetchData('breeds/image/random')
      .then(data => {
        setRandomDog(data.message);
      })
      .catch(err => {
        setError(`Sorry there was a ${err.message} error please try again`);
      });
  }

  useEffect(() => {fetchRandomDog()}, []);

  return(
    <section className="home-page">
      <h2 className="welcome">Welcome Dawgs</h2>
      <div className="home-contents-container">
        <div className="about-us">
          <p>Hello! Stay on this page to find adorable random dogs. Or visit our exhibits for a specific dog breed where you can save your favorites for later.</p>
        </div>
        <div className="get-random">
          <button onClick={() => fetchRandomDog()} >Get Random Dog!</button>
          <div className="img-container">
            <img className="random-dog-img" src={randomDog}/>
            <p className="error-message">{error}</p>
          </div>
        </div>  
      </div>
    </section>
  );
}

