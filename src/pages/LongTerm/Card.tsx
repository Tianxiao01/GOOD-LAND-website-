
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
                <div className="rightCard">
                    <div className="price-section">Price: <strong>CA $859/night</strong></div>
                    <div className="map-section">
                        {/* Replace with Google Maps Embed API */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093666!2d144.95373631584445!3d-37.81627944202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774c48cb2f0b87!2sFlinders+Street+Station!5e0!3m2!1sen!2sus!4v1618185171101!5m2!1sen!2sus"
                            width="100%"
                            height="150"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                    <div className="button-section">
                        <button className="button-3">Book now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;