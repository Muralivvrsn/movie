import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"
import picture from "../../no-poster-available.jpg";
const Card = ({ movie }) => {
  const poster = movie.image ? movie.image.original : picture;
  const image = {
    backgroundImage: `url(${poster})`
  }
  return (
    <div className="movie_card">
      <div className="info_section">
        <div className="movie_header text-center d-flex">
          
          <div className="m-auto">
            <h1>{movie.name}</h1>
            <h4>2017, David Ayer</h4>
            <div>
              <span className="minutes">117 min</span>
              <p className="type">Action, Crime, Fantasy</p>
            </div>
          </div>
        </div>
        <div className="movie_desc">
          <p className="text text-left">
            <em>{movie.summary}</em>
          </p>
        </div>
        <div className="py-4">
          <Link to={`/movie/${movie.name}`} state={{ show: movie }}>
            <button type="button" className="btn btn-outline-info">
              Read more
            </button>
          </Link>
        </div>
      </div>
      <div className="blur_back bright_back" style={image}>
      </div>
    </div>
  );
};

export default Card;
