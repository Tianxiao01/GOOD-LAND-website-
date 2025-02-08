
import React from 'react';
import './LongTerm.css'; // Import your CSS file

interface listing {
    imageUrl: string;
    name: string;
    avaibility: string
    propertyTitle: string
    bedNum: number
    bathNum: number
    sleepNum: number
    sqfeetNum: number 
    mapLink: string
    airbnbLink: string
    rating: number;
    dates: string;
    price: number;
};


// imageUrl: '/src/assets/CardListing1.avif';
// name: 'Cozy Cabin';
// city: 'Hamilton';
// province: 'Ontario';
// distance: '39 km away';
// shortDescription: 'A perfect getaway in nature.';
// rating: 4.94;
// dates: 'Mar 24-29';
// price: 451;

const Card = ({ imageUrl, name, avaibility, propertyTitle, bedNum, bathNum, sleepNum, sqfeetNum, mapLink, rating, airbnbLink, price }: listing) => {
    return (
        <div className="listing-card">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
                <span className="favorite-tag">{avaibility}</span>
                <button className="heart-button">❤️</button> {/* You can use an icon library */}
            </div>
            <div className="info-container">
                
                <div className="property-container">
                    <div className="property-header">
                        
                        <h1 className="property-title">
                            {propertyTitle}
                        </h1>
                        <div className="property-rating">
                            <span className="rating-score">{rating}</span>
                            <span className="rating-text">Exceptional</span>
                            <a href={airbnbLink} className="review-link">See all reviews</a>
                        </div>
                    </div>

                    <div className="property-details">
                        <div className="detail-item">&#128716; {bedNum} bedrooms</div>
                        <div className="detail-item">&#128704; {bathNum} bathrooms</div>
                        <div className="detail-item">&#128716; Sleeps {sleepNum}</div>
                        <div className="detail-item">&#8501; {sqfeetNum} sq ft</div>
                    </div>

                    <div className="property-amenities">
                        <h3>Popular amenities</h3>
                        <div className="amenities-grid">
                            <div className="amenity-item">&#128716; Hot tub</div>
                            <div className="amenity-item">&#128703; Washer</div>
                            
                            <div className="amenity-item">&#128663; Parking available</div>
                            <div className="amenity-item">&#127777; Air conditioning</div>
                        </div>
                        <a href={airbnbLink} className="see-more-link">See all property amenities</a>
                    </div>
                </div>
                <div className="rightCard">
                    <div className="price-section">Price: CA ${price}/night</div>
                    <div className="map-section">
                        {/* Replace with Google Maps Embed API */}
                        <iframe
                            src={mapLink}
                            width="100%"
                            height="150"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                    <div className="button-section">
                        <a href={airbnbLink}><button className="button-3" >Book Now</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;