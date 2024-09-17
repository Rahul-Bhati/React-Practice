import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ restaurant }) => {
  let { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating } = restaurant;

  // console.log(restaurant);
  return (
    <>
      <Link to={`/restaurant/${id}`} className="card">
        <div className="card__img">
          <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`} alt="img" />
        </div>
        <div className="card__info">
          <h2>{name}</h2>
          <p>Avg Rating <span>⭐</span> {avgRating}</p>
          <p>{costForTwo}</p>
          {cuisines.map((cuisine, index) => (
            <span key={index}>{cuisine + ", "}</span>
          ))}
        </div> </Link>
    </>

  )
}

export default Card
