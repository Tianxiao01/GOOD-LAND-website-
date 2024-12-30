import React from 'react';
import './LongTerm.css'; // Import your CSS file

const listing = {
    imageUrl: '/src/assets/CardListing1.avif',
    name: 'Cozy Cabin',
    city: 'Hamilton',
    province: 'Ontario',
    distance: '39 km away',
    shortDescription: 'A perfect getaway in nature.',
    rating: 4.94,
    dates: 'Mar 24-29',
    price: 451,
};

const Card = () => {
    return (
        <div className="listing-card">
            <div className="image-container">
                <img src={listing.imageUrl} alt={listing.name} />
                <span className="favorite-tag">Guest Favorite</span>
                <button className="heart-button">❤️</button> {/* You can use an icon library */}
            </div>
            <div className="info-container">
                <div className="location">
                    {listing.city}, {listing.province} - {listing.distance}
                </div>
                <div className="description">
                    <h3>{listing.name}</h3>
                    <p>{listing.shortDescription}</p>
                </div>
                <div className="details">
                    <span>★{listing.rating}</span> | <span>{listing.dates}</span> | <span>${listing.price} CAD/night</span>
                </div>
            </div>
        </div>
    );
};

export default Card;