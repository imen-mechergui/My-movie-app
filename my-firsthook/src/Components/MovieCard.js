import React from 'react';
import Rate from './Rate'

const MovieCard = ({
  movie: { name, date, rating, image, trailer, description },
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
          <p>{description}</p>
        </div>
        <div className="card_right__button">
          <a href={trailer}>WATCH TRAILER</a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;