import React from 'react';
import Rate from './Rate';
import {Link} from 'react-router-dom'

const MovieCard = ({
  movie: { id,name, date, rating, image, trailer, description },
}) => {
  return (
    <div className="card">
       <Link to = {`/movie/${name}`} >
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
          {description}
        </div>
        <div className="card_right__button">
        <a href="https://www.youtube.com/watch?v=EOxxKAN-M_Y& ab_channel=At0mium">WATCH TRAILER</a>
        </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;