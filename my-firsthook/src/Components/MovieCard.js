import React from 'react';
import Rate from './Rate';
import {Link} from 'react-router-dom'

const MovieCard = ({
  movie: { id,name, date, rating, image, trailer, description },
}) => {
  return (
    <div className="card">
      <div className="card_left">
        <img src={image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{date}</li>
          
          </ul>
        </div>
        <div className="card_right__rating">
  
          <Rate rating={rating}/>
        </div>
        <div className="card_right__review">
         <Link to='/'><p>{description}</p></Link> 
        </div>
        <div className="card_right__button">
          <Link to={`${id}`}>WATCH TRAILE </Link>
          
        </div>
      </div>
    </div>
  );
};

export default MovieCard;