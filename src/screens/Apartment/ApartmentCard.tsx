import React from "react";
import "./ApartmentCard.css"; // Assurez-vous que le fichier CSS correspond à votre design

const ApartmentCard = ({ apartment }) => {
  const {
    location,
    totalPrice,
    pricePerPart,
    revenuePerMonth,
    surface,
    rooms,
    partsSold,
    totalParts,
    progress,
  } = apartment;

  console.log(apartment);

  return (
    <div className="apartment-card">
      <div className="card-header">
        <span className="badge">Apartment</span>
        <span className="badge sale">On Sale</span>
      </div>
      <div className="card-content">
        <h3>{location}</h3>
        <p>{`Total Price: ${totalPrice} POL`}</p>
        <p>{`Price per Part: ${3} POL`}</p>
        <p>{`Revenue per Month: ${300} POL`}</p>
        <p>{`Surface: ${90} m²`}</p>
        <p>{`Rooms: ${4}`}</p>
        <p>{`Parts Sold: ${0} / ${totalParts}`}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className="card-footer">
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default ApartmentCard;
