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
        console.log(data)
      })
      .catch(err => {
        setError(err.message);
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
          {error && <p>There was a {error} error, please try again later.</p>}
          <div className="img-container">
            <img className="random-dog" src={randomDog}/>
          </div>
        </div>  
      </div>
    </section>
  );
}

