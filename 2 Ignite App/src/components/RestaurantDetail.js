import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { restaurant } from '../utils/restaurant';
import MenuAccordian from './MenuAccordian';

const RestaurantDetail = () => {
  const [showIndex, setShowIndex] = useState(0);
  let { id } = useParams();
  const info = restaurant.find(res => res.info.id === id).info;

  return (
    <div className="restaurant-detail">
      <div className="restaurant-header">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${info.cloudinaryImageId}`}
          alt={info.name}
          className="restaurant-image"
        />
        <div className="restaurant-info">
          <h1 className="restaurant-name">{info.name}</h1>
          <p className="restaurant-locality">{info.locality}, {info.areaName}</p>
          <p className="restaurant-cost">{info.costForTwo}</p>
          <p className="restaurant-cuisines">{info.cuisines.join(', ')}</p>
          <p className="restaurant-rating">Rating: {info.avgRating} ({info.totalRatingsString} ratings)</p>
        </div>
      </div>
      <div className="restaurant-details">
        <p><strong>Delivery Time:</strong> {info?.sla?.slaString}</p>
        <p><strong>Last Mile Travel:</strong> {info?.sla?.lastMileTravelString}</p>
        <p><strong>Promoted:</strong> {info?.promoted ? 'Yes' : 'No'}</p>
        <p><strong>Discount:</strong> {info?.aggregatedDiscountInfoV3?.header} {info?.aggregatedDiscountInfoV3?.subHeader}</p>
        <p><strong>Availability:</strong> {info?.availability?.opened ? 'Open' : 'Closed'} (Next Close Time: {info?.availability?.nextCloseTime})</p>
        <p><strong>Badges:</strong> {info?.badges?.imageBadges?.map(badge => badge.description).join(', ')}</p>
      </div>

      <MenuAccordian show={showIndex === 0 ? true : false} setshow={() => setShowIndex(0)} />
      <MenuAccordian show={showIndex === 1} setshow={() => setShowIndex(1)} />
      <MenuAccordian show={showIndex === 2} setshow={() => setShowIndex(2)} />
      <MenuAccordian show={showIndex === 3} setshow={() => setShowIndex(3)} />
      <MenuAccordian show={showIndex === 4} setshow={() => setShowIndex(4)} />
    </div>
  );
}

export default RestaurantDetail;
