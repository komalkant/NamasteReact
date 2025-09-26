import {CDN_URL} from '../utils/constant';

const restaurantCard = (props) => {
  const { restObj } = props;
  return (
    <div className="restaurant-card">
      <div className="resturant-detail-component">
        <img
          className="food-image"
          src={`${CDN_URL}/${restObj?.info?.cloudinaryImageId}`}
          alt="Food"
        />
        <div className="restaurant-name-container">
          <span className="restaurant-name">{restObj?.info?.name}</span>
        </div>
        <div className="food-title-container">
          <span className="food-title">{restObj?.info?.cuisines.join(", ")}</span>
        </div>
        <div className="food-price-container">
          <span className="food-price">Price: {restObj?.info?.costForTwo}</span>
        </div>
        <div className="food-rating-container">
          <span className="food-rating">Rating: {restObj?.info?.avgRating}</span>
        </div>
        <div className="food-details">
          {/* <span className='food-cuisine'>Cuisine: Indian</span> */}
          <span className="food-address">
            Address: {restObj?.info?.locality}, {restObj?.info?.areaName}
          </span>
          <span className="food-delivery-time">
            Delivery Time: {restObj?.info?.sla.deliveryTime} mins
          </span>
          {/* <span className='food-description'>This is a description of the delicious food.</span> */}
        </div>
      </div>
    </div>
  );
};

export default restaurantCard;